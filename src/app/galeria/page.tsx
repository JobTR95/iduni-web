import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Gallery from '@/components/sections/gallery';
import JsonLd from '@/components/seo/json-ld';
import { leerGaleria } from '@/lib/galeria-server';
import { crearMetadata, crearPaginaJsonLd, urlAbsoluta } from '@/lib/seo';
import type { Metadata } from 'next';

const titulo = 'Galería de Fotografías';
const descripcion =
  'Fotos de la comunidad IDUNI en Bogotá: fiestas y ceremonias, bautismos y oración, cultos y momentos de comunidad.';

export const metadata: Metadata = crearMetadata({
  titulo,
  descripcion,
  ruta: '/galeria',
});

export default async function GaleriaPage() {
  const categorias = await leerGaleria();

  const imagenes = categorias.flatMap((categoria) =>
    categoria.fotos.map((foto) => ({
      '@type': 'ImageObject',
      contentUrl: urlAbsoluta(foto.src),
      name: foto.alt,
      description: foto.alt,
      width: foto.width,
      height: foto.height,
    }))
  );

  const jsonLd = crearPaginaJsonLd({
    titulo,
    descripcion,
    ruta: '/galeria',
    tipo: 'CollectionPage',
    about: {
      '@type': 'ImageGallery',
      name: 'Galería de fotografías de IDUNI',
    },
    mainEntity: {
      '@type': 'ImageGallery',
      name: 'Galería de fotografías de IDUNI',
      image: imagenes,
    },
    imagenes: imagenes.map((imagen) => imagen.contentUrl),
  });

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <JsonLd data={jsonLd} />
      <Header />
      <main className="flex-1">
        <Gallery categorias={categorias} />
      </main>
      <Footer />
    </div>
  );
}
