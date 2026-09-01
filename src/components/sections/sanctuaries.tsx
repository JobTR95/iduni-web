'use client';

import { SanctuaryCard } from '@/components/ui/sanctuary-card';
import type { Sanctuary } from '@/components/ui/sanctuary-card';

const sanctuariesList: Sanctuary[] = [
  {
    name: 'Sede Principal Bogotá',
    address: 'Cra 19c #53-68, Barrio San Carlos, Bogotá',
    imageUrl: 'https://picsum.photos/seed/bogota/600/400',
    mapsUrl: 'https://maps.google.com'
  }
];

const churchesList: Sanctuary[] = [
  {
    name: 'Soacha',
    address: 'Calle 9 #48K-61, Barrio Danubio, Soacha',
    imageUrl: 'https://picsum.photos/seed/soacha/600/400',
    mapsUrl: 'https://maps.google.com'
  },
  {
    name: 'Paipa-Boyacá',
    address: 'Calle 21 #27-11, Barrio Sausalito',
    imageUrl: 'https://picsum.photos/seed/paipa/600/400',
    mapsUrl: 'https://maps.google.com'
  },
  {
    name: 'Santa Marta',
    address: 'Mz 4 Casa 2, Vereda El Curval',
    imageUrl: 'https://picsum.photos/seed/santamarta/600/400',
    mapsUrl: 'https://maps.google.com'
  },
  {
    name: 'Puerto Asís',
    address: 'Barrio El Prado, Puerto Asís, Putumayo',
    imageUrl: 'https://picsum.photos/seed/puertoasis/600/400',
    mapsUrl: 'https://maps.google.com'
  },
  {
    name: 'Pereira',
    address: 'Carrera 6 #6-23N, Barrio Villavicencio (Antiguo Bavaria)',
    imageUrl: 'https://picsum.photos/seed/pereira/600/400',
    mapsUrl: 'https://maps.google.com'
  },
  {
    name: 'Riohacha',
    address: 'Carrera 14C Bis #36-25, Barrio Nuevo Milenio (Detrás del aeropuerto)',
    imageUrl: 'https://picsum.photos/seed/riohacha/600/400',
    mapsUrl: 'https://maps.google.com'
  },
  {
    name: 'Ciénaga',
    address: 'Calle 18, Kra 42, Barrio Los Girasoles, Ciénaga, Magdalena',
    imageUrl: 'https://picsum.photos/seed/cienaga/600/400',
    mapsUrl: 'https://maps.google.com'
  },
  {
    name: 'Cali',
    address: 'Carrera 41B #38-19, Barrio Antonio Nariño',
    imageUrl: 'https://picsum.photos/seed/cali/600/400',
    mapsUrl: 'https://maps.google.com'
  },
  {
    name: 'Pasto',
    address: 'Cra 17E #13-40, Corregimiento de Jamondino, Pasto, Nariño',
    imageUrl: 'https://picsum.photos/seed/pasto/600/400',
    mapsUrl: 'https://maps.google.com'
  },
  {
    name: 'Medellín',
    address: 'Cll 48D #99B-183 Int 110, Barrio Juan XXIII',
    imageUrl: 'https://picsum.photos/seed/medellin/600/400',
    mapsUrl: 'https://maps.google.com'
  },
  {
    name: 'Cúcuta',
    address: 'Calle 13 #11-20, Carlos Pizarro, Cúcuta (Sector puente rojo)',
    imageUrl: 'https://picsum.photos/seed/cucuta/600/400',
    mapsUrl: 'https://maps.google.com'
  },
  {
    name: 'Ibagué',
    address: 'Calle 15 #11A-51, Ancón',
    imageUrl: 'https://picsum.photos/seed/ibague/600/400',
    mapsUrl: 'https://maps.google.com'
  },
  {
    name: 'Anserma',
    address: 'Calle 7 #9-23, Barrio El Reposo',
    imageUrl: 'https://picsum.photos/seed/anserma/600/400',
    mapsUrl: 'https://maps.google.com'
  },
  {
    name: 'Mendihuaca',
    address: 'Kilómetro 48, Vía La Poza Encantada',
    imageUrl: 'https://picsum.photos/seed/mendihuaca/600/400',
    mapsUrl: 'https://maps.google.com'
  },
  {
    name: 'Villavicencio',
    address: 'Kr 33 #26A-22, Barrio San Marcos (Diagonal a Unicentro)',
    imageUrl: 'https://picsum.photos/seed/villavicencio/600/400',
    mapsUrl: 'https://maps.google.com'
  },
  {
    name: 'Maicao',
    address: 'Carrera 28 #6-61, Barrio Vincula Palacio',
    imageUrl: 'https://picsum.photos/seed/maicao/600/400',
    mapsUrl: 'https://maps.google.com'
  },
  {
    name: 'Manizales',
    address: 'Calle 50B N 39-09, Barrio Guamal',
    imageUrl: 'https://picsum.photos/seed/manizales/600/400',
    mapsUrl: 'https://maps.google.com'
  },
  {
    name: 'Yopal',
    address: 'Calle 60A #03A-04, Barrio Llano Lindo',
    imageUrl: 'https://picsum.photos/seed/yopal/600/400',
    mapsUrl: 'https://maps.google.com'
  },
  {
    name: 'Sincelejo',
    address: 'Cr 18G #46-4, Barrio Uribe Uribe',
    imageUrl: 'https://picsum.photos/seed/sincelejo/600/400',
    mapsUrl: 'https://maps.google.com'
  },
  {
    name: 'Montería',
    address: 'Barrio Villa Los Alpes, Principal de la 22 (Diagonal a ferretería 1A)',
    imageUrl: 'https://picsum.photos/seed/monteria/600/400',
    mapsUrl: 'https://maps.google.com'
  },
  {
    name: 'Florencia',
    imageUrl: 'https://picsum.photos/seed/florencia/600/400'
  },
  {
    name: 'La Argentina (Huila)',
    imageUrl: 'https://picsum.photos/seed/argentina/600/400'
  },
  {
    name: 'Amazonas',
    imageUrl: 'https://picsum.photos/seed/amazonas/600/400'
  },
  {
    name: 'Santa Rosa de Cabal',
    imageUrl: 'https://picsum.photos/seed/santarosa/600/400'
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