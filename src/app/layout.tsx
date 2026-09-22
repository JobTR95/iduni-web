import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://iduni.org';
const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'IDUNI | Iglesia de la Doctrina Universal de Israel',
    template: '%s | IDUNI',
  },
  description:
    'Iglesia de la Doctrina Universal de Israel (IDUNI). Comunidad de fe, esperanza y amor. Conoce nuestra historia, los Diez Mandamientos, estudios bíblicos, fiestas sagradas y santuarios.',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'IDUNI',
    title: 'IDUNI | Iglesia de la Doctrina Universal de Israel',
    description:
      'Iglesia de la Doctrina Universal de Israel. Comunidad de fe, esperanza y amor.',
    locale: 'es_CO',
    images: [{ url: `${siteUrl}/og.png`, width: 1200, height: 630, alt: 'IDUNI — Iglesia de la Doctrina Universal de Israel' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IDUNI | Iglesia de la Doctrina Universal de Israel',
    description:
      'Iglesia de la Doctrina Universal de Israel. Comunidad de fe, esperanza y amor.',
    images: [`${siteUrl}/og.png`],
  },
  ...(googleVerification ? { verification: { google: googleVerification } } : {}),
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Church',
  name: 'Iglesia de la Doctrina Universal de Israel',
  alternateName: 'IDUNI',
  url: siteUrl,
  logo: `${siteUrl}/icon.png`,
  image: `${siteUrl}/og.png`,
  description:
    'Iglesia de la Doctrina Universal de Israel (IDUNI). Comunidad de fe, esperanza y amor. Cultos, estudios bíblicos, fiestas sagradas y santuarios.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Cra 19c #53-68, Barrio San Carlos',
    addressLocality: 'Bogotá',
    addressCountry: 'CO',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'info@iduni.org',
    telephone: '+57 312 123 4567',
    contactType: 'customer service',
  },
  sameAs: [
    'https://www.instagram.com/idunioficial/',
    'https://m.facebook.com/IDUNI-Oficial-106958015090853/',
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
        <Toaster />
      </body>
    </html>
  );
}