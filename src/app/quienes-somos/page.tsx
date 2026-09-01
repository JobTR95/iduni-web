import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import About from '@/components/sections/about';
import type {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Quiénes Somos',
  description:
    'Conoce la historia, misión, visión y valores de la Iglesia de la Doctrina Universal de Israel (IDUNI).',
};

export default function QuienesSomosPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <About />
      </main>
      <Footer />
    </div>
  );
}
