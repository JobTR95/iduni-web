import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { ArrowLeft, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Uso de Imagen y Tratamiento de Datos',
  description:
    'Política de uso de imagen y tratamiento de datos personales de la Iglesia de la Doctrina Universal de Israel (IDUNI), conforme a la Ley 1581 de 2012 y el Decreto 1377 de 2013.',
};

const contacto = {
  correo: 'iduni.bogotacentral@hotmail.com',
  celular: '+57 312 123 4567',
  direccion: 'Cra 19c #53-68, Barrio San Carlos, Bogotá D.C.',
};

export default function PoliticaDeDatosPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 py-16 md:py-24">
        <div className="container max-w-3xl mx-auto px-4">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Habeas Data</p>
            <h1 className="mt-3 text-3xl font-bold md:text-4xl font-headline text-primary">
              Política de Uso de Imagen y Tratamiento de Datos Personales
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Iglesia de la Doctrina Universal de Israel — IDUNI
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Última actualización: 29 de octubre de 2026
            </p>
          </div>

          <div className="space-y-10 leading-relaxed">
            <section className="rounded-lg border border-primary/20 bg-secondary/30 p-6">
              <p className="text-foreground/90">
                En la <strong>Iglesia de la Doctrina Universal de Israel — IDUNI</strong>, con NIT{' '}
                <strong>900372216-4</strong> y oficina principal en{' '}
                <strong>{contacto.direccion}</strong>, nos comprometemos a proteger su privacidad y sus
                datos personales, en cumplimiento de la Ley 1581 de 2012 y el Decreto 1377 de 2013.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold font-headline text-primary">
                1. ¿Qué información recolectamos?
              </h2>
              <p className="mt-3 text-muted-foreground">
                Durante nuestros cultos, servicios, eventos y/o actividades, realizamos capturas
                fotográficas y de video donde puede aparecer su imagen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold font-headline text-primary">
                2. ¿Para qué la usamos?
              </h2>
              <p className="mt-3 text-muted-foreground">
                El uso es exclusivamente institucional, sin fines comerciales, para:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6 text-muted-foreground">
                <li>Transmisión de cultos y evangelización.</li>
                <li>Comunicación de nuestras actividades.</li>
                <li>
                  Publicación en nuestra página web y redes sociales oficiales (Facebook, Instagram,
                  YouTube).
                </li>
                <li>Archivo histórico de la iglesia.</li>
              </ul>
              <p className="mt-5 rounded-md border border-primary/30 bg-primary/5 p-4 text-sm font-bold uppercase tracking-wide text-primary">
                No vendemos, cedemos ni comercializamos ninguna de las imágenes a terceros.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold font-headline text-primary">3. Autorización</h2>
              <p className="mt-3 text-muted-foreground">
                Al participar de nuestras actividades públicas, usted otorga su autorización previa,
                expresa e informada para el tratamiento de su imagen con las finalidades descritas. Si no
                desea que su imagen sea utilizada, puede manifestarlo antes, durante o después del evento a
                los canales indicados en el numeral 4; en ese caso no publicaremos su imagen y, si ya fue
                publicada, la retiraremos o anonimizaremos.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold font-headline text-primary">
                4. ¿Cómo ejercer sus derechos?
              </h2>
              <p className="mt-3 text-muted-foreground">
                Usted tiene derecho, en todo momento y de forma gratuita, a conocer, actualizar,
                rectificar, solicitar la supresión o la anonimización (difuminado de rostro) de su imagen,
                así como a revocar la autorización otorgada.
              </p>
              <p className="mt-3 text-muted-foreground">
                Si aparece en alguna publicación y desea que sea retirada, contáctenos:
              </p>
              <div className="mt-4 space-y-4 rounded-lg border bg-card p-5">
                <a
                  href={`mailto:${contacto.correo}?subject=Solicitud%20de%20retiro%20de%20imagen`}
                  className="flex items-center gap-3 text-sm text-foreground transition-colors hover:text-primary"
                >
                  <Mail className="w-5 h-5 shrink-0 text-primary" aria-hidden="true" />
                  <span>{contacto.correo}</span>
                </a>
                <a
                  href="tel:+573121234567"
                  className="flex items-center gap-3 text-sm text-foreground transition-colors hover:text-primary"
                >
                  <Phone className="w-5 h-5 shrink-0 text-primary" aria-hidden="true" />
                  <span>{contacto.celular}</span>
                </a>
                <div className="flex items-center gap-3 text-sm text-foreground">
                  <MapPin className="w-5 h-5 shrink-0 text-primary" aria-hidden="true" />
                  <span>{contacto.direccion}</span>
                </div>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                Atenderemos su solicitud en un plazo máximo de 72 horas hábiles.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold font-headline text-primary">
                5. Protección de menores de edad
              </h2>
              <p className="mt-3 text-muted-foreground">
                Las imágenes donde aparezcan niños, niñas y adolescentes solo serán publicadas con la
                autorización expresa y verificable de sus padres o acudientes, de acuerdo con el interés
                superior del menor.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold font-headline text-primary">
                6. Vigencia y modificaciones
              </h2>
              <p className="mt-3 text-muted-foreground">
                Esta política rige desde su publicación y podrá ser actualizada. Cualquier cambio será
                publicado en esta misma página. Si tiene dudas sobre el tratamiento de sus datos, puede
                escribirnos a los canales indicados.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold font-headline text-primary">
                7. Autoridad de control
              </h2>
              <p className="mt-3 text-muted-foreground">
                Si considera que sus derechos no han sido atendidos, puede acudir a la Superintendencia de
                Industria y Comercio (SIC), entidad que vigila el cumplimiento de la Ley 1581 de 2012.
              </p>
            </section>

            <div className="pt-2 text-center">
              <Link
                href="/galeria"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                Volver a la galería
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
