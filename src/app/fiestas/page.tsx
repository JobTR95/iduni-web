import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HolyDays from '@/components/sections/holy-days';
import JsonLd from '@/components/seo/json-ld';
import { crearMetadata, crearPaginaJsonLd } from '@/lib/seo';
import type { Metadata } from 'next';

const titulo = 'Fiestas, Lunas Nuevas y Días Consagrados';
const descripcion =
  'Calendario de fiestas solemnes, lunas nuevas y días consagrados de IDUNI: Pascua, Pentecostés, Cabañas y otras fechas bíblicas.';

export const metadata: Metadata = crearMetadata({
  titulo,
  descripcion,
  ruta: '/fiestas',
});

const jsonLd = crearPaginaJsonLd({
  titulo,
  descripcion,
  ruta: '/fiestas',
  about: {
    '@type': 'Thing',
    name: 'Fiestas sagradas y días consagrados',
    description: 'Tiempos señalados por Dios según la tradición de IDUNI.',
  },
});

export default function FiestasPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <JsonLd data={jsonLd} />
      <Header />
      <main className="flex-1">
        <HolyDays />
      </main>
      <Footer />
    </div>
  );
}
