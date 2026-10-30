import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import BibleStudies from '@/components/sections/bible-studies';
import JsonLd from '@/components/seo/json-ld';
import { crearMetadata, crearPaginaJsonLd } from '@/lib/seo';
import type { Metadata } from 'next';

const titulo = 'Estudios Bíblicos';
const descripcion =
  'Profundiza en la palabra de Dios con los estudios bíblicos de IDUNI: doctrina, profecías, creencias y el juicio de Dios.';

export const metadata: Metadata = crearMetadata({
  titulo,
  descripcion,
  ruta: '/bible-study',
});

const jsonLd = crearPaginaJsonLd({
  titulo,
  descripcion,
  ruta: '/bible-study',
  about: {
    '@type': 'Thing',
    name: 'Estudios bíblicos',
    description: 'Enseñanzas y estudios de la palabra de Dios en IDUNI.',
  },
});

export default function BibleStudyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <JsonLd data={jsonLd} />
      <Header />
      <main className="flex-1">
        <BibleStudies />
      </main>
      <Footer />
    </div>
  );
}
