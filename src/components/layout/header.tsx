'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetClose } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/quienes-somos', label: 'Quiénes Somos' },
  { href: '/fundador', label: 'Fundador' },
  { href: '/mandamientos', label: 'Mandamientos' },
  { href: '/bible-study', label: 'Estudios Bíblicos' },
  { href: '/fiestas', label: 'Fiestas' },
  { href: '/galeria', label: 'Galería' },
  { href: '/santuarios', label: 'Santuarios' },
  { href: '/contacto', label: 'Contacto' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const NavLink = ({ href, label, isMobile }: { href: string; label: string; isMobile?: boolean }) => {
    const isActive = pathname === href;
    return (
      <Link
        href={href}
        onClick={() => isMobile && setIsMobileMenuOpen(false)}
        className={`text-sm font-medium transition-colors hover:text-primary ${
          isActive ? 'text-primary' : 'text-foreground/80'
        } ${isMobile ? 'block w-full p-4 text-lg' : ''}`}
      >
        {label}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex items-center justify-between h-16 px-4 md:px-8 max-w-screen-2xl">
        <Link href="/" className="flex items-center gap-2 font-bold">
          <span className="text-2xl font-headline text-foreground">IDUNI</span>
        </Link>
        <nav className="hidden gap-6 lg:gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="w-5 h-5" />
              <span className="sr-only">Abrir menú</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-full max-w-xs p-0">
            <div className="flex flex-col h-full">
              <SheetHeader className="flex flex-row items-center justify-between p-4 border-b">
                 <SheetTitle asChild>
                    <Link href="/" className="flex items-center gap-2 font-bold" onClick={() => setIsMobileMenuOpen(false)}>
                      <span className="text-xl font-headline text-foreground">IDUNI</span>
                    </Link>
                 </SheetTitle>
                 <SheetClose asChild>
                    <Button variant="ghost" size="icon">
                      <X className="h-5 w-5" />
                      <span className="sr-only">Cerrar menú</span>
                    </Button>
                 </SheetClose>
              </SheetHeader>
              <nav className="flex flex-col">
                {navLinks.map((link) => (
                  <NavLink key={link.href} {...link} isMobile />
                ))}
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
