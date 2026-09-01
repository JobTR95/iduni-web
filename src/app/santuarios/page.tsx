import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Sanctuaries from '@/components/sections/sanctuaries';
import type {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Santuarios e Iglesias',
  description:
    'Encuentra una comunidad cerca de ti. Santuarios e iglesias de IDUNI por todo el país.',
};

export default function SantuariosPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Sanctuaries />
      </main>
      <Footer />
    </div>
  );
}
