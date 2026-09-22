'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Camera,
  Users,
  PartyPopper,
  BookOpen,
  Handshake,
  ImageOff,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

const galleryCategories = [
  {
    title: 'Cultos y Reuniones',
    slug: 'cultos-reuniones',
    icon: <Camera className="w-8 h-8 text-primary" />,
  },
  {
    title: 'Comunidad y Hermandad',
    slug: 'comunidad-hermandad',
    icon: <Users className="w-8 h-8 text-primary" />,
  },
  {
    title: 'Festividades Sagradas',
    slug: 'festividades-sagradas',
    icon: <PartyPopper className="w-8 h-8 text-primary" />,
  },
  {
    title: 'Momentos de Oración',
    slug: 'momentos-oracion',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 text-primary"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14.5 16.5a2.5 2.5 0 1 1-5 0" />
        <path d="M17 12.2c0-1.5-.7-2.9-2-4" />
        <path d="M12 12.5V10" />
        <path d="M7 12.2c0-1.5.7-2.9 2-4" />
        <path d="M4.8 14.5c0 3.2 2.8 5.8 6.2 6.5" />
        <path d="M19.2 14.5c0 3.2-2.8 5.8-6.2 6.5" />
        <path d="m12 6.5-1.5-2-1.5 2" />
        <path d="M12 3v3.5" />
      </svg>
    ),
  },
  {
    title: 'Estudios Bíblicos',
    slug: 'estudios-biblicos',
    icon: <BookOpen className="w-8 h-8 text-primary" />,
  },
  {
    title: 'Servicio Comunitario',
    slug: 'servicio-comunitario',
    icon: <Handshake className="w-8 h-8 text-primary" />,
  },
];

interface Foto {
  src: string;
  categoria: string;
}

export default function Gallery({
  fotosPorCategoria,
}: {
  fotosPorCategoria: Record<string, string[]>;
}) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const allPhotos: Foto[] = galleryCategories.flatMap((categoria) =>
    (fotosPorCategoria[categoria.slug] ?? []).map((src) => ({
      src,
      categoria: categoria.title,
    }))
  );

  const selected = selectedIndex !== null ? allPhotos[selectedIndex] : null;
  const total = allPhotos.length;

  const verAnterior = () => setSelectedIndex((current) => (current === null || total === 0 ? current : (current + total - 1) % total));
  const verSiguiente = () => setSelectedIndex((current) => (current === null || total === 0 ? current : (current + 1) % total));

  return (
    <section id="gallery" className="py-16 md:py-24 bg-background">
      <div className="container max-w-screen-lg mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold md:text-5xl font-headline text-primary">
            Galería de Fotografías
          </h2>
          <div className="relative flex justify-center mt-4">
            <div className="w-24 h-1 bg-primary rounded-full"></div>
          </div>
        </div>

        <div className="rounded-lg border border-primary/50 bg-secondary/50 p-6 shadow-lg">
          <p className="text-center text-lg text-muted-foreground">
            Aquí compartimos los momentos especiales de nuestra comunidad. Fotografías de nuestros cultos, reuniones, festividades sagradas y actividades comunitarias que reflejan nuestra fe y unidad espiritual.
          </p>
        </div>

        <div className="mt-12 space-y-14">
          {galleryCategories.map((categoria) => {
            const fotos = fotosPorCategoria[categoria.slug] ?? [];
            return (
              <div key={categoria.slug}>
                <div className="flex items-center gap-3 mb-6">
                  {categoria.icon}
                  <h3 className="text-2xl font-bold font-headline text-foreground">
                    {categoria.title}
                  </h3>
                </div>

                {fotos.length > 0 ? (
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {fotos.map((foto) => {
                      const fotoIndex = allPhotos.findIndex((f) => f.src === foto && f.categoria === categoria.title);
                      return (
                        <button
                          key={foto}
                          type="button"
                          onClick={() => setSelectedIndex(fotoIndex)}
                          aria-label={`Ampliar fotografía de ${categoria.title}`}
                          className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border group cursor-zoom-in"
                        >
                          <Image
                            src={foto}
                            alt={`Fotografía de ${categoria.title}`}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </button>
                      );
                    })}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-12 text-center gap-4 rounded-lg border border-dashed border-border">
                    <ImageOff className="w-12 h-12 text-muted-foreground" />
                    <p className="text-lg text-muted-foreground">
                      Aún no hay fotografías en esta categoría.
                    </p>
                    <p className="text-sm text-muted-foreground/80">
                      Pronto compartiremos los momentos de {categoria.title.toLowerCase()}.
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <Dialog open={selectedIndex !== null} onOpenChange={(open) => { if (!open) setSelectedIndex(null); }}>
        <DialogContent className="sm:max-w-5xl">
          <DialogHeader>
            <DialogTitle className="font-headline text-primary text-xl">
              {selected ? `${selected.categoria} · ${(selectedIndex ?? 0) + 1} / ${total}` : ''}
            </DialogTitle>
          </DialogHeader>
          {selected && (
            <div className="relative w-full h-[70vh] overflow-hidden rounded-lg bg-black/5">
              <Image
                src={selected.src}
                alt={`Fotografía ampliada de ${selected.categoria}`}
                fill
                sizes="90vw"
                className="object-contain"
              />
              {total > 1 && (
                <>
                  <button
                    type="button"
                    onClick={verAnterior}
                    aria-label="Foto anterior"
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-3 text-white bg-black/40 rounded-full transition-colors hover:bg-black/70"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    type="button"
                    onClick={verSiguiente}
                    aria-label="Foto siguiente"
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-3 text-white bg-black/40 rounded-full transition-colors hover:bg-black/70"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}