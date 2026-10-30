import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import About from '@/components/sections/about';
import JsonLd from '@/components/seo/json-ld';
import { crearMetadata, crearPaginaJsonLd } from '@/lib/seo';
import type { Metadata } from 'next';

const titulo = 'Quiénes Somos';
const descripcion =
  'Conoce la historia, misión, visión y valores de IDUNI, iglesia de la Doctrina Universal de Israel fundada en Bogotá en 1989.';

export const metadata: Metadata = crearMetadata({
  titulo,
  descripcion,
  ruta: '/quienes-somos',
});

const jsonLd = crearPaginaJsonLd({
  titulo,
  descripcion,
  ruta: '/quienes-somos',
  tipo: 'AboutPage',
});

export default function QuienesSomosPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <JsonLd data={jsonLd} />
      <Header />
      <main className="flex-1">
        <About />
      </main>
      <Footer />
    </div>
  );
}
