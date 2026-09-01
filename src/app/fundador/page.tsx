import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Founder from '@/components/sections/founder';
import type {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Nuestro Fundador',
  description:
    'La vida y obra del Maestro Ezequiel Ataucusi Gamonal, fundador de la Iglesia de la Doctrina Universal de Israel.',
};

export default function FundadorPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Founder />
      </main>
      <Footer />
    </div>
  );
}
