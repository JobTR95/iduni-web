import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Founder from '@/components/sections/founder';
import JsonLd from '@/components/seo/json-ld';
import { crearMetadata, crearPaginaJsonLd, urlAbsoluta } from '@/lib/seo';
import type { Metadata } from 'next';

const titulo = 'Nuestro Fundador: Ezequiel Ataucusi Gamonal';
const descripcion =
  'La vida y obra del Maestro Ezequiel Ataucusi Gamonal, fundador de la Iglesia de la Doctrina Universal de Israel (IDUNI).';

export const metadata: Metadata = crearMetadata({
  titulo,
  descripcion,
  ruta: '/fundador',
});

const persona = {
  '@type': 'Person',
  '@id': `${urlAbsoluta('/fundador')}#ezequiel-ataucusi-gamonal`,
  name: 'Ezequiel Ataucusi Gamonal',
  birthDate: '1918-04-10',
  deathDate: '2000-06-21',
  birthPlace: {
    '@type': 'Place',
    name: 'Huarhua, Pampamarca, La Unión, Arequipa, Perú',
  },
  jobTitle: 'Fundador de la Iglesia de la Doctrina Universal de Israel',
  description:
    'Maestro y fundador de IDUNI. Nació en Perú en 1918 y falleció en el año 2000 dejando un legado de fe y enseñanza.',
};

const jsonLd = crearPaginaJsonLd({
  titulo,
  descripcion,
  ruta: '/fundador',
  tipo: 'AboutPage',
  about: persona,
  mainEntity: persona,
});

export default function FundadorPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <JsonLd data={jsonLd} />
      <Header />
      <main className="flex-1">
        <Founder />
      </main>
      <Footer />
    </div>
  );
}
