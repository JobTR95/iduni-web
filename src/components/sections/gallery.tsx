'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
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
} from 'lucide-react';
import { fotosDeCategoria } from '@/lib/galeria';

const galleryCategories = [
  {
    title: 'Cultos y Reuniones',
    slug: 'cultos-reuniones',
    icon: <Camera className="w-16 h-16 mx-auto text-muted-foreground group-hover:text-primary transition-colors" />,
  },
  {
    title: 'Comunidad y Hermandad',
    slug: 'comunidad-hermandad',
    icon: <Users className="w-16 h-16 mx-auto text-muted-foreground group-hover:text-primary transition-colors" />,
  },
  {
    title: 'Festividades Sagradas',
    slug: 'festividades-sagradas',
    icon: <PartyPopper className="w-16 h-16 mx-auto text-muted-foreground group-hover:text-primary transition-colors" />,
  },
  {
    title: 'Momentos de Oración',
    slug: 'momentos-oracion',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-16 h-16 mx-auto text-muted-foreground group-hover:text-primary transition-colors"
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
    icon: <BookOpen className="w-16 h-16 mx-auto text-muted-foreground group-hover:text-primary transition-colors" />,
  },
  {
    title: 'Servicio Comunitario',
    slug: 'servicio-comunitario',
    icon: <Handshake className="w-16 h-16 mx-auto text-muted-foreground group-hover:text-primary transition-colors" />,
  },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<(typeof galleryCategories)[number] | null>(null);
  const fotos = activeCategory ? fotosDeCategoria(activeCategory.slug) : [];

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

        <Card className="p-6 bg-secondary/50 border-primary/50 shadow-lg">
            <p className="text-center text-lg text-muted-foreground">
                Aquí compartimos los momentos especiales de nuestra comunidad. Fotografías de nuestros cultos, reuniones, festividades sagradas y actividades comunitarias que reflejan nuestra fe y unidad espiritual.
            </p>
        </Card>

        <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3">
          {galleryCategories.map((category) => (
            <Card
              key={category.title}
              onClick={() => setActiveCategory(category)}
              className="group text-center transition-all duration-300 ease-in-out border-2 border-primary/20 hover:border-primary hover:shadow-2xl cursor-pointer"
            >
              <CardContent className="flex flex-col items-center justify-center h-56 p-6">
                {category.icon}
              </CardContent>
               <div className="py-4 font-semibold text-center bg-transparent border-t-2 border-primary/20 text-muted-foreground group-hover:text-primary">
                {category.title}
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={activeCategory !== null} onOpenChange={(open) => { if (!open) setActiveCategory(null); }}>
        <DialogContent className="sm:max-w-4xl max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-headline text-primary text-2xl">
              {activeCategory?.title}
            </DialogTitle>
          </DialogHeader>
          {fotos.length > 0 ? (
            <div className="grid grid-cols-1 gap-4 py-2 md:grid-cols-2 lg:grid-cols-3">
              {fotos.map((foto) => (
                <div
                  key={foto}
                  className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border"
                >
                  <Image
                    src={foto}
                    alt={`Fotografía de ${activeCategory?.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
              <ImageOff className="w-16 h-16 text-muted-foreground" />
              <p className="text-lg text-muted-foreground">
                Aún no hay fotografías en esta categoría.
              </p>
              <p className="text-sm text-muted-foreground/80">
                Pronto compartiremos los momentos de {activeCategory?.title.toLowerCase()}.
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}