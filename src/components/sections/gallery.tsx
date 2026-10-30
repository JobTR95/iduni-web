'use client';

import { useEffect, useMemo, useRef, useState, type TouchEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  ChevronLeft,
  ChevronRight,
  Droplets,
  Flame,
  ImageOff,
  Info,
  Users,
  type LucideIcon,
} from 'lucide-react';
import type { CategoriaGaleria } from '@/lib/galeria-server';

const ICONOS: Record<string, LucideIcon> = {
  'fiestas-ceremonias': Flame,
  'bautismos-oracion': Droplets,
  'cultos-comunidad': Users,
};

export default function Gallery({ categorias }: { categorias: CategoriaGaleria[] }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const fotos = useMemo(
    () => categorias.flatMap((categoria) => categoria.fotos),
    [categorias]
  );

  const indicePorSrc = useMemo(
    () => new Map(fotos.map((foto, index) => [foto.src, index])),
    [fotos]
  );

  const selected = selectedIndex !== null ? fotos[selectedIndex] : null;
  const total = fotos.length;

  const verAnterior = () =>
    setSelectedIndex((current) =>
      current === null || total === 0 ? current : (current + total - 1) % total
    );

  const verSiguiente = () =>
    setSelectedIndex((current) =>
      current === null || total === 0 ? current : (current + 1) % total
    );

  useEffect(() => {
    if (selectedIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        setSelectedIndex((current) =>
          current === null || total === 0 ? current : (current + total - 1) % total
        );
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        setSelectedIndex((current) =>
          current === null || total === 0 ? current : (current + 1) % total
        );
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedIndex, total]);

  const onTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const onTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;

    const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const delta = endX - touchStartX.current;

    if (Math.abs(delta) > 50) {
      if (delta > 0) {
        verAnterior();
      } else {
        verSiguiente();
      }
    }

    touchStartX.current = null;
  };

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
            Aquí compartimos los momentos especiales de nuestra comunidad. Fotografías de nuestros
            cultos, reuniones, festividades sagradas y actividades comunitarias que reflejan nuestra
            fe y unidad espiritual.
          </p>
        </div>

        <div className="mt-6 rounded-lg border border-primary/20 bg-secondary/30 px-5 py-4">
          <div className="flex items-start gap-3">
            <Info className="mt-0.5 w-5 h-5 shrink-0 text-primary" aria-hidden="true" />
            <p className="text-sm leading-relaxed text-muted-foreground break-words">
              <span className="font-semibold text-foreground">Aviso de imagen:</span>{' '}
              Las fotos de esta galería fueron tomadas en nuestros cultos y eventos públicos y se usan
              únicamente con fines informativos, sin fines comerciales ni de lucro. Si no deseas aparecer,
              escríbenos a{' '}
              <a
                href="mailto:iduni.bogotacentral@hotmail.com?subject=Solicitud%20de%20retiro%20de%20imagen%20-%20Galer%C3%ADa"
                className="font-medium text-primary underline underline-offset-4 hover:text-primary/80"
              >
                iduni.bogotacentral@hotmail.com
              </a>{' '}
              y difuminaremos o retiraremos tu foto en un plazo máximo de 72 horas hábiles. Tratamos tu
              imagen conforme a la Ley 1581 de 2012.{' '}
              <Link
                href="/politica-de-datos"
                className="font-medium text-primary underline underline-offset-4 hover:text-primary/80"
              >
                Ver política completa
              </Link>
              .
            </p>
          </div>
        </div>

        {total > 0 ? (
          <div className="mt-12 space-y-14">
            {categorias.map((categoria) => {
              const Icono = ICONOS[categoria.slug] ?? ImageOff;
              const tituloId = `categoria-${categoria.slug}`;

              return (
                <section key={categoria.slug} aria-labelledby={tituloId}>
                  <div className="mb-6 flex items-start gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icono className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <h3
                        id={tituloId}
                        className="font-headline text-2xl font-bold text-primary md:text-3xl"
                      >
                        {categoria.titulo}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {categoria.descripcion}
                      </p>
                    </div>
                    <span className="ml-auto hidden shrink-0 rounded-full border border-border px-3 py-1 text-xs text-muted-foreground sm:inline-block">
                      {categoria.fotos.length}{' '}
                      {categoria.fotos.length === 1 ? 'fotografía' : 'fotografías'}
                    </span>
                  </div>

                  <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
                    {categoria.fotos.map((foto) => {
                      const index = indicePorSrc.get(foto.src);

                      return (
                        <button
                          key={foto.src}
                          type="button"
                          onClick={() => {
                            if (index !== undefined) setSelectedIndex(index);
                          }}
                          aria-label={`Ampliar: ${foto.alt}`}
                          className="relative block w-full mb-4 overflow-hidden border rounded-lg break-inside-avoid border-border group cursor-zoom-in"
                        >
                          <Image
                            src={foto.src}
                            alt={foto.alt}
                            width={foto.width}
                            height={foto.height}
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
                            className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                          />
                        </button>
                      );
                    })}
                  </div>
                </section>
              );
            })}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-4 py-16 mt-12 text-center border border-dashed rounded-lg border-border">
            <ImageOff className="w-12 h-12 text-muted-foreground" />
            <p className="text-lg text-muted-foreground">
              Aún no hay fotografías en la galería.
            </p>
            <p className="text-sm text-muted-foreground/80">
              Pronto compartiremos nuevos momentos de nuestra comunidad.
            </p>
          </div>
        )}
      </div>

      <Dialog
        open={selectedIndex !== null}
        onOpenChange={(open) => {
          if (!open) setSelectedIndex(null);
        }}
      >
        <DialogContent className="sm:max-w-5xl">
          <DialogHeader>
            <DialogTitle className="font-headline text-primary text-xl">
              {selected ? `Fotografía ${(selectedIndex ?? 0) + 1} de ${total}` : ''}
            </DialogTitle>
            <DialogDescription className="sr-only">
              Vista ampliada de la fotografía. Usa las flechas izquierda y derecha para navegar.
            </DialogDescription>
          </DialogHeader>
          {selected && (
            <div
              className="relative w-full h-[60vh] sm:h-[70vh] overflow-hidden rounded-lg bg-black/5"
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              <Image
                src={selected.src}
                alt={selected.alt}
                fill
                sizes="(max-width: 1024px) 90vw, 1024px"
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
          {selected && (
            <p className="text-sm text-center text-muted-foreground">{selected.alt}</p>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
