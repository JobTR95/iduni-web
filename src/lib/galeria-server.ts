import { promises as fs } from 'fs';
import path from 'path';

const EXTENSIONES_IMAGEN = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif', '.avif']);

export async function leerFotosGaleria(): Promise<Record<string, string[]>> {
  const carpeta = path.join(process.cwd(), 'public', 'images', 'galeria');
  const resultado: Record<string, string[]> = {};

  let slugs: string[] = [];
  try {
    slugs = await fs.readdir(carpeta);
  } catch {
    return resultado;
  }

  for (const slug of slugs) {
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
        .sort((a, b) => a.localeCompare(b, 'es', { numeric: true }))
        .map((f) => `/images/galeria/${slug}/${encodeURI(f)}`);
    } catch {
      continue;
    }

    resultado[slug] = archivos;
  }

  return resultado;
}