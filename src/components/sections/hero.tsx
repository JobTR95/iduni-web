import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full h-[70vh] md:h-[85vh] text-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <iframe
          loading="lazy"
          className="absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2"
          src="https://www.youtube.com/embed/mR-uem0uWFY?autoplay=1&mute=1&loop=1&playlist=mR-uem0uWFY&controls=0&showinfo=0&autohide=1&modestbranding=1"
          allowFullScreen
          allow="autoplay; encrypted-media"
          style={{ minWidth: '177.77vh', minHeight: '100vw', border: 'none', padding: 0, margin: 0 }}
        ></iframe>
      </div>
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <h1 className="text-5xl font-bold sm:text-6xl md:text-8xl lg:text-9xl font-headline text-shadow-lg">
          IDUNI
        </h1>
        <p className="max-w-3xl mt-6 text-lg md:text-xl text-shadow">
          Un lugar para encontrar fe, comunidad y propósito a través de la palabra de Dios.
        </p>
        <div className="mt-10">
           <Button asChild size="default" className="text-base">
            <Link href="/quienes-somos">Conócenos</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
