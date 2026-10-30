export interface Sede {
  name: string;
  address?: string;
  ciudad?: string;
  departamento?: string;
  mapsUrl?: string;
}

const mapsUrlFor = (address: string): string =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

export const sedesPrincipales: Sede[] = [
  {
    name: 'Sede Principal Bogotá',
    address: 'Cra 19c #53-68, Barrio San Carlos, Bogotá, Colombia',
    ciudad: 'Bogotá',
    departamento: 'Bogotá D.C.',
    mapsUrl: mapsUrlFor('Cra 19c #53-68, Barrio San Carlos, Bogotá, Colombia'),
  },
];

export const iglesias: Sede[] = [
  {
    name: 'Soacha',
    address: 'Calle 9 #48K-61, Barrio Danubio, Soacha, Colombia',
    ciudad: 'Soacha',
    departamento: 'Cundinamarca',
    mapsUrl: mapsUrlFor('Calle 9 #48K-61, Barrio Danubio, Soacha, Colombia'),
  },
  {
    name: 'Paipa-Boyacá',
    address: 'Calle 21 #27-11, Barrio Sausalito, Paipa, Boyacá, Colombia',
    ciudad: 'Paipa',
    departamento: 'Boyacá',
    mapsUrl: mapsUrlFor('Calle 21 #27-11, Barrio Sausalito, Paipa, Boyacá, Colombia'),
  },
  {
    name: 'Santa Marta',
    address: 'Mz 4 Casa 2, Vereda El Curval, Santa Marta, Magdalena, Colombia',
    ciudad: 'Santa Marta',
    departamento: 'Magdalena',
    mapsUrl: mapsUrlFor('Mz 4 Casa 2, Vereda El Curval, Santa Marta, Magdalena, Colombia'),
  },
  {
    name: 'Puerto Asís',
    address: 'Barrio El Prado, Puerto Asís, Putumayo, Colombia',
    ciudad: 'Puerto Asís',
    departamento: 'Putumayo',
    mapsUrl: mapsUrlFor('Barrio El Prado, Puerto Asís, Putumayo, Colombia'),
  },
  {
    name: 'Pereira',
    address:
      'Carrera 6 #6-23N, Barrio Villavicencio (Antiguo Bavaria), Pereira, Risaralda, Colombia',
    ciudad: 'Pereira',
    departamento: 'Risaralda',
    mapsUrl: mapsUrlFor(
      'Carrera 6 #6-23N, Barrio Villavicencio (Antiguo Bavaria), Pereira, Risaralda, Colombia'
    ),
  },
  {
    name: 'Riohacha',
    address:
      'Carrera 14C Bis #36-25, Barrio Nuevo Milenio (Detrás del aeropuerto), Riohacha, La Guajira, Colombia',
    ciudad: 'Riohacha',
    departamento: 'La Guajira',
    mapsUrl: mapsUrlFor(
      'Carrera 14C Bis #36-25, Barrio Nuevo Milenio (Detrás del aeropuerto), Riohacha, La Guajira, Colombia'
    ),
  },
  {
    name: 'Ciénaga',
    address: 'Calle 18, Kra 42, Barrio Los Girasoles, Ciénaga, Magdalena, Colombia',
    ciudad: 'Ciénaga',
    departamento: 'Magdalena',
    mapsUrl: mapsUrlFor('Calle 18, Kra 42, Barrio Los Girasoles, Ciénaga, Magdalena, Colombia'),
  },
  {
    name: 'Cali',
    address: 'Carrera 41B #38-19, Barrio Antonio Nariño, Cali, Valle del Cauca, Colombia',
    ciudad: 'Cali',
    departamento: 'Valle del Cauca',
    mapsUrl: mapsUrlFor(
      'Carrera 41B #38-19, Barrio Antonio Nariño, Cali, Valle del Cauca, Colombia'
    ),
  },
  {
    name: 'Pasto',
    address: 'Cra 17E #13-40, Corregimiento de Jamondino, Pasto, Nariño, Colombia',
    ciudad: 'Pasto',
    departamento: 'Nariño',
    mapsUrl: mapsUrlFor(
      'Cra 17E #13-40, Corregimiento de Jamondino, Pasto, Nariño, Colombia'
    ),
  },
  {
    name: 'Medellín',
    address: 'Cll 48D #99B-183 Int 110, Barrio Juan XXIII, Medellín, Antioquia, Colombia',
    ciudad: 'Medellín',
    departamento: 'Antioquia',
    mapsUrl: mapsUrlFor(
      'Cll 48D #99B-183 Int 110, Barrio Juan XXIII, Medellín, Antioquia, Colombia'
    ),
  },
  {
    name: 'Cúcuta',
    address:
      'Calle 13 #11-20, Carlos Pizarro, Cúcuta, Norte de Santander, Colombia (Sector puente rojo)',
    ciudad: 'Cúcuta',
    departamento: 'Norte de Santander',
    mapsUrl: mapsUrlFor(
      'Calle 13 #11-20, Carlos Pizarro, Cúcuta, Norte de Santander, Colombia (Sector puente rojo)'
    ),
  },
  {
    name: 'Ibagué',
    address: 'Calle 15 #11A-51, Ancón, Ibagué, Tolima, Colombia',
    ciudad: 'Ibagué',
    departamento: 'Tolima',
    mapsUrl: mapsUrlFor('Calle 15 #11A-51, Ancón, Ibagué, Tolima, Colombia'),
  },
  {
    name: 'Anserma',
    address: 'Calle 7 #9-23, Barrio El Reposo, Anserma, Caldas, Colombia',
    ciudad: 'Anserma',
    departamento: 'Caldas',
    mapsUrl: mapsUrlFor('Calle 7 #9-23, Barrio El Reposo, Anserma, Caldas, Colombia'),
  },
  {
    name: 'Mendihuaca',
    address: 'Kilómetro 48, Vía La Poza Encantada, Mendihuaca, Magdalena, Colombia',
    ciudad: 'Mendihuaca',
    departamento: 'Magdalena',
    mapsUrl: mapsUrlFor(
      'Kilómetro 48, Vía La Poza Encantada, Mendihuaca, Magdalena, Colombia'
    ),
  },
  {
    name: 'Villavicencio',
    address:
      'Kr 33 #26A-22, Barrio San Marcos (Diagonal a Unicentro), Villavicencio, Meta, Colombia',
    ciudad: 'Villavicencio',
    departamento: 'Meta',
    mapsUrl: mapsUrlFor(
      'Kr 33 #26A-22, Barrio San Marcos (Diagonal a Unicentro), Villavicencio, Meta, Colombia'
    ),
  },
  {
    name: 'Maicao',
    address: 'Carrera 28 #6-61, Barrio Vincula Palacio, Maicao, La Guajira, Colombia',
    ciudad: 'Maicao',
    departamento: 'La Guajira',
    mapsUrl: mapsUrlFor('Carrera 28 #6-61, Barrio Vincula Palacio, Maicao, La Guajira, Colombia'),
  },
  {
    name: 'Manizales',
    address: 'Calle 50B N 39-09, Barrio Guamal, Manizales, Caldas, Colombia',
    ciudad: 'Manizales',
    departamento: 'Caldas',
    mapsUrl: mapsUrlFor('Calle 50B N 39-09, Barrio Guamal, Manizales, Caldas, Colombia'),
  },
  {
    name: 'Yopal',
    address: 'Calle 60A #03A-04, Barrio Llano Lindo, Yopal, Casanare, Colombia',
    ciudad: 'Yopal',
    departamento: 'Casanare',
    mapsUrl: mapsUrlFor('Calle 60A #03A-04, Barrio Llano Lindo, Yopal, Casanare, Colombia'),
  },
  {
    name: 'Sincelejo',
    address: 'Cr 18G #46-4, Barrio Uribe Uribe, Sincelejo, Sucre, Colombia',
    ciudad: 'Sincelejo',
    departamento: 'Sucre',
    mapsUrl: mapsUrlFor('Cr 18G #46-4, Barrio Uribe Uribe, Sincelejo, Sucre, Colombia'),
  },
  {
    name: 'Montería',
    address:
      'Barrio Villa Los Alpes, Principal de la 22 (Diagonal a ferretería 1A), Montería, Córdoba, Colombia',
    ciudad: 'Montería',
    departamento: 'Córdoba',
    mapsUrl: mapsUrlFor(
      'Barrio Villa Los Alpes, Principal de la 22 (Diagonal a ferretería 1A), Montería, Córdoba, Colombia'
    ),
  },
  {
    name: 'Florencia',
    ciudad: 'Florencia',
    departamento: 'Caquetá',
  },
  {
    name: 'La Argentina (Huila)',
    ciudad: 'La Argentina',
    departamento: 'Huila',
  },
  {
    name: 'Amazonas',
  },
  {
    name: 'Santa Rosa de Cabal',
    ciudad: 'Santa Rosa de Cabal',
    departamento: 'Risaralda',
  },
];

export const todasLasSedes: Sede[] = [...sedesPrincipales, ...iglesias];
