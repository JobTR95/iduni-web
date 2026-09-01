import { BookOpen, Users, Target, Eye, Gem } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-secondary">
      <div className="container max-w-screen-lg mx-auto px-4">
        <div className="flex flex-col items-center gap-12">
          <div className="relative w-full mx-auto overflow-hidden rounded-lg shadow-xl h-96 md:h-[600px]">
            <iframe
              className="absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2 rounded-lg"
              src="https://www.youtube.com/embed/IZToAt3kLkw?loop=1&playlist=IZToAt3kLkw&controls=1&showinfo=0&autohide=1&modestbranding=1&rel=0"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ minWidth: '100%', minHeight: '100%' }}
            ></iframe>
          </div>
          <div className="w-full">
            <div className="flex items-center gap-3 mb-4 text-primary">
              <Users className="w-8 h-8" />
              <h2 className="text-3xl font-headline">¿Quiénes Somos?</h2>
            </div>
            <p className="mb-6 text-lg leading-relaxed text-foreground/80 font-body">
              Somos la iglesia de la doctrina universal de Israel IDUNI. Nuestra responsabilidad como conocedores del evangelio de Nuestro Señor Jesucristo es anunciar y difundir los Diez Mandamientos de la Ley de Dios, para entrar a la moralización y poder alcanzar las promesas de Dios y a su vez que la humanidad llegue a un estado de unidad, armonía, equidad y paz.
            </p>
            <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <h3 className="flex items-center text-xl font-headline text-primary/90">
                    <BookOpen className="w-5 h-5 mr-3" />
                    Nuestra Historia
                  </h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pt-4 space-y-4 text-base leading-relaxed font-body text-foreground/70">
                    <p>
                      El 13 de febrero de 1989 se fundó la iglesia en Bogotá D.C Colombia con la resolución de la personería jurídica 0700 siendo el presidente el hermano German Bonilla, estando presente los hermanos misioneros internacionales Antonio Calizaya, Heraldo Calizaya, Editzon Calizaya y Elvio Gonzales.
                    </p>
                    <p>
                      En el año de 1989 se presentan ante nuestro excelentísimo maestro Ezequiel Ataucusi Gamonal. El hermano misionero internacional Fred Calizaya y el hermano presidente German Bonilla para entregarle el documento del reconocimiento de la personería jurídica de la iglesia en Colombia.
                    </p>
                    <p>
                      En el año de 2004 el estado colombiano resuelve que todas las personerías jurídicas dadas por las alcaldías pasarían al ministerio del interior y de justicia; para ello cada asociación e iglesia debían presentar nuevamente su documentación. Por esta razón el hermano presidente administrativo Wilmar Perez Serna se presenta a nombre de hermandad de Colombia ante nuestro maestro Ezequiel Ataucusi Gamonal para pedir su permiso y autorización para poder cambiar el nombre de la institución puesto que las normas del estado colombiano así las requerían.
                    </p>
                    <p>
                      Habiendo recibido la autorización del maestro Ezequiel Ataucusi Gamonal para el cambio del nombre de la institución se procedió a realizar todas las gestiones pertinentes para obtener la personería jurídica especial emitida por el ministerio del interior.
                    </p>
                     <p>
                      Quedando bajo el nombre de Iglesia De La Doctrina Universal De Israel (IDUNI). Y con la resolución Número 0291 otorgada por el ministerio del interior y de justicia de la República de Colombia.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
               <AccordionItem value="item-2">
                <AccordionTrigger>
                  <h3 className="flex items-center text-xl font-headline text-primary/90">
                    <Target className="w-5 h-5 mr-3" />
                    Misión
                  </h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pt-4 space-y-4 text-base leading-relaxed font-body text-foreground/70">
                    <p>
                      Predicar la Palabra de Dios en su totalidad, restaurar la observancia de la Ley divina y formar una comunidad de fe centrada en los principios de justicia, amor y obediencia a Dios.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  <h3 className="flex items-center text-xl font-headline text-primary/90">
                    <Eye className="w-5 h-5 mr-3" />
                    Visión
                  </h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pt-4 space-y-4 text-base leading-relaxed font-body text-foreground/70">
                    <p>
                      Ser una iglesia testigo de la doctrina universal de Israel, influyendo positivamente en la sociedad y demostrando los beneficios espirituales de vivir conforme a la voluntad divina, restaurando la Ley de Dios en el corazón de la humanidad.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  <h3 className="flex items-center text-xl font-headline text-primary/90">
                    <Gem className="w-5 h-5 mr-3" />
                    Valores
                  </h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pt-4 space-y-4 text-base leading-relaxed font-body text-foreground/70">
                    <ul className="list-disc list-inside space-y-2">
                        <li>Amor y Fraternidad</li>
                        <li>Justicia y Equidad</li>
                        <li>Obediencia a los mandamientos de Dios</li>
                        <li>Servicio y Humildad</li>
                        <li>Paz y Armonía</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
