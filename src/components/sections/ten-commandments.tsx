'use client';

import React from 'react';
import { Card } from '@/components/ui/card';
import { ScrollText } from 'lucide-react';
import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const commandments = [
    {
        title: "Primer mandamiento",
        content: "A JEHOVÁ TU DIOS TEMERÁS, A ÉL SERVIRÁS, A ÉL TE ALLEGARAS, Y POR SU NOMBRE JURARÁS. LA JUSTICIA, LA JUSTICIA SEGUIRÁS, PORQUE VIVAS Y HEREDES LA TIERRA QUE JEHOVÁ TU DIOS TE DA. SANTOS SERÉIS PORQUE SANTO SOY YO JEHOVÁ VUESTRO DIOS. AMARÁS PUES AL SEÑOR TU DIOS DE TODO TU CORAZÓN, Y DE TODA TU ALMA, Y DE TODA TU MENTE, Y DE TODAS TUS FUERZAS; ESTE ES EL PRIMERO Y EL GRANDE MANDAMIENTO."
    },
    {
        title: "Segundo Mandamiento",
        content: "Y EL SEGUNDO ES SEMEJANTE A ÉL: AMARÁS A TU PRÓJIMO COMO A TI MISMO. NO HAY OTRO MANDAMIENTO MAYOR QUE ESTOS. UN MANDAMIENTO NUEVO OS DOY: QUE OS AMÉIS UNOS A OTROS: COMO OS HE AMADO, EN ESTO CONOCERÁN TODOS QUE SOIS MIS DISCÍPULOS, SI TUVIEREIS AMOR LOS UNOS CON LOS OTROS. NO ABORRECERÁS A TU HERMANO EN TU CORAZÓN: INGENUAMENTE REPRENDERÁS A TU PRÓJIMO, Y NO CONSENTIRÁS SOBRE EL PECADO. NO TE VENGARAS, NI GUARDARÁS RENCOR A LOS HIJOS DE TU PUEBLO: JUZGAD JUICIO VERDADERO, Y NO HARÉIS RASGUÑOS EN VUESTRA CARNE POR UN MUERTO, NI IMPRIMIREIS EN VOSOTROS SEÑAL ALGUNA: YO JEHOVÁ. AMARÁS PUES AL EXTRANJERO."
    },
    {
        title: "Tercer Mandamiento",
        content: "Y HABLÓ DIOS TODAS ESTAS PALABRAS, DICIENDO: YO SOY JEHOVÁ TU DIOS, QUE TE SAQUE DE LA TIERRA DE EGIPTO, DE CASA SE SIERVOS. NO TENDRÁS DIOSES AJENOS DELANTE DE MÍ. NO TE HARÁS IMAGEN, NI NINGUNA SEMEJANZA DE COSA QUE ESTÉ ARRIBA EN EL CIELO, NI ABAJO EN LA TIERRA, NI EN LAS AGUAS DEBAJO DE LA TIERRA: NO TE INCLINARAS A ELLAS, NI LAS HONRARAS; POR QUE YO SOY JEHOVÁ TU DIOS, FUERTE, CELOSO, QUE VISITO LA MALDAD DE LOS PADRES SOBRE LOS HIJOS, SOBRE LOS TERCEROS Y SOBRE LOS CUARTOS, A LOS QUE ME ABORRECEN. Y QUÉ HAGO MISERICORDIA EN MILLARES A LOS QUE ME AMAN, Y GUARDAN MIS MANDAMIENTOS. NO TOMARÁS EL NOMBRE DE JEHOVÁ TU DIOS EN VANO; PORQUE NO DARÁ POR INOCENTE JEHOVÁ AL QUE TOMARE SU NOMBRE EN VANO."
    },
    {
        title: "Cuarto Mandamiento",
        content: "ACORDARTE HAS DEL DÍA DEL REPOSO, PARA SANTIFICARLO: SEIS DÍAS TRABAJARÁS, Y HARÁS TODA TU OBRA; MAS EL SÉPTIMO DÍA SERÁ REPOSO PARA JEHOVÁ TU DIOS: NO HAGAS EN ÉL OBRA ALGUNA, TU, NI TU HIJO, NI TU HIJA, NI TU SIERVO, NI TU CRIADA, NI TU BESTIA, NI TU EXTRANJERO QUE ESTÁ DENTRO DE TUS PUERTAS: POR QUE EN SEIS DÍAS HIZO JEHOVÁ LOS CIELOS Y LA TIERRA, LA MAR Y TODAS LAS COSAS QUE EN ELLOS HAY. Y REPOSÓ EN EL SÉPTIMO DÍA: POR TANTO JEHOVÁ BENDIJO EL DÍA DEL REPOSO Y LO SANTIFICÓ. GUARDARAN. PUES EL SÁBADO LOS HIJOS DE ISRAEL: CELEBRÁNDOLO POR SUS EDADES POR PACTO PERPETUO."
    },
    {
        title: "Quinto Mandamiento",
        content: "HONRA A TU PADRE Y A TU MADRE, POR QUE TUS DÍAS SE ALARGUEN EN LA TIERRA QUE JEHOVÁ TU DIOS TE DA. Y NO MALDECIRÁS A TU PADRE Y A TU MADRE. CADA UNO TEMERÁ A SU PADRE Y A SU MADRE, YO JEHOVÁ VUESTRO DIOS. Y VOSOTROS, PADRES, CORRIGE A TUS HIJOS, Y TE DARÁ DESCANSO, Y DARÁ DELEITE A TU ALMA."
    },
    {
        title: "Sexto Mandamiento",
        content: "NO MATARÁS A TU PRÓJIMO, FUE DICHO: QUE NINGUNO SE ENOJARA LOCAMENTE CONTRA SU HERMANO, PORQUE NO SEA DERRAMADA SANGRE INOCENTE EN MEDIO DE TU TIERRA, QUE JEHOVÁ TU DIOS TE DA POR HEREDAD, Y SEA SOBRE TI SANGRE."
    },
    {
        title: "Séptimo Mandamiento",
        content: "NO COMETERÁS ADULTERIO. NO CONTAMINARAS TU HIJA HACIÉNDOLA FORNICAR: MÁS A CAUSA DE LAS FORNICACIONES, FUE DICHO: EL HOMBRE DEJARÁ PADRE Y Madre, Y SE UNIRÁ A SU MUJER, Y SERÁN DOS EN UNA CARNE. Y NO EMPARENTARAS CON ELLOS: O TOMANDO DE SUS HIJAS PARA TUS HIJOS Y FORNICANDO SUS HIJAS EN POS DE SUS DIOSES, HARÁN TAMBIÉN FORNICAR A TUS HIJOS EN POS DE LOS DIOSES DE ELLAS."
    },
    {
        title: "Octavo Mandamiento",
        content: "NO HURTARÁS: Y NO ENGAÑAREIS, NI MENTIREIS NINGUNO A SU PRÓJIMO. NO OPRIMIRÁS A TU PRÓJIMO, NI LE ROBARÁS. NO SE DETENDRÁ EL TRABAJO DEL JORNALERO EN TU CASA HASTA LA MAÑANA. NO MALDIGAS AL SORDO, Y DELANTE DEL CIEGO NO PONGAS TROPIEZO, MAS TENDRÁS TEMOR DE TU DIOS: YO JEHOVÁ. FUE DICHO: NO ROBARÁS A TU PADRE Y A TU MADRE."
    },
    {
        title: "Noveno Mandamiento",
        content: "NO HABLARÁS CONTRA TU PRÓJIMO FALSO TESTIMONIO. Y NINGUNO DE VOSOTROS PIENSE MAL EN SU CORAZÓN CONTRA SU PRÓJIMO, NI AMÉIS JURAMENTO FALSO: FUE DICHO: NO MENOSPRECIARAS A TU PRÓJIMO. NO ANDARAS CHISMEANDO EN TUS PUEBLOS. NO TE PONDRÁS CONTRA LA SANGRE DE TU PRÓJIMO: YO JEHOVÁ."
    },
    {
        title: "Décimo Mandamiento",
        content: "NO CODICIARÁS LA CASA DE TU PRÓJIMO, NO CODICIARÁS LA MUJER DE TU PRÓJIMO, NI SU SIERVO, NI SU CRIADA, NI SU BUEY, NI SU ASNO, NI COSA ALGUNA DE TU PRÓJIMO."
    }
];

const romanNumerals = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

const eslabonamiento = [
    {
        title: "Primer Mandamiento",
        content: "SOBRE EL TEMOR A DIOS: Dt. 10:20. y 6:13. 2 R. 17:36,39. Dt. 5:29. Is. 8:13. Pr. 15:33. y 19:23. Job 28:28. Ec. 12:13. Lc. 1:50. Sal. 112:1. y 128:1. y 2:11. y 145:19. LA JUSTICIA SEGUIRÁS: Dt. 16:20. Pr. 21:21. Sal. 106:3. Mt. 5:6,10. 1 Jn. 2:29 y 3:7. (1 Ti. 6:11.) SANTOS SERÉIS: Lv. 19:2. y 11:44. y 20:7,26. 1 P. 1:15,16. (Nm. 15:40. He. 12:14.) AMARÁS A TU DIOS: Dt. 30:20. y 11:1. y 6:5. Mt. 22:37. Mr. 12:30. Lc. 10:27. 2 Jn. 6. 1 Jn. 5:3. Jn. 14:15,21,23. y 15:9,10. Mt. 5:19. (1 Jn. 2:24. 2 Jn. 9) Mt. 4:4. Jn. 8:51.) DE TODO TU CORAZÓN: Pr. 23:19,26. Jl. 2:12,13. Dt. 30:2. 1 S. 7:3. Stg. 4:8. He. 10:22. Jer. 29:13. Dt. 4:29. Pr. 3:5. Stg. 5:8. 2 Ts. 2:17. Pr. 3:1. Dt. 11:13. y 26:16. Fil. 4:7. Col. 3:15. Sal. 24:3,4. DE TODA TU ALMA: Sal. 119:20,81. y 84:2. y 42:2. y 63:1. 25:1. Is. 61:10. Lm. 3:24,25. Jer. 6:16. Is. 55:3. y 26:9. Sal. 130:6. DE TODA TU MENTE: Sal. 1:2. y 5:1. y 119:97,99. Ro. 7:22,25. Sal. 119:1. y 112:1. Y DE TODAS TUS FUERZAS: Dt. 16:10,17. 2 Co. 8:11,12 y 9:5,6,7,8. Dt. 15:7,8,9,10,11. Pr. 11:25. Dt. 12:5,6,7 y 14:22,23. 1 Cr. 16:28,29. Sal. 29:1,2 y 68:34. y 96:6,7,8. (Mt. 7:24,25. Pr. 28:7.) ESTE ES EL PRIMERO Y EL GRANDE MANDAMIENTO: Mt. 22:38. Mr. 12:30."
    },
    {
        title: "Segundo Mandamiento",
        content: "EL SEGUNDO MANDAMIENTO ES SEMEJANTE A ÉL: Mr. 12:31. Mt. 22:39,40 y 5:43. Lc. 10:27. Ga. 5:14. Stg. 2:8. (Jn. 15:12,13.) (Ro. 13:8,10. Col. 3:14. 1 Ti. 5:8. Ga. 6:2. 2 P. 1:5,6,7. 1 Co. 13:4,13. 1 Jn. 2:5.) UN MANDAMIENTO NUEVO OS DOY: Jn. 13:34. y 15:12. Lv. 19:18. (1 Jn. 2:7,8 y 3:11. 2 Jn. 5. 1 Jn. 2:10. y 5:2.) EN ESTO CONOCERÁN TODOS QUE SOIS MIS DISCÍPULOS: Jn. 13:35. y 15:7,8,16. Is. 8:16. (Lc. 18:17.) NO ABORRECERÁS A TU HERMANO EN TU CORAZÓN: Lv. 19:17. 1 Jn. 2:9,11 y 3:15. INGENUAMENTE REPRENDERÁS A TU PRÓJIMO: Lv. 19:17. (1 Ti. 4:13,16. Tit. 1:9. Mt. 18:15.) 1 Ti. 5:20. Tit. 1:13. 2 Ti. 4:2. NO TE VENGARÁS: Lv. 19:18. Pr. 20:22. y 24:29. Ro. 12:17,19. He. 10:30. (Mt. 5:39,40. Lc. 6:29,27,28.) JUZGAD JUICIO VERDADERO: Zac. 7:9. Jn. 7:24. Zac. 8:16. Is. 56:1. Lv. 19:15. Dt. 16:19. Pr. 24:23. y 28:21. Ex. 23:6,2,3. 1 S. 16:7. Stg. 2:1,9. Ro. 2:2,3. Dt. 1:17. Is. 45:23,24. NO HARÉIS RASGUÑOS EN VUESTRA CARNE: Lv. 19:27,28 y 21:5. Nm. 6:5. Dt. 14:1. Jer. 16:6. 1 Co. 11:14. AMARÁS PUES AL EXTRANJERO: Dt. 10:18,19. Lv. 19:33,34. Ex. 12:48,49. (Gn. 17:14.)."
    },
    {
        title: "Tercer Mandamiento",
        content: "HABLÓ DIOS TODAS ESTAS PALABRAS, DICIENDO: Ex. 20:1,2. Hasta vers. 17. Dt. 5:6. Hasta vers. 21. NO TENDRÁS DIOSES AJENOS: Ex. 20:3. Dt. 5:7 y 6:14. Jue. 6:10. 2 R. 17:35,38. NO TE HARÁS IMAGEN: Ex. 20:4,23. Dt. 5:8. y 4:16,18. Lv. 26:1. y 19:4. Is. 42:8. y 44:10. NO TE INCLINARÁS A ELLAS: Ex. 20:5. Dt. 5:9. Ex. 34:14. Jer. 25:6. y 1:16. Dt. 8:19. 1 Co. 8:4,5,6. Dt. 11:28. Jos. 24:15. YO SOY JEHOVÁ TU DIOS, FUERTE Y CELOSO: Ex. 20:5. Dt. 5:9. 2 Co. 13:1. Jos. 24:19. Dt. 4:24 y 6:15. QUE VISITO LA MALDAD: Ex. 20:5. Dt. 5:9. Ex. 34:7. Jer. 25:12,13 y 44:22. y 11:11. y 16:17. y 17:1. Is. 13:11. Ap. 14:9,10,11. y 2:16,23. y 16:9. y 20:14,15. y 21:8. (Dt. 31:29. Jer. 23:20. y 30:24. Am. 9:1. 2 Ts. 1:8,9. He. 10:28.) A LOS QUE ME ABORRECEN: Jn. 15:23,25. vers. 18. Pr. 8:36. Y QUE HAGO MISERICORDIA EN MILLARES: Ex. 20:6. Dt. 5:10 y 7:9. Neh. 1:5. Jer. 32:18. Dn. 9:4. (Mt. 9:13. y 12:7.) Sal. 103:17,18. vers. 4,8 y 86:15. Ga. 6:16. A LOS QUE ME AMAN: Pr. 8:17. 1 S. 2:30. Jn. 14:21,23. NO TOMARÁS EL NOMBRE DE JEHOVÁ TU DIOS EN VANO: Ex. 20:7. Dt. 5:11. Lv. 19:12. Mt. 5:33,34,35, 36,37. Os. 13:4. Is. 45:21,22. Dt. 10:17. Dn. 2:47. Ap. 19:16."
    },
    {
        title: "Cuarto Mandamiento",
        content: "ACORDARTE HAS DEL DÍA DEL REPOSO: Ex. 20:8. Dt. 5:12,15. Is. 28:12. Lv. 16:31. Lc. 23:56. He. 4:1,9. Is. 30:15. He. 4:3. Sal. 119:66. SEIS DÍAS TRABAJARÁS: Ex. 20:9 y 31:15. y 34:21. y 35:2. Lv. 23:3. Dt. 5:13. Ex. 23:12. Lc. 13:14. Ex. 16:22,26,29. Mr. 2:27. (Mt. 12:12.) NO HAGAS EN ÉL OBRA ALGUNA: Ex. 20:10. Dt. 5:14. Jer. 17:21,22. Is. 58:13. y 56:2,4,6. Neh. 10:31. y 13:16,19. EN SEIS DÍAS HIZO JEHOVÁ LOS CIELOS Y LA TIERRA: Gn. 2:2,3. Ex. 20:11. He. 4:4,10. (Ex. 31:13,17. Ez. 20:12,20.) GUARDARÁS PUES EL SÁBADO: Ex. 31:14,16. Lv. 23:32. He. 4:3,9,11. Ez. 46:3. (Neh. 9:13,14. Mal. 4:4.) AYUNO AGRADABLE A JEHOVÁ: Is. 58:5,6. Mt. 6:17,18 y 17:21. (Lv. 16:31.)"
    },
    {
        title: "Quinto Mandamiento",
        content: "HONRA A TU PADRE Y A TU Madre: Ex. 20:12. Dt. 5:16. Mt. 15:4. y 19:19. Mr. 7:10. Lc. 18:20. Ef. 6:2,3. NO MALDECIRÁS A TU PADRE Y A TU MADRE: Pr. 20:20. Ex. 21:17. Dt. 27:16. CADA UNO TEMERÁ A SU PADre Y A SU MADRE: Lv. 19:3. Ef. 6:1. Col. 3:20. Y VOSOTROS PADRES: Ef. 6:4. Col. 3:21. Pr. 22:6. 1 Ti. 3:4,5. CORRIGE A TUS HIJOS: Pr. 29:17. 22:15. y 19:18. y 23:13,14 y 29:15."
    },
    {
        title: "Sexto Mandamiento",
        content: "NO MATARÁS A TU PRÓJIMO: Ex. 20:13. Dt. 5:17. Mt. 5:21 y 19:18. Ro. 13:9. 1 Jn. 3:12. (Ex. 23:1,2. Mt. 5:22. Dt. 19:10. Ex. 23:7. Pr. 6:17,18,19.)."
    },
    {
        title: "Séptimo Mandamiento",
        content: "NO COMETERÁS ADULTERIO: Ex. 20:14. Dt. 5:18. Mt. 5:27 y 15:19. Lc. 18:20. Ro. 2:22 y 13:9. 1 Co. 6:9. Ga. 5:19. (1 Co. 15:33, 50.) NO HARÁS FORNICAR A TUS HIJOS: Lv. 19:29. Dt. 23:17. 2 R. 23:7. Ez. 16:16. Ef. 5:5. Ap. 21:8. MÁS A CAUSA DE LAS FORNICACIONES: 1 Co. 7:2,3,4 y 6:18. Mt. 15:19. 1 Co. 10:8. Hch. 15:20. Ro. 1:29,32. EL HOMBRE DEJARÁ PADRE Y MADRE: Mt. 19:5,6. Gn. 2:24. Ef. 5:31,32. He. 13:4. NO EMPARENTARÁS CON ELLOS: Dt. 7:3,4. Ex. 34:16. Jos. 23:12,13. Neh. 10:30. Esd. 9:12,14. (2 Co. 6:14,15.)."
    },
    {
        title: "Octavo Mandamiento",
        content: "NO HURTARÁS: Ex. 20:15. Dt. 5:19. Lv. 19:11. Ef. 4:28. Ro. 13:9. (Lv. 6:2,4. 1 P. 4:15. Ga. 6:7.) NO OPRIMIRÁS A TU PRÓJIMO: Lv. 19:13. Ef. 4:25. Col. 3:9. Jer. 7:6. (1 Ts. 4:6.) NI LE ROBARÁS: Pr. 22:22. Dt. 15:7,8,9,10,11. Pr. 11:25. 2 Co. 8:10,11,12. y 9:5,6,7,8. EL QUE DA AL POBRE RECOMPENSA TENDRÁ DE DIOS: Pr. 19:17. y 28:27. y 29:21. Mt. 10:42. y 25:40. NO DETENDRÁS EL TRABAJO DEL JORNALERO: Dt. 24:14,15. Mal. 3:5. Jer. 22:13. Lv. 19:13. Stg. 5:4. NO MALDIGAS AL SORDO: Lv. 19:14. NO ROBARÁS A TU PADRE Y A TU MADRE: Pr. 28:24."
    },
    {
        title: "Noveno Mandamiento",
        content: "NO HABLARÁS CONTRA TU PRÓJIMO FALSO TESTIMONIO: Ex. 20:16. Dt. 5:20. Mt. 19:18. Ro. 13:9. NINGUNO PIENSE MAL EN SU CORAZÓN CONTRA SU PRÓJIMO: Zac. 8:17 y 7:10. Pr. 24:8,9. Ro. 1:30,31. NI AMÉIS JURAMENTO FALSO: Lv. 6:3,5. NO MENOSPRECIARÁS A TU PRÓJIMO: 1 Ts. 4:8. NO ANDARÁS CHISMEANDO: Lv. 19:16. Sal. 15:30. Pr. 11:13. y 20:19. Sal. 34:13. 1 P. 2:22. Ez. 22:9."
    },
    {
        title: "Décimo Mandamiento",
        content: "NO CODICIARÁS LA CASA DE TU PRÓJIMO, NO CODICIARÁS LA MUJER DE TU PRÓJIMO, NI SU SIERVO, NI SU CRIADA, NI SU BUEY, NI SU ASNO, NI COSA ALGUNA DE TU PRÓJIMO."
    }
];

export default function TenCommandments() {
  return (
    <section id="ten-commandments" className="py-20 md:py-32 bg-secondary">
      <div className="container max-w-screen-lg px-4 mx-auto md:px-0">
        <div className="mb-12 text-center">
          <ScrollText className="w-16 h-16 mx-auto text-primary" />
          <h2 className="mt-4 text-4xl font-bold md:text-5xl font-headline">
            Diez Mandamientos
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-lg font-body text-foreground/80">
            La Ley Real
          </p>
        </div>

        <Card className="mb-12 shadow-lg">
          <div className="p-6 md:p-8">
            <div className="my-8">
                <Image
                    src="/images/ley_imprimir.png"
                    alt="Los Diez Mandamientos"
                    width={1683}
                    height={1190}
                    className="w-full h-auto mx-auto rounded-lg shadow-xl"
                />
            </div>
            <blockquote className="pl-6 mt-6 italic border-l-4 font-body border-accent text-lg">
                “YO EZEQUIEL, habiendo entendido los misterios de Dios volví mi rostro al señor Dios del cielo buscándole en oración y ruego, en vigilias, buscando su inteligencia, su sabiduría, para entender las palabras de la alianza escritas en los libros de la Ley original…”
            </blockquote>
            <p className="mt-4 leading-relaxed font-body">
                Impulsado por las palabras que me dijo Dios: “Sal a los pueblos y habla”. Yo Ezequiel salí a difundir “El Evangelio de Paz”, las palabras de la alianza, las Diez palabras del Pacto, el arrepentimiento y remisión de pecados, anunciando libertad.
            </p>
             <blockquote className="pl-6 mt-6 italic border-l-4 font-body border-accent">
                “Os alabo, hermanos, que en todo os acordéis de mi y retenéis las instrucciones mías, de la misma manera que os enseñé”. 1 Corintios 11: 2.
            </blockquote>
             <blockquote className="pl-6 mt-6 italic border-l-4 font-body border-accent">
                “Bienaventurados tus hombres y dichosos tus siervos que están siempre delante de ti, y todos los que oyen tu sabiduría”. 2 Crónicas 9: 7
            </blockquote>
             <blockquote className="pl-6 mt-6 italic border-l-4 font-body border-accent">
                “Y vendras a los sacerdotes, y al Juez que fuere en aquellos dias y él te enseñará la sentencia del juicio”. Deuteronomio 17: 9
            </blockquote>
          </div>
        </Card>

        <div className="mb-12">
            <h3 className="mb-8 text-3xl font-bold text-center font-headline text-primary">Los Diez Mandamientos</h3>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {commandments.map((commandment, index) => (
                  <AccordionItem value={`item-${index}`} key={index} className="border-0">
                     <Card className="shadow-lg overflow-hidden">
                        <AccordionTrigger className="p-6 text-xl text-left hover:no-underline font-headline">
                           <div className="flex items-center">
                              <span className="mr-4 text-primary">{romanNumerals[index]}</span>
                              {commandment.title}
                           </div>
                        </AccordionTrigger>
                        <AccordionContent>
                           <div className="px-6 pb-6 text-base leading-relaxed font-body text-foreground/80">
                              {commandment.content}
                           </div>
                        </AccordionContent>
                     </Card>
                  </AccordionItem>
              ))}
            </Accordion>
        </div>

        <Card className="shadow-lg">
          <div className="p-6 md:p-8">
            <h3 className="mb-4 text-2xl text-center font-headline text-primary">
              Eslabonamiento
            </h3>
            <Accordion type="single" collapsible className="w-full">
              {eslabonamiento.map((item, index) => (
                <AccordionItem value={`eslabonamiento-${index}`} key={index}>
                  <AccordionTrigger className="text-lg text-left font-headline">{item.title}</AccordionTrigger>

                  <AccordionContent className="px-4 pt-2 text-sm whitespace-pre-wrap font-body text-muted-foreground">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Card>

      </div>
    </section>
  );
}
