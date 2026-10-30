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
            <nav
              aria-label="Enlaces del sitio"
              className="flex flex-wrap justify-center gap-x-4 gap-y-2 mt-5 text-sm text-muted-foreground md:justify-start"
            >
              <Link href="/quienes-somos" className="transition-colors hover:text-primary">
                Quiénes somos
              </Link>
              <Link href="/fundador" className="transition-colors hover:text-primary">
                Fundador
              </Link>
              <Link href="/fiestas" className="transition-colors hover:text-primary">
                Fiestas
              </Link>
              <Link href="/galeria" className="transition-colors hover:text-primary">
                Galería
              </Link>
              <Link href="/contacto" className="transition-colors hover:text-primary">
                Contacto
              </Link>
            </nav>
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
                <a href="mailto:iduni.bogotacentral@hotmail.com" className="break-all hover:text-primary">iduni.bogotacentral@hotmail.com</a>
              </div>
              <div className="flex items-center justify-center gap-3 md:justify-start">
                <Phone className="w-4 h-4 text-primary" />
                <span>+57 312 123 4567</span>
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
        <div className="flex flex-col items-center gap-2 pt-8 mt-12 text-sm text-center border-t text-muted-foreground sm:flex-row sm:justify-between sm:text-left">
          <p>&copy; {new Date().getFullYear()} IDUNI. Todos los derechos reservados.</p>
          <Link href="/politica-de-datos" className="transition-colors hover:text-primary">
            Política de Tratamiento de Datos
          </Link>
        </div>
      </div>
    </footer>
  );
}
