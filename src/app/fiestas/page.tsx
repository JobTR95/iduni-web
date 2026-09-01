import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HolyDays from '@/components/sections/holy-days';
import type {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Fiestas, Lunas Nuevas y Días Consagrados',
  description:
    'Celebra con nosotros los tiempos señalados por Dios: fiestas solemnes, lunas nuevas y días consagrados.',
};

export default function FiestasPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <HolyDays />
      </main>
      <Footer />
    </div>
  );
}
