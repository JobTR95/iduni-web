import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import type {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'IDUNI',
  description:
    'Un lugar para encontrar fe, comunidad y propósito a través de la palabra de Dios.',
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
