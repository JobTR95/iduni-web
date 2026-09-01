import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarDays, Moon } from 'lucide-react';

const newMoons2026 = [
    { month: 'Enero', day: 18, weekday: 'Domingo' },
    { month: 'Febrero', day: 17, weekday: 'Martes' },
    { month: 'Marzo', day: 19, weekday: 'Jueves' },
    { month: 'Abril', day: 17, weekday: 'Viernes' },
    { month: 'Mayo', day: 16, weekday: 'Sábado' },
    { month: 'Junio', day: 15, weekday: 'Lunes' },
    { month: 'Julio', day: 14, weekday: 'Martes' },
    { month: 'Agosto', day: 12, weekday: 'Miércoles' },
    { month: 'Septiembre', day: 11, weekday: 'Viernes' },
    { month: 'Octubre', day: 10, weekday: 'Sábado' },
    { month: 'Noviembre', day: 9, weekday: 'Lunes' },
    { month: 'Diciembre', day: 9, weekday: 'Miércoles' },
];

const solemnFeasts = [
  {
    title: 'Fiesta de la Pascua',
    dates: 'del 22 de Abril al 29 de Abril de 2024',
    description: 'Semana de guardar á Jehová nuestro Dios, para la consagración del hombre; haciendo memoria de la salida del pueblo Hebreo de Egipto dando Dios la orden de hacer la Pascua, y como recordatorio de nacimiento y muerte de nuestro señor Jesucristo.',
    verses: 'Levítico 23: 5, Ezequiel 45: 21, San Mateo 26: 17',
  },
  {
    title: 'Fiesta de Pentecostés',
    dates: 'del 15 de Junio al 22 de Junio de 2024',
    description: 'En la fiesta de pentecostés se celebran dos cosas muy importantes, la primera como lo fue el derramamiento del espíritu santo en la fiesta una vez el señor Jesús subió al cielo y el pueblo profetizó y hablo en lenguas, y el segundo como agradecimiento por a Dios por los primeros frutos de la cosecha la siega.',
    verses: 'Números 28:26, Levítico 23: 16, Deuteronomio 16: 10, 11 y Hechos 2: 1',
  },
  {
    title: 'Fiesta de las Cabañas',
    dates: 'del 16 de Octubre al 23 de Octubre 2024',
    description: 'En la fiesta de las cabañas, cosecha o tabernáculos se celebra la cosecha de los frutos, la bendición que Jehová Dios dió, además de habitar en cabañas como se hacía en el tiempo antiguo.',
    verses: '2 Crónicas 8:13, Éxodo 23: 16, San Juan 7: 2',
  },
];

const otherHolyDays = [
    {
        title: '1° de Abril',
        description: 'Inicio del año religioso.',
        verses: 'Deuteronomio 16: 1 y Éxodo 12:2',
    },
    {
        title: '1° de Octubre - Día de las Trompetas',
        description: 'Conmemoración solemne con sonido de trompetas.',
        verses: 'Levítico 23: 24, Números 29: 1',
    },
    {
        title: '10 de Octubre - Día de las Expiaciones',
        description: 'Día de ayuno y arrepentimiento para la expiación de los pecados.',
        verses: 'Levítico 23: 27,28',
    }
]

export default function HolyDays() {
  return (
    <section id="holy-days" className="py-16 md:py-24 bg-background">
      <div className="container max-w-screen-lg mx-auto">
        <div className="mb-12 text-center">
          <CalendarDays className="w-12 h-12 mx-auto text-primary" />
          <h2 className="mt-4 text-3xl font-bold md:text-4xl font-headline">
            Fiestas, Lunas Nuevas y Días Consagrados
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-foreground/80 font-body">
            Únete a nosotros para celebrar los tiempos señalados por Dios.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* New Moons Card */}
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="flex items-center justify-center gap-2 text-xl text-center font-headline text-primary">
                        <Moon className="w-6 h-6"/> Lunas Nuevas 2026
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="grid grid-cols-2 gap-2 text-sm text-center text-muted-foreground font-body">
                        {newMoons2026.map((moon, index) => (
                            <li key={`${moon.month}-${index}`}>
                                {moon.month}: <span className="font-semibold text-foreground">{moon.day} ({moon.weekday})</span>
                            </li>
                        ))}
                    </ul>
                     <p className="mt-4 text-xs italic text-center text-muted-foreground font-body">
                        Salmos 81: 3, Ezequiel 46: 1, 3
                    </p>
                </CardContent>
            </Card>

            {/* Other Holy Days Card */}
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="text-xl text-center font-headline text-primary">
                        Otras Fechas Solemnes
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    {otherHolyDays.map(day => (
                        <div key={day.title}>
                            <h3 className="font-bold text-center font-headline">{day.title}</h3>
                            <p className="text-sm text-center text-muted-foreground font-body">{day.description}</p>
                            {day.verses && <p className="mt-1 text-xs italic text-center text-muted-foreground font-body">{day.verses}</p>}
                        </div>
                    ))}
                </CardContent>
            </Card>
        </div>

        {/* Solemn Feasts */}
        <div className="mt-12">
            <h2 className="mb-8 text-2xl font-bold text-center md:text-3xl font-headline text-primary">Fiestas Solemnes</h2>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                {solemnFeasts.map((feast, index) => (
                    <Card key={index} className="flex flex-col text-center transition-transform transform hover:scale-105 hover:shadow-xl">
                    <CardHeader>
                        <CardTitle className="pt-4 font-headline">{feast.title}</CardTitle>
                        <p className="text-sm font-semibold text-accent font-body">{feast.dates}</p>
                    </CardHeader>
                    <CardContent className="flex flex-col flex-grow">
                        <p className="flex-grow text-sm text-muted-foreground font-body">{feast.description}</p>
                        <p className="mt-4 text-xs italic text-muted-foreground font-body">{feast.verses}</p>
                    </CardContent>
                    </Card>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
}
