'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Landmark, Map, Navigation } from 'lucide-react';

export interface Sanctuary {
  name: string;
  address?: string;
  imageUrl: string;
  mapsUrl?: string;
}

interface SanctuaryCardProps {
  sanctuary: Sanctuary;
}

export function SanctuaryCard({ sanctuary }: SanctuaryCardProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="text-center shadow-md cursor-pointer hover:shadow-xl transition-shadow">
          <CardHeader>
            <Landmark className="w-8 h-8 mx-auto text-accent" />
          </CardHeader>
          <CardContent>
            <p className="font-semibold font-body">{sanctuary.name}</p>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] md:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-headline text-primary">{sanctuary.name}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="relative w-full overflow-hidden rounded-lg aspect-video">
            <Image
              src={sanctuary.imageUrl}
              alt={`Foto de ${sanctuary.name}`}
              fill
              className="object-cover"
              data-ai-hint="church building"
            />
          </div>
          {sanctuary.address ? (
            <div className="flex items-start gap-4">
              <Map className="w-6 h-6 mt-1 text-primary shrink-0" />
              <div>
                <h4 className="font-semibold">Dirección</h4>
                <p className="text-sm text-muted-foreground">{sanctuary.address}</p>
              </div>
            </div>
          ) : (
            <div className="flex items-start gap-4">
              <Map className="w-6 h-6 mt-1 text-primary shrink-0" />
              <div>
                <h4 className="font-semibold">Dirección</h4>
                <p className="text-sm text-muted-foreground">Información próximamente</p>
              </div>
            </div>
          )}
          {sanctuary.mapsUrl && (
            <Button asChild className="mt-4">
              <Link href={sanctuary.mapsUrl} target="_blank" rel="noopener noreferrer">
                <Navigation className="w-4 h-4 mr-2" />
                Cómo llegar
              </Link>
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
