import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Gallery from '@/components/sections/gallery';
import { leerGaleria } from '@/lib/galeria-server';
import type {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Galería de Fotografías',
  description:
    'Fiestas y ceremonias, bautismos y oración, cultos y comunidad: momentos de la iglesia IDUNI en Bogotá.',
};

export default async function GaleriaPage() {
  const categorias = await leerGaleria();
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Gallery categorias={categorias} />
      </main>
      <Footer />
    </div>
  );
}
