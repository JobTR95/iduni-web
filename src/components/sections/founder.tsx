'use client';

import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function Founder() {
  return (
    <section id="founder" className="pt-4 pb-20 md:pt-8 md:pb-32 bg-background">
      <div className="container max-w-screen-lg mx-auto px-4">
        <div className="flex flex-col items-center gap-6 md:gap-8">
          <div className="relative w-full max-w-md mx-auto overflow-hidden rounded-lg shadow-xl aspect-square bg-muted">
            <Image
              src="/images/fundador.jpeg"
              alt="Maestro Ezequiel Ataucusi Gamonal"
              fill
              sizes="(max-width: 768px) 100vw, 448px"
              className="object-cover"
            />
          </div>
          <div className="w-full space-y-4 text-foreground/80">
            <Card className="border-none shadow-none bg-transparent">
              <CardHeader className="p-0 text-center md:text-left">
                <CardTitle className="text-3xl font-headline text-primary">
                  Nuestro Fundador
                </CardTitle>
                <h3 className="pt-2 text-2xl font-bold font-headline text-foreground">
                  Maestro Ezequiel Ataucusi Gamonal
                </h3>
              </CardHeader>
            </Card>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="origen">
                <AccordionTrigger className="text-lg font-headline">Origen</AccordionTrigger>
                <AccordionContent className="pt-2 font-body">
                  Nacido en el pueblo de Huarhua, del distrito de Pampamarca,
                  provincia de La Unión, departamento de Arequipa (Perú), el día
                  10 de abril de 1918.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="obra">
                <AccordionTrigger className="text-lg font-headline">Su Obra</AccordionTrigger>
                <AccordionContent className="pt-2 space-y-4 font-body">
                  <p>
                    En el año de 1956 el maestro Ezequiel inicia su obra
                    evangélica; la promulgación del santo evangelio que son los
                    diez mandamientos de la ley de Dios. En este proceso como
                    evangelista luchó por aliviar las necesidades de las gentes
                    más necesitada y desfavorecida, teniendo como fundamento la
                    formación de más de 42 Asentamientos humanos en la selva
                    amazónica del Perú.
                  </p>
                  <p>
                    En esta labor del bien social ordenada por el señor Jehová
                    Dios de Israel, el maestro Ezequiel pudo ayudar a mucha
                    gente necesitada en las ciudades, desarrollando una magnífica obra con el apoyo de Dios.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="partido">
                <AccordionTrigger className="text-lg font-headline">Partido Político FREPAP</AccordionTrigger>
                <AccordionContent className="pt-2 font-body">
                  En el año de 1989 forma el partido político “FRENTE POPULAR
                  AGRÍCOLA DEL PERÚ” (FREPAP) teniendo como principios
                  fundamentales las leyes de Dios para establecer una justicia social.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="partida">
                <AccordionTrigger className="text-lg font-headline">Su Partida</AccordionTrigger>
                <AccordionContent className="pt-2 space-y-4 font-body">
                  <p>
                    El 21 de junio del año 2000 falleció nuestro Excelentísimo
                    Maestro Ezequiel Ataucusi Gamonal dejando un legado y una
                    enseñanza imperecederas.
                  </p>
                  <p className="italic text-primary font-semibold">
                    El Maestro EZEQUIEL ATAUCUSI GAMONAL, vivirá siempre en el
                    corazón de todos los que sirven y servirán a Jehová Dios de
                    Israel.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
