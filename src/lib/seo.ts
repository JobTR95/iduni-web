import type { Metadata } from 'next';

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://iduni-web.vercel.app'
).replace(/\/+$/, '');

export const SITE_NAME = 'IDUNI';
export const SITE_LEGAL_NAME = 'Iglesia de la Doctrina Universal de Israel';
export const SITE_EMAIL = 'iduni.bogotacentral@hotmail.com';
export const SITE_ADDRESS = 'Cra 19c #53-68, Barrio San Carlos, Bogotá, Colombia';
export const SITE_DESCRIPTION =
  'Iglesia de la Doctrina Universal de Israel (IDUNI) en Bogotá. Comunidad de fe, esperanza y amor. Conoce nuestra historia, los Diez Mandamientos, estudios bíblicos, fiestas sagradas y santuarios.';

export const SITE_SOCIAL = [
  'https://www.instagram.com/idunioficial/',
  'https://m.facebook.com/IDUNI-Oficial-106958015090853/',
];

export const SITE_OG_IMAGE = {
  url: `${SITE_URL}/og.png`,
  width: 1200,
  height: 630,
  alt: 'IDUNI — Iglesia de la Doctrina Universal de Israel en Bogotá',
};

export type JsonLd = Record<string, unknown>;

export function urlAbsoluta(ruta = '/'): string {
  if (!ruta || ruta === '/') return SITE_URL;
  return `${SITE_URL}${ruta.startsWith('/') ? ruta : `/${ruta}`}`;
}

interface MetadataPagina {
  titulo: string;
  descripcion: string;
  ruta: string;
}

export function crearMetadata({ titulo, descripcion, ruta }: MetadataPagina): Metadata {
  const url = urlAbsoluta(ruta);
  const tituloCompleto = ruta === '/' ? titulo : `${titulo} | ${SITE_NAME}`;

  return {
    title: { absolute: tituloCompleto },
    description: descripcion,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      url,
      siteName: SITE_NAME,
      title: tituloCompleto,
      description: descripcion,
      locale: 'es_CO',
      images: [SITE_OG_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title: tituloCompleto,
      description: descripcion,
      images: [{ url: SITE_OG_IMAGE.url, alt: SITE_OG_IMAGE.alt }],
    },
  };
}

interface PaginaJsonLd {
  titulo: string;
  descripcion: string;
  ruta: string;
  tipo?: 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage';
  about?: JsonLd;
  mainEntity?: JsonLd;
  imagenes?: string[];
}

export function crearPaginaJsonLd({
  titulo,
  descripcion,
  ruta,
  tipo = 'WebPage',
  about,
  mainEntity,
  imagenes,
}: PaginaJsonLd): JsonLd {
  const url = urlAbsoluta(ruta);

  return {
    '@context': 'https://schema.org',
    '@type': tipo,
    '@id': `${url}#webpage`,
    url,
    name: ruta === '/' ? titulo : `${titulo} | ${SITE_NAME}`,
    description: descripcion,
    inLanguage: 'es-CO',
    isPartOf: { '@id': `${SITE_URL}#website` },
    about: about ?? { '@id': `${SITE_URL}#church` },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: SITE_OG_IMAGE.url,
      width: SITE_OG_IMAGE.width,
      height: SITE_OG_IMAGE.height,
    },
    ...(mainEntity ? { mainEntity } : {}),
    ...(imagenes && imagenes.length > 0 ? { image: imagenes } : {}),
  };
}

export const websiteSchema: JsonLd = {
  '@type': 'WebSite',
  '@id': `${SITE_URL}#website`,
  url: SITE_URL,
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  inLanguage: 'es-CO',
  publisher: { '@id': `${SITE_URL}#church` },
};

const telefono = process.env.NEXT_PUBLIC_TELEFONO;

export const churchSchema: JsonLd = {
  '@type': 'Church',
  '@id': `${SITE_URL}#church`,
  name: SITE_LEGAL_NAME,
  alternateName: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/icon.png`,
  image: SITE_OG_IMAGE.url,
  description: SITE_DESCRIPTION,
  foundingDate: '1989-02-13',
  founder: {
    '@type': 'Person',
    name: 'Ezequiel Ataucusi Gamonal',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Cra 19c #53-68, Barrio San Carlos',
    addressLocality: 'Bogotá',
    addressRegion: 'Bogotá D.C.',
    addressCountry: 'CO',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Colombia',
  },
  hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE_ADDRESS)}`,
  sameAs: SITE_SOCIAL,
  knowsAbout: [
    'Diez Mandamientos',
    'Doctrina Universal de Israel',
    'Estudios bíblicos',
    'Fiestas sagradas',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    email: SITE_EMAIL,
    contactType: 'customer service',
    availableLanguage: ['es'],
    ...(telefono ? { telephone: telefono } : {}),
  },
};
