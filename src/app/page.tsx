import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import JsonLd from '@/components/seo/json-ld';
import { crearMetadata, crearPaginaJsonLd } from '@/lib/seo';
import type { Metadata } from 'next';

const titulo = 'IDUNI | Iglesia de la Doctrina Universal de Israel en Bogotá';
const descripcion =
  'Iglesia de la Doctrina Universal de Israel (IDUNI) en Bogotá. Conoce nuestra fe, los Diez Mandamientos, estudios bíblicos, fiestas sagradas y galería.';

export const metadata: Metadata = crearMetadata({
  titulo,
  descripcion,
  ruta: '/',
});

const jsonLd = crearPaginaJsonLd({
  titulo,
  descripcion,
  ruta: '/',
});

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <JsonLd data={jsonLd} />
      <Header />
      <main className="flex-1">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
