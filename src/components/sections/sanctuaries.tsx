'use client';

import { SanctuaryCard } from '@/components/ui/sanctuary-card';
import { iglesias, sedesPrincipales } from '@/lib/santuarios';

export default function Sanctuaries() {
  return (
    <section id="sanctuaries" className="py-16 md:py-24 bg-background">
      <div className="container max-w-screen-xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold md:text-4xl font-headline">
            Santuarios e Iglesias
          </h1>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-foreground/80 font-body">
            Encuentra una comunidad cerca de ti. Estamos creciendo y extendiendo el mensaje de fe
            por todo el país.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="mb-8 text-2xl font-bold text-center text-primary font-headline">
            Nuestros Santuarios
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 md:gap-6">
            {sedesPrincipales.map((sede) => (
              <SanctuaryCard key={sede.name} sanctuary={sede} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-8 text-2xl font-bold text-center text-primary font-headline">
            Nuestras Iglesias
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 md:gap-6">
            {iglesias.map((iglesia) => (
              <SanctuaryCard key={iglesia.name} sanctuary={iglesia} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
