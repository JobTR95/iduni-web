import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';

const laLeyContent = `
**Romanos 7:12**
De manera que la ley á la verdad es santa, y el mandamiento santo, y justo, y bueno.
`;

const laRestauracionContent = `
**Concepto:**
Restaurar es reconstruir, reedificar y levantar lo que estaba destruido materialmente y moralmente.
`;

const sabadoDeReposoContent = `
**Éxodo 16:29**
Mirad que Jehová os dió el sábado, y por eso os da en el sexto día pan para dos días.
`;

const elArrepentimientoContent = `
**¿Por qué la humanidad hasta ahora, no se arrepiente y cuál es la causa?**
En primer orden es necesario entender la causa.
`;

const creenciaContent = `
**Creencia y Fe**
Creemos en un solo Dios, Jehová de los ejércitos, creador de los cielos y de la tierra, y en su hijo Jesucristo, nuestro salvador, y en el Espíritu Santo que nos guía a toda verdad y justicia.
`;

const elJuicioDeDiosContent = `
**El Juicio de Dios**
Dios ha decretado para esta tercera generación un juicio, a causa de la multitud de nuestros pecados, los cuales ya han llegado al cielo y Dios se ha acordado de nuestras maldades.
`;

const BibleStudyContent = ({ content }: { content: string }) => {
  if (!content) return null;

  const lines = content.trim().split('\n');

  return (
    <div className="p-4 space-y-2 prose-sm max-w-none dark:prose-invert font-body text-foreground/90">
      {lines.map((line, index) => {
        if (line.startsWith('**') && line.endsWith('**')) {
          return (
            <p key={index}>
              <strong className="font-headline text-primary">{line.substring(2, line.length - 2)}</strong>
            </p>
          );
        }
        return <p key={index}>{line}</p>;
      })}
    </div>
  );
};


const bibleStudies = [
    {
      title: "LA LEY",
      content: laLeyContent,
    },
    {
      title: "LA RESTAURACIÓN DEL PUEBLO DE DIOS",
      content: laRestauracionContent,
    },
    {
      title: "SÁBADO DE REPOSO",
      content: sabadoDeReposoContent,
    },
    {
      title: "EL ARREPENTIMIENTO",
      content: elArrepentimientoContent,
    },
    {
      title: "CREENCIA",
      content: creenciaContent,
    },
    {
      title: "EL JUICIO DE DIOS",
      content: elJuicioDeDiosContent,
    },
  ];
  
  export default function BibleStudies() {
    return (
      <section id="bible-studies" className="py-16 md:py-24 bg-secondary">
        <div className="container max-w-screen-lg mx-auto px-4 md:px-0">
          <div className="mb-12 text-center">
            <BookOpen className="w-12 h-12 mx-auto text-primary" />
            <h2 className="mt-4 text-3xl font-bold md:text-4xl font-headline">
              Estudios Bíblicos
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-lg text-foreground/80 font-body">
              Profundiza en la palabra de Dios a través de estos estudios.
            </p>
          </div>
  
          <Card className="shadow-lg">
            <CardContent className="p-2 md:p-6">
              <Accordion type="single" collapsible className="w-full">
                {bibleStudies.map((study, index) => (
                  <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger className="font-headline">{study.title}</AccordionTrigger>
                    <AccordionContent>
                       <BibleStudyContent content={study.content} />
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }
