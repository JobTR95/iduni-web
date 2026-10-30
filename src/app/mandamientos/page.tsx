import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import TenCommandments from '@/components/sections/ten-commandments';
import JsonLd from '@/components/seo/json-ld';
import { crearMetadata, crearPaginaJsonLd } from '@/lib/seo';
import type { Metadata } from 'next';

const titulo = 'Los Diez Mandamientos';
const descripcion =
  'Los Diez Mandamientos de la Ley de Dios: la Ley Real que proclama la Iglesia de la Doctrina Universal de Israel (IDUNI).';

export const metadata: Metadata = crearMetadata({
  titulo,
  descripcion,
  ruta: '/mandamientos',
});

const jsonLd = crearPaginaJsonLd({
  titulo,
  descripcion,
  ruta: '/mandamientos',
  about: {
    '@type': 'Thing',
    name: 'Los Diez Mandamientos',
    description: 'La Ley Real que la Iglesia de la Doctrina Universal de Israel proclama.',
  },
});

export default function MandamientosPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <JsonLd data={jsonLd} />
      <Header />
      <main className="flex-1">
        <TenCommandments />
      </main>
      <Footer />
    </div>
  );
}
