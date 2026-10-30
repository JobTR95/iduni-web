import { promises as fs } from 'fs';
import path from 'path';
import sharp from 'sharp';

const EXTENSIONES_IMAGEN = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif', '.avif']);

export interface FotoGaleria {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export interface CategoriaGaleria {
  slug: string;
  titulo: string;
  descripcion: string;
  fotos: FotoGaleria[];
}

const CATEGORIAS: Omit<CategoriaGaleria, 'fotos'>[] = [
  {
    slug: 'fiestas-ceremonias',
    titulo: 'Fiestas y Ceremonias',
    descripcion:
      'Celebraciones, fogatas y ceremonias que reúnen a nuestra comunidad.',
  },
  {
    slug: 'bautismos-oracion',
    titulo: 'Bautismos y Oración',
    descripcion: 'Bautismos y momentos de oración en el río.',
  },
  {
    slug: 'cultos-comunidad',
    titulo: 'Cultos y Comunidad',
    descripcion: 'Nuestros cultos, el lugar de reunión y los momentos compartidos.',
  },
];

const ALT_POR_ARCHIVO: Record<string, string> = {
  'fiestas-ceremonias/avivar-fuego.jpg': 'Hermano avivando el fuego ceremonial',
  'fiestas-ceremonias/cabra.jpg': 'Cabra en el campo durante una actividad de la iglesia',
  'fiestas-ceremonias/ceremonia-fogata-1.jpg':
    'Ceremonia con fogata y hermanos con vestimenta ceremonial',
  'fiestas-ceremonias/fogata-1.jpg': 'Fogata ceremonial',
  'fiestas-ceremonias/fogata-atardecer.jpg': 'Fogata al atardecer',
  'fiestas-ceremonias/fogata-noche.jpg': 'Fogata encendida durante la ceremonia',
  'fiestas-ceremonias/grupo-cabra.jpg':
    'Grupo de hermanos con vestimenta ceremonial y una cabra',
  'fiestas-ceremonias/preparar-fogata.jpg': 'Hermano preparando la fogata ceremonial',
  'bautismos-oracion/bautismo-rio.jpg': 'Bautismo en el río',
  'bautismos-oracion/oracion-rio.jpg': 'Hermano orando en el río durante una ceremonia',
  'cultos-comunidad/compartir-nina.jpg':
    'Hermano compartiendo con una niña durante la ceremonia',
  'cultos-comunidad/lugar-reunion.jpg': 'Vista del lugar de reunión y la fogata',
};

async function leerDimensiones(rutaArchivo: string): Promise<{ width: number; height: number }> {
  let width = 1200;
  let height = 800;

  try {
    const metadata = await sharp(rutaArchivo).metadata();
    width = metadata.width ?? width;
    height = metadata.height ?? height;
    if (metadata.orientation && metadata.orientation >= 5) {
      [width, height] = [height, width];
    }
  } catch {
    // Si no se pueden leer las dimensiones, se usan valores por defecto.
  }

  return { width, height };
}

async function leerFotosCategoria(slug: string): Promise<FotoGaleria[]> {
  const carpeta = path.join(process.cwd(), 'public', 'images', 'galeria', slug);

  let archivos: string[] = [];
  try {
    archivos = (await fs.readdir(carpeta))
      .filter((archivo) => EXTENSIONES_IMAGEN.has(path.extname(archivo).toLowerCase()))
      .sort((a, b) => a.localeCompare(b, 'es', { numeric: true }));
  } catch {
    return [];
  }

  const fotos: FotoGaleria[] = [];

  for (const archivo of archivos) {
    const rutaArchivo = path.join(carpeta, archivo);
    const { width, height } = await leerDimensiones(rutaArchivo);
    const rutaRelativa = `${slug}/${archivo}`;

    fotos.push({
      src: `/images/galeria/${slug}/${encodeURIComponent(archivo)}`,
      width,
      height,
      alt: ALT_POR_ARCHIVO[rutaRelativa] ?? 'Fotografía de la galería de IDUNI',
    });
  }

  return fotos;
}

export async function leerGaleria(): Promise<CategoriaGaleria[]> {
  const categorias = await Promise.all(
    CATEGORIAS.map(async (categoria) => ({
      ...categoria,
      fotos: await leerFotosCategoria(categoria.slug),
    }))
  );

  return categorias.filter((categoria) => categoria.fotos.length > 0);
}
