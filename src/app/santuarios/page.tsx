import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Sanctuaries from '@/components/sections/sanctuaries';
import JsonLd from '@/components/seo/json-ld';
import { crearMetadata, crearPaginaJsonLd } from '@/lib/seo';
import { todasLasSedes } from '@/lib/santuarios';
import type { Metadata } from 'next';

const titulo = 'Santuarios e Iglesias en Colombia';
const descripcion =
  'Encuentra una iglesia IDUNI cerca de ti. Direcciones de nuestros santuarios y iglesias en Bogotá, Soacha, Cali, Medellín y más ciudades.';

export const metadata: Metadata = crearMetadata({
  titulo,
  descripcion,
  ruta: '/santuarios',
});

const jsonLd = crearPaginaJsonLd({
  titulo,
  descripcion,
  ruta: '/santuarios',
  tipo: 'CollectionPage',
  about: {
    '@type': 'Thing',
    name: 'Santuarios e iglesias de IDUNI',
  },
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: todasLasSedes.length,
    itemListElement: todasLasSedes.map((sede, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Church',
        name: `IDUNI ${sede.name}`,
        ...(sede.address
          ? {
              address: {
                '@type': 'PostalAddress',
                streetAddress: sede.address,
                ...(sede.ciudad ? { addressLocality: sede.ciudad } : {}),
                ...(sede.departamento ? { addressRegion: sede.departamento } : {}),
                addressCountry: 'CO',
              },
            }
          : {}),
        ...(sede.mapsUrl ? { hasMap: sede.mapsUrl } : {}),
      },
    })),
  },
});

export default function SantuariosPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <JsonLd data={jsonLd} />
      <Header />
      <main className="flex-1">
        <Sanctuaries />
      </main>
      <Footer />
    </div>
  );
}
