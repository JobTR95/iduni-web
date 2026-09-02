import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Instagram, Facebook, MapPin, Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import type {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Contacto',
  description:
    'Ponte en contacto con la Iglesia de la Doctrina Universal de Israel. Dirección, correo y redes sociales.',
};

export default function ContactoPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 py-16 md:py-24">
        <div className="container max-w-screen-lg mx-auto">
          <Card className="shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-headline text-primary">
                Ponte en Contacto
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-12 md:grid-cols-2">
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-center md:text-left font-headline">Información de Contacto</h3>
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-primary" />
                  <div>
                    <h4 className="font-semibold">Dirección</h4>
                    <p className="text-muted-foreground">Cra 19c #53-68, Barrio San Carlos, Bogotá, Colombia</p>
                  </div>
                </div>
                 <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-primary" />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-muted-foreground">info@iduni.org</p>
                  </div>
                </div>
                 <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-primary" />
                  <div>
                    <h4 className="font-semibold">Teléfono</h4>
                    <p className="text-muted-foreground">(+57) 312 123 4567</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-center md:text-left font-headline">Síguenos en Redes Sociales</h3>
                 <Link href="https://www.instagram.com/idunioficial/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 transition-colors rounded-lg hover:bg-secondary">
                  <Instagram className="w-8 h-8 text-primary" />
                  <div>
                    <h4 className="font-semibold">Instagram</h4>
                    <p className="text-sm text-muted-foreground">@idunioficial</p>
                  </div>
                </Link>
                 <Link href="https://m.facebook.com/IDUNI-Oficial-106958015090853/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 transition-colors rounded-lg hover:bg-secondary">
                  <Facebook className="w-8 h-8 text-primary" />
                  <div>
                    <h4 className="font-semibold">Facebook</h4>
                    <p className="text-sm text-muted-foreground">IDUNI Oficial</p>
                  </div>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
