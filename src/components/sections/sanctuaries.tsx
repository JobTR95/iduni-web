'use client';

import { SanctuaryCard } from '@/components/ui/sanctuary-card';
import type { Sanctuary } from '@/components/ui/sanctuary-card';

const mapsUrlFor = (address: string): string =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

const sanctuariesList: Sanctuary[] = [
  {
    name: 'Sede Principal Bogotá',
    address: 'Cra 19c #53-68, Barrio San Carlos, Bogotá, Colombia',
    imageUrl: 'https://picsum.photos/seed/bogota/600/400',
    mapsUrl: mapsUrlFor('Cra 19c #53-68, Barrio San Carlos, Bogotá, Colombia')
  }
];

const churchesList: Sanctuary[] = [
  {
    name: 'Soacha',
    address: 'Calle 9 #48K-61, Barrio Danubio, Soacha, Colombia',
    imageUrl: 'https://picsum.photos/seed/soacha/600/400',
    mapsUrl: mapsUrlFor('Calle 9 #48K-61, Barrio Danubio, Soacha, Colombia')
  },
  {
    name: 'Paipa-Boyacá',
    address: 'Calle 21 #27-11, Barrio Sausalito, Paipa, Boyacá, Colombia',
    imageUrl: 'https://picsum.photos/seed/paipa/600/400',
    mapsUrl: mapsUrlFor('Calle 21 #27-11, Barrio Sausalito, Paipa, Boyacá, Colombia')
  },
  {
    name: 'Santa Marta',
    address: 'Mz 4 Casa 2, Vereda El Curval, Santa Marta, Magdalena, Colombia',
    imageUrl: 'https://picsum.photos/seed/santamarta/600/400',
    mapsUrl: mapsUrlFor('Mz 4 Casa 2, Vereda El Curval, Santa Marta, Magdalena, Colombia')
  },
  {
    name: 'Puerto Asís',
    address: 'Barrio El Prado, Puerto Asís, Putumayo, Colombia',
    imageUrl: 'https://picsum.photos/seed/puertoasis/600/400',
    mapsUrl: mapsUrlFor('Barrio El Prado, Puerto Asís, Putumayo, Colombia')
  },
  {
    name: 'Pereira',
    address: 'Carrera 6 #6-23N, Barrio Villavicencio (Antiguo Bavaria), Pereira, Risaralda, Colombia',
    imageUrl: 'https://picsum.photos/seed/pereira/600/400',
    mapsUrl: mapsUrlFor('Carrera 6 #6-23N, Barrio Villavicencio (Antiguo Bavaria), Pereira, Risaralda, Colombia')
  },
  {
    name: 'Riohacha',
    address: 'Carrera 14C Bis #36-25, Barrio Nuevo Milenio (Detrás del aeropuerto), Riohacha, La Guajira, Colombia',
    imageUrl: 'https://picsum.photos/seed/riohacha/600/400',
    mapsUrl: mapsUrlFor('Carrera 14C Bis #36-25, Barrio Nuevo Milenio (Detrás del aeropuerto), Riohacha, La Guajira, Colombia')
  },
  {
    name: 'Ciénaga',
    address: 'Calle 18, Kra 42, Barrio Los Girasoles, Ciénaga, Magdalena, Colombia',
    imageUrl: 'https://picsum.photos/seed/cienaga/600/400',
    mapsUrl: mapsUrlFor('Calle 18, Kra 42, Barrio Los Girasoles, Ciénaga, Magdalena, Colombia')
  },
  {
    name: 'Cali',
    address: 'Carrera 41B #38-19, Barrio Antonio Nariño, Cali, Valle del Cauca, Colombia',
    imageUrl: 'https://picsum.photos/seed/cali/600/400',
    mapsUrl: mapsUrlFor('Carrera 41B #38-19, Barrio Antonio Nariño, Cali, Valle del Cauca, Colombia')
  },
  {
    name: 'Pasto',
    address: 'Cra 17E #13-40, Corregimiento de Jamondino, Pasto, Nariño, Colombia',
    imageUrl: 'https://picsum.photos/seed/pasto/600/400',
    mapsUrl: mapsUrlFor('Cra 17E #13-40, Corregimiento de Jamondino, Pasto, Nariño, Colombia')
  },
  {
    name: 'Medellín',
    address: 'Cll 48D #99B-183 Int 110, Barrio Juan XXIII, Medellín, Antioquia, Colombia',
    imageUrl: 'https://picsum.photos/seed/medellin/600/400',
    mapsUrl: mapsUrlFor('Cll 48D #99B-183 Int 110, Barrio Juan XXIII, Medellín, Antioquia, Colombia')
  },
  {
    name: 'Cúcuta',
    address: 'Calle 13 #11-20, Carlos Pizarro, Cúcuta, Norte de Santander, Colombia (Sector puente rojo)',
    imageUrl: 'https://picsum.photos/seed/cucuta/600/400',
    mapsUrl: mapsUrlFor('Calle 13 #11-20, Carlos Pizarro, Cúcuta, Norte de Santander, Colombia (Sector puente rojo)')
  },
  {
    name: 'Ibagué',
    address: 'Calle 15 #11A-51, Ancón, Ibagué, Tolima, Colombia',
    imageUrl: 'https://picsum.photos/seed/ibague/600/400',
    mapsUrl: mapsUrlFor('Calle 15 #11A-51, Ancón, Ibagué, Tolima, Colombia')
  },
  {
    name: 'Anserma',
    address: 'Calle 7 #9-23, Barrio El Reposo, Anserma, Caldas, Colombia',
    imageUrl: 'https://picsum.photos/seed/anserma/600/400',
    mapsUrl: mapsUrlFor('Calle 7 #9-23, Barrio El Reposo, Anserma, Caldas, Colombia')
  },
  {
    name: 'Mendihuaca',
    address: 'Kilómetro 48, Vía La Poza Encantada, Mendihuaca, Magdalena, Colombia',
    imageUrl: 'https://picsum.photos/seed/mendihuaca/600/400',
    mapsUrl: mapsUrlFor('Kilómetro 48, Vía La Poza Encantada, Mendihuaca, Magdalena, Colombia')
  },
  {
    name: 'Villavicencio',
    address: 'Kr 33 #26A-22, Barrio San Marcos (Diagonal a Unicentro), Villavicencio, Meta, Colombia',
    imageUrl: 'https://picsum.photos/seed/villavicencio/600/400',
    mapsUrl: mapsUrlFor('Kr 33 #26A-22, Barrio San Marcos (Diagonal a Unicentro), Villavicencio, Meta, Colombia')
  },
  {
    name: 'Maicao',
    address: 'Carrera 28 #6-61, Barrio Vincula Palacio, Maicao, La Guajira, Colombia',
    imageUrl: 'https://picsum.photos/seed/maicao/600/400',
    mapsUrl: mapsUrlFor('Carrera 28 #6-61, Barrio Vincula Palacio, Maicao, La Guajira, Colombia')
  },
  {
    name: 'Manizales',
    address: 'Calle 50B N 39-09, Barrio Guamal, Manizales, Caldas, Colombia',
    imageUrl: 'https://picsum.photos/seed/manizales/600/400',
    mapsUrl: mapsUrlFor('Calle 50B N 39-09, Barrio Guamal, Manizales, Caldas, Colombia')
  },
  {
    name: 'Yopal',
    address: 'Calle 60A #03A-04, Barrio Llano Lindo, Yopal, Casanare, Colombia',
    imageUrl: 'https://picsum.photos/seed/yopal/600/400',
    mapsUrl: mapsUrlFor('Calle 60A #03A-04, Barrio Llano Lindo, Yopal, Casanare, Colombia')
  },
  {
    name: 'Sincelejo',
    address: 'Cr 18G #46-4, Barrio Uribe Uribe, Sincelejo, Sucre, Colombia',
    imageUrl: 'https://picsum.photos/seed/sincelejo/600/400',
    mapsUrl: mapsUrlFor('Cr 18G #46-4, Barrio Uribe Uribe, Sincelejo, Sucre, Colombia')
  },
  {
    name: 'Montería',
    address: 'Barrio Villa Los Alpes, Principal de la 22 (Diagonal a ferretería 1A), Montería, Córdoba, Colombia',
    imageUrl: 'https://picsum.photos/seed/monteria/600/400',
    mapsUrl: mapsUrlFor('Barrio Villa Los Alpes, Principal de la 22 (Diagonal a ferretería 1A), Montería, Córdoba, Colombia')
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