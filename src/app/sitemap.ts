import type { MetadataRoute } from 'next';
import { leerGaleria } from '@/lib/galeria-server';
import { urlAbsoluta } from '@/lib/seo';

const rutas = [
  { ruta: '/', prioridad: 1, frecuencia: 'weekly' as const },
  { ruta: '/quienes-somos', prioridad: 0.9, frecuencia: 'monthly' as const },
  { ruta: '/fundador', prioridad: 0.8, frecuencia: 'monthly' as const },
  { ruta: '/mandamientos', prioridad: 0.8, frecuencia: 'monthly' as const },
  { ruta: '/bible-study', prioridad: 0.8, frecuencia: 'monthly' as const },
  { ruta: '/fiestas', prioridad: 0.8, frecuencia: 'monthly' as const },
  { ruta: '/galeria', prioridad: 0.9, frecuencia: 'weekly' as const },
  { ruta: '/santuarios', prioridad: 0.9, frecuencia: 'monthly' as const },
  { ruta: '/contacto', prioridad: 0.8, frecuencia: 'yearly' as const },
  { ruta: '/politica-de-datos', prioridad: 0.3, frecuencia: 'yearly' as const },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const categorias = await leerGaleria();
  const imagenesGaleria = categorias.flatMap((categoria) =>
    categoria.fotos.map((foto) => urlAbsoluta(foto.src))
  );

  const ultimaActualizacion = new Date();

  return rutas.map(({ ruta, prioridad, frecuencia }) => ({
    url: urlAbsoluta(ruta),
    lastModified: ultimaActualizacion,
    changeFrequency: frecuencia,
    priority: prioridad,
    ...(ruta === '/galeria' ? { images: imagenesGaleria } : {}),
  }));
}
