import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Gallery from '@/components/sections/gallery';
import { leerFotosGaleria } from '@/lib/galeria-server';
import type {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Galería de Fotografías',
  description:
    'Momentos especiales de nuestra comunidad: cultos, reuniones, festividades sagradas y actividades.',
};

export default async function GaleriaPage() {
  const fotosPorCategoria = await leerFotosGaleria();
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Gallery fotosPorCategoria={fotosPorCategoria} />
      </main>
      <Footer />
    </div>
  );
}
