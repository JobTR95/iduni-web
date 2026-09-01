import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import TenCommandments from '@/components/sections/ten-commandments';
import type {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Los Diez Mandamientos',
  description:
    'Los Diez Mandamientos de la Ley de Dios: la Ley Real que la Iglesia de la Doctrina Universal de Israel proclama.',
};

export default function MandamientosPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <TenCommandments />
      </main>
      <Footer />
    </div>
  );
}
