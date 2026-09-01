export interface GaleriaCategoria {
  slug: string;
  fotos: string[];
}

export const galeriaFotos: Record<string, GaleriaCategoria> = {
  'cultos-reuniones': {
    slug: 'cultos-reuniones',
    fotos: [],
  },
  'comunidad-hermandad': {
    slug: 'comunidad-hermandad',
    fotos: [],
  },
  'festividades-sagradas': {
    slug: 'festividades-sagradas',
    fotos: [],
  },
  'momentos-oracion': {
    slug: 'momentos-oracion',
    fotos: [],
  },
  'estudios-biblicos': {
    slug: 'estudios-biblicos',
    fotos: [],
  },
  'servicio-comunitario': {
    slug: 'servicio-comunitario',
    fotos: [],
  },
};

export function fotosDeCategoria(slug: string): string[] {
  const categoria = galeriaFotos[slug];
  return categoria ? categoria.fotos : [];
}

export const carpetaDeCategoria = (slug: string): string =>
  `/images/galeria/${slug}/`;