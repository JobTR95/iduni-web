import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Gallery from '@/components/sections/gallery';
import type {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Galería de Fotografías',
  description:
    'Momentos especiales de nuestra comunidad: cultos, reuniones, festividades sagradas y actividades.',
};

export default function GaleriaPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}
