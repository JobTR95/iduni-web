import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  metadataBase: new URL('https://iduni.org'),
  title: {
    default: 'IDUNI | Iglesia de la Doctrina Universal de Israel',
    template: '%s | IDUNI',
  },
  description:
    'Iglesia de la Doctrina Universal de Israel (IDUNI). Comunidad de fe, esperanza y amor. Conoce nuestra historia, los Diez Mandamientos, estudios bíblicos, fiestas sagradas y santuarios.',
  openGraph: {
    title: 'IDUNI',
    description:
      'Iglesia de la Doctrina Universal de Israel. Una comunidad de fe, esperanza y amor.',
    type: 'website',
    locale: 'es_CO',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;700&family=Inter:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}