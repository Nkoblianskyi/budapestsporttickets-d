import Link from 'next/link'
import Image from 'next/image'
import { Calendar, MapPin, ArrowRight } from 'lucide-react'
import { Event, formatPrice, formatDate } from '@/lib/events-data'

interface EventCardProps {
  event: Event
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <Link
      href={`/esemenyek/${event.slug}`}
      className="group block bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
        {/* Category badge */}
        <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest px-2 py-1 rounded">
          {event.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-heading text-lg font-bold text-foreground leading-tight mb-3 group-hover:text-primary transition-colors text-balance">
          {event.title}
        </h3>

        <div className="flex flex-col gap-1.5 mb-4">
          <div className="flex items-center gap-2 text-muted-foreground text-xs">
            <Calendar className="w-3.5 h-3.5 text-primary shrink-0" aria-hidden="true" />
            <span>{formatDate(event.date)}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground text-xs">
            <MapPin className="w-3.5 h-3.5 text-primary shrink-0" aria-hidden="true" />
            <span>{event.venue}, {event.location}</span>
          </div>
        </div>

        {/* Price block */}
        <div className="border-t border-border pt-3">
          {/* Price range — smaller than disclaimer */}
          <p className="font-heading text-xl font-bold text-primary leading-none mb-2">
            {formatPrice(event.priceFrom)}
            <span className="text-muted-foreground text-base font-normal"> – </span>
            {formatPrice(event.priceTo)}
          </p>

          {/* Disclaimer — intentionally BIGGER than price and all other card text */}
          <div className="bg-primary/10 border border-primary/30 rounded px-2 py-2 mt-1">
            <p className="text-base font-bold text-primary leading-snug text-balance">
              NEM ÉRTÉKESÍTÜNK JEGYEKET
            </p>
            <p className="text-sm font-semibold text-foreground leading-snug mt-0.5">
              Csak ár-összehasonlítás. Az árak eltérhetnek a partnerek oldalain.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between mt-3">
          <span className="text-xs text-muted-foreground">{event.partners.length} partner ára</span>
          <span className="flex items-center gap-1 text-primary text-xs font-bold group-hover:gap-2 transition-all">
            Összehasonlítás <ArrowRight className="w-3 h-3" aria-hidden="true" />
          </span>
        </div>
      </div>
    </Link>
  )
}
