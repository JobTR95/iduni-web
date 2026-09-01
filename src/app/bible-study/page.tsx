import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import BibleStudies from '@/components/sections/bible-studies';
import type {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Estudios Bíblicos',
  description:
    'Profundiza en la palabra de Dios a través de nuestros estudios bíblicos.',
};

export default function BibleStudyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <BibleStudies />
      </main>
      <Footer />
    </div>
  );
}
