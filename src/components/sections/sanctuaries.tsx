'use client';

import { SanctuaryCard } from '@/components/ui/sanctuary-card';
import type { Sanctuary } from '@/components/ui/sanctuary-card';

const sanctuariesList: Sanctuary[] = [
  {
    name: 'Bogotá',
    address: 'Calle Falsa 123, Bogotá, Colombia',
    imageUrl: 'https://picsum.photos/seed/bogota/600/400',
    mapsUrl: 'https://maps.google.com'
  },
  {
    name: 'Medellín',
    address: 'Avenida Siempre Viva 742, Medellín, Colombia',
    imageUrl: 'https://picsum.photos/seed/medellin/600/400',
    mapsUrl: 'https://maps.google.com'
  },
  {
    name: 'Florencia',
    address: 'Carrera 10 # 5-50, Florencia, Colombia',
    imageUrl: 'https://picsum.photos/seed/florencia/600/400',
    mapsUrl: 'https://maps.google.com'
  },
  {
    name: 'Santa Marta',
    address: 'Calle 22 # 8-30, Santa Marta, Colombia',
    imageUrl: 'https://picsum.photos/seed/santamarta/600/400',
    mapsUrl: 'https://maps.google.com'
  },
  {
    name: 'Puerto Asís',
    address: 'Calle Principal, Puerto Asís, Colombia',
    imageUrl: 'https://picsum.photos/seed/puertoasis/600/400',
    mapsUrl: 'https://maps.google.com'
  },
  {
    name: 'Amazonas',
    address: 'Leticia, Amazonas, Colombia',
    imageUrl: 'https://picsum.photos/seed/amazonas/600/400',
    mapsUrl: 'https://maps.google.com'
  },
  {
    name: 'Manizales',
    address: 'Carrera 23 # 65-11, Manizales, Colombia',
    imageUrl: 'https://picsum.photos/seed/manizales/600/400',
    mapsUrl: 'https://maps.google.com'
  },
  {
    name: 'Huila',
    address: 'Neiva, Huila, Colombia',
    imageUrl: 'https://picsum.photos/seed/huila/600/400',
    mapsUrl: 'https://maps.google.com'
  }
];

const churchesList: Sanctuary[] = [
  ...sanctuariesList,
  {
    name: 'Maicao',
    address: 'Calle 13 # 10-20, Maicao, Colombia',
    imageUrl: 'https://picsum.photos/seed/maicao/600/400',
    mapsUrl: 'https://maps.google.com'
  },
  {
    name: 'Riohacha',
    address: 'Calle 15 # 7-80, Riohacha, Colombia',
    imageUrl: 'https://picsum.photos/seed/riohacha/600/400',
    mapsUrl: 'https://maps.google.com'
  },
  {
    name: 'Ciénaga',
    address: 'Calle 8 # 11-1, Ciénaga, Colombia',
    imageUrl: 'https://picsum.photos/seed/cienaga/600/400',
    mapsUrl: 'https://maps.google.com'
  },
  {
    name: 'Pasto',
    address: 'Carrera 25 # 18-09, Pasto, Colombia',
    imageUrl: 'https://picsum.photos/seed/pasto/600/400',
    mapsUrl: 'https://maps.google.com'
  },
  {
    name: 'Anserma Nuevo',
    address: 'Plaza Principal, Anserma Nuevo, Colombia',
    imageUrl: 'https://picsum.photos/seed/ansermanuevo/600/400',
    mapsUrl: 'https://maps.google.com'
  },
  {
    name: 'Cali',
    address: 'Avenida 5N # 21-10, Cali, Colombia',
    imageUrl: 'https://picsum.photos/seed/cali/600/400',
    mapsUrl: 'https://maps.google.com'
  },
  {
    name: 'Soacha',
    address: 'Diagonal 30, Soacha, Colombia',
    imageUrl: 'https://picsum.photos/seed/soacha/600/400',
    mapsUrl: 'https://maps.google.com'
  },
  {
    name: 'Santa Rosa de Cabal',
    address: 'Parque Principal, Santa Rosa de Cabal, Colombia',
    imageUrl: 'https://picsum.photos/seed/santarosa/600/400',
    mapsUrl: 'https://maps.google.com'
  },
  {
    name: 'Montería',
    address: 'Carrera 2 # 32-25, Montería, Colombia',
    imageUrl: 'https://picsum.photos/seed/monteria/600/400',
    mapsUrl: 'https://maps.google.com'
  },
  {
    name: 'Cúcuta',
    address: 'Avenida 0, Cúcuta, Colombia',
    imageUrl: 'https://picsum.photos/seed/cucuta/600/400',
    mapsUrl: 'https://maps.google.com'
  }
];


export default function Sanctuaries() {
  return (
    <section id="sanctuaries" className="py-16 md:py-24 bg-background">
      <div className="container max-w-screen-xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl font-headline">Santuarios e Iglesias</h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-foreground/80 font-body">
            Encuentra una comunidad cerca de ti. Estamos creciendo y extendiendo el mensaje de fe por todo el país.
          </p>
        </div>

        <div className="mb-16">
            <h3 className="mb-8 text-2xl font-bold text-center text-primary font-headline">Nuestros Santuarios</h3>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 md:gap-6">
              {sanctuariesList.map((sanctuary) => (
                <SanctuaryCard key={sanctuary.name} sanctuary={sanctuary} />
              ))}
            </div>
        </div>

        <div>
            <h3 className="mb-8 text-2xl font-bold text-center text-primary font-headline">Nuestras Iglesias</h3>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 md:gap-6">
              {churchesList.map((church) => (
                <SanctuaryCard key={church.name} sanctuary={church} />
              ))}
            </div>
        </div>

      </div>
    </section>
  );
}
