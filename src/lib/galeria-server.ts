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

const ALT_POR_ARCHIVO: Record<string, string> = {
  'cultos-reuniones/foto-1.jpg': 'Cabra en el campo durante una actividad de la iglesia',
  'cultos-reuniones/foto-2.jpg': 'Ceremonia con fogata y hermanos con vestimenta ceremonial',
  'comunidad-hermandad/foto-1.jpg': 'Hermano avivando el fuego ceremonial',
  'comunidad-hermandad/foto-2.jpg': 'Bautismo en el río',
  'festividades-sagradas/foto-1.jpg': 'Hermano orando en el río durante una ceremonia',
  'festividades-sagradas/foto-2.jpg': 'Hermano preparando la fogata ceremonial',
  'estudios-biblicos/foto-1.jpg': 'Fogata encendida durante la ceremonia',
  'estudios-biblicos/foto-2.jpg': 'Fogata al atardecer',
  'momentos-oracion/foto-1.jpg': 'Vista del lugar de reunión y la fogata',
  'momentos-oracion/foto-2.jpg': 'Hermano compartiendo con una niña durante la ceremonia',
  'servicio-comunitario/foto-1.jpg': 'Fogata ceremonial',
  'servicio-comunitario/foto-2.jpg': 'Grupo de hermanos con vestimenta ceremonial y una cabra',
};

export async function leerFotosGaleria(): Promise<FotoGaleria[]> {
  const carpeta = path.join(process.cwd(), 'public', 'images', 'galeria');

  let slugs: string[] = [];
  try {
    slugs = await fs.readdir(carpeta);
  } catch {
    return [];
  }

  const fotos: FotoGaleria[] = [];

  for (const slug of slugs.sort((a, b) => a.localeCompare(b, 'es', { numeric: true }))) {
    const ruta = path.join(carpeta, slug);

    let estadistica;
    try {
      estadistica = await fs.stat(ruta);
    } catch {
      continue;
    }
    if (!estadistica.isDirectory()) continue;

    let archivos: string[] = [];
    try {
      archivos = (await fs.readdir(ruta))
        .filter((f) => EXTENSIONES_IMAGEN.has(path.extname(f).toLowerCase()))
        .sort((a, b) => a.localeCompare(b, 'es', { numeric: true }));
    } catch {
      continue;
    }

    for (const archivo of archivos) {
      const rutaArchivo = path.join(ruta, archivo);
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

      const rutaRelativa = `${slug}/${archivo}`;
      fotos.push({
        src: `/images/galeria/${slug}/${encodeURIComponent(archivo)}`,
        width,
        height,
        alt: ALT_POR_ARCHIVO[rutaRelativa] ?? 'Fotografía de la galería de IDUNI',
      });
    }
  }

  return fotos;
}
