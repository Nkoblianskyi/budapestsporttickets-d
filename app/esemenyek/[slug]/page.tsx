import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, MapPin, ArrowRight, ArrowLeft, ExternalLink, ShieldAlert, TicketIcon } from 'lucide-react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import DisclaimerBanner from '@/components/disclaimer-banner'
import EventCard from '@/components/event-card'
import { events, formatPrice, formatDate } from '@/lib/events-data'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const event = events.find((e) => e.slug === slug)
  if (!event) return {}
  return {
    title: `${event.title} – Jegyár-összehasonlítás | Budapest Sport Tickets`,
    description: `Hasonlítsd össze a(z) „${event.title}" esemény jegyárait ${event.partners.length} partnernél. ${event.venue}, ${formatDate(event.date)}.`,
  }
}

export default async function EventDetailPage({ params }: PageProps) {
  const { slug } = await params
  const event = events.find((e) => e.slug === slug)
  if (!event) notFound()

  const related = events.filter((e) => e.id !== event.id && e.category === event.category).slice(0, 3)
  const cheapest = event.partners.reduce((a, b) => (a.priceFrom < b.priceFrom ? a : b))

  return (
    <>
      <Navbar />
      <main>
        {/* Hero with Disclaimer */}
        <section className="pt-16 relative bg-secondary" aria-label="Esemény részletek">
          {/* Disclaimer ~20% */}
          <div className="min-h-[20vh] flex items-center">
            <DisclaimerBanner variant="hero" />
          </div>

          {/* Event Hero */}
          <div className="relative">
            <div className="absolute inset-0 h-72 overflow-hidden">
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover opacity-30"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-secondary/60 via-secondary/80 to-secondary" />
            </div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <Link
                href="/esemenyek"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm font-semibold uppercase tracking-widest mb-8 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" aria-hidden="true" /> Vissza az eseményekhez
              </Link>

              <div className="flex flex-wrap gap-3 mb-4">
                <span className="bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest px-3 py-1 rounded">
                  {event.category}
                </span>
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance mb-6">
                {event.title}
              </h1>
              <div className="flex flex-wrap gap-6 text-muted-foreground text-sm mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" aria-hidden="true" />
                  <span>{formatDate(event.date)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" aria-hidden="true" />
                  <span>{event.venue}, {event.location}</span>
                </div>
              </div>
              <p className="text-muted-foreground text-base leading-relaxed max-w-2xl">{event.description}</p>
            </div>
          </div>
        </section>

        {/* Price comparison */}
        <section className="py-16" aria-labelledby="price-compare-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Big price + disclaimer header */}
            <div className="bg-card border border-border rounded-xl p-6 sm:p-10 mb-10">
              <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-xs uppercase tracking-[0.2em] font-bold mb-2">
                    Összehasonlított ártartomány (tájékoztató)
                  </p>
                  <p className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-primary leading-none">
                    {formatPrice(event.priceFrom)}
                  </p>
                  <p className="font-heading text-2xl sm:text-3xl text-muted-foreground mt-1">
                    – {formatPrice(event.priceTo)}
                  </p>
                </div>
                <div className="bg-[var(--disclaimer)]/15 border-2 border-[var(--disclaimer)]/60 rounded-xl p-6 max-w-md w-full">
                  <div className="flex items-start gap-4">
                    <ShieldAlert className="w-8 h-8 text-[var(--disclaimer)] shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <p className="font-heading text-2xl sm:text-3xl font-bold text-[var(--disclaimer)] mb-2 leading-tight uppercase">
                        MÁSODLAGOS PIAC – Nem értékesítünk jegyeket!
                      </p>
                      <p className="text-base sm:text-lg text-foreground leading-snug font-semibold">
                        Az árak viszonteladói ajánlatok és <strong>magasabbak lehetnek a névleges jegyárnál</strong>.
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed mt-1">
                        Vásárláshoz kattintson a partner linkjére és ellenőrizze az aktuális árat közvetlenül a partner weboldalán.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h2
              id="price-compare-heading"
              className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-3"
            >
              JEGYÁRAK ÖSSZEHASONLÍTÁSA
            </h2>
            <p className="text-muted-foreground text-sm mb-8">
              {event.partners.length} partnernél hasonlítottuk össze az árakat. Az összehasonlítás tájékoztató jellegű.
            </p>

            {/* Partner cards */}
            <div className="space-y-4">
              {event.partners
                .slice()
                .sort((a, b) => a.priceFrom - b.priceFrom)
                .map((partner, idx) => {
                  const isCheapest = partner.name === cheapest.name
                  return (
                    <div
                      key={idx}
                      className={`relative bg-card border rounded-xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5 transition-colors ${isCheapest ? 'border-primary/60' : 'border-border hover:border-primary/30'}`}
                    >
                      {isCheapest && (
                        <span className="absolute -top-3 left-5 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded">
                          Legalacsonyabb ár
                        </span>
                      )}

                      {/* Partner icon */}
                      <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center shrink-0">
                        <span className="font-heading text-primary font-bold text-xl">
                          {partner.name.charAt(0)}
                        </span>
                      </div>

                      {/* Info */}
                      <div className="flex-1">
                        <p className="font-heading text-lg font-bold text-foreground">{partner.name}</p>
                        <p className="text-muted-foreground text-xs mt-0.5">{partner.note}</p>
                      </div>

                      {/* Price */}
                      <div className="text-right shrink-0">
                        <p className="font-heading text-2xl sm:text-3xl font-bold text-primary leading-none">
                          {formatPrice(partner.priceFrom)}
                        </p>
                        <p className="text-muted-foreground text-sm">– {formatPrice(partner.priceTo)}</p>
                        <p className="text-[10px] text-muted-foreground mt-1">Tájékoztató ár</p>
                      </div>

                      {/* CTA */}
                      <a
                        href={partner.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 font-bold uppercase tracking-wider text-xs rounded hover:opacity-90 transition-opacity shrink-0"
                        aria-label={`${partner.name} weboldalának megnyitása (új lapon, külső oldal)`}
                      >
                        Partner oldala
                        <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                      </a>
                    </div>
                  )
                })}
            </div>

            {/* Comparison disclaimer */}
            <div className="mt-8 bg-[var(--disclaimer)]/10 border-2 border-[var(--disclaimer)]/40 rounded-xl p-8">
              <div className="flex items-start gap-4">
                <TicketIcon className="w-8 h-8 text-[var(--disclaimer)] shrink-0 mt-1" aria-hidden="true" />
                <div className="space-y-3">
                  <p className="font-heading text-2xl sm:text-3xl font-bold text-[var(--disclaimer)] uppercase leading-tight">
                    MÁSODLAGOS PIAC – Fontos nyilatkozat az árakkal kapcsolatban
                  </p>
                  <ul className="space-y-2 list-none">
                    {[
                      'A BudapestSportTickets.com egy MÁSODLAGOS PIAC – viszonteladói jegyeket összehasonlító platform.',
                      'A feltüntetett árak viszonteladói ajánlatok, amelyek MAGASABBAK LEHETNEK A NÉVLEGES JEGYÁRNÁL.',
                      'Ez az oldal NEM értékesít jegyeket és NEM vesz részt vásárlási tranzakciókban.',
                      'Fizetési adatokat semmilyen formában nem gyűjtünk és nem tárolunk.',
                      'A jegyek elérhetőségét és aktuális árát mindig ellenőrizze közvetlenül a partner weboldalán.',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-base sm:text-lg text-foreground font-medium">
                        <span className="text-[var(--disclaimer)] font-bold mt-0.5">—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related events */}
        {related.length > 0 && (
          <section className="py-16 bg-secondary" aria-labelledby="related-heading">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between mb-8 gap-4 flex-wrap">
                <h2
                  id="related-heading"
                  className="font-heading text-3xl sm:text-4xl font-bold text-foreground"
                >
                  HASONLÓ ESEMÉNYEK
                </h2>
                <Link
                  href="/esemenyek"
                  className="inline-flex items-center gap-1.5 text-primary font-bold uppercase text-xs tracking-widest hover:gap-2.5 transition-all"
                >
                  Összes esemény <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {related.map((e) => (
                  <EventCard key={e.id} event={e} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  )
}
