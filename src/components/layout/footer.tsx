import { Instagram, Facebook, MapPin, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="contact" className="bg-secondary text-secondary-foreground border-t">
      <div className="container py-12 mx-auto max-w-screen-lg">
        <div className="grid grid-cols-1 gap-12 text-center md:grid-cols-3 md:text-left">
          <div className="flex flex-col md:col-span-1">
            <h3 className="mb-4 text-2xl font-bold font-headline">IDUNI</h3>
            <p className="text-lg font-semibold text-primary">Iglesia De La Doctrina Universal de Israel</p>
            <p className="max-w-md mx-auto mt-2 text-sm text-muted-foreground md:mx-0">
              Una comunidad de fe, esperanza y amor. Te invitamos a ser parte de nuestra familia y a conocer la palabra de Dios.
            </p>
          </div>
          <div className="flex flex-col">
            <h3 className="mb-4 text-lg font-bold font-headline">Contacto</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center justify-center gap-3 md:justify-start">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Cra 19c #53-68, Barrio San Carlos</span>
              </div>
              <div className="flex items-center justify-center gap-3 md:justify-start">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:info@iduni.org" className="hover:text-primary">info@iduni.org</a>
              </div>
              <div className="flex items-center justify-center gap-3 md:justify-start">
                <Phone className="w-4 h-4 text-primary" />
                <span>(+57) 312 123 4567</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="mb-4 text-lg font-bold font-headline">Síguenos</h3>
            <div className="flex justify-center space-x-4 md:justify-start">
              <Link href="https://www.instagram.com/idunioficial/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="w-6 h-6 transition-colors text-muted-foreground hover:text-primary" />
              </Link>
              <Link href="https://m.facebook.com/IDUNI-Oficial-106958015090853/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="w-6 h-6 transition-colors text-muted-foreground hover:text-primary" />
              </Link>
            </div>
          </div>
        </div>
        <div className="pt-8 mt-12 text-sm text-center border-t text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} IDUNI. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
