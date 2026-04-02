import type { Metadata } from 'next'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import DisclaimerBanner from '@/components/disclaimer-banner'
import EventCard from '@/components/event-card'
import { events } from '@/lib/events-data'
import { ShieldAlert } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Összes Sportesemény – Budapest Sport Tickets',
  description: 'Böngészd az összes közelgő sportesemény jegyárait Magyarországon és Európában. Csak ár-összehasonlítás – nem értékesítünk jegyeket.',
}

const categories = ['Összes', ...Array.from(new Set(events.map((e) => e.category))).sort()]

export default function EventsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero with disclaimer */}
        <section className="bg-secondary pt-nav" aria-label="Események hős">
          {/* Disclaimer band - ~20% */}
          <div className="min-h-[20vh] flex items-center">
            <DisclaimerBanner variant="hero" />
          </div>

          {/* Title */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <span className="inline-block text-primary text-xs font-bold uppercase tracking-[0.25em] mb-4">
              Katalógus
            </span>
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground text-balance">
              ÖSSZES SPORTESEMÉNY
            </h1>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl leading-relaxed">
              Magyarország és Európa közelgő sporteseményeinek jegyárait hasonlítjuk össze partnereinktől. Kattints egy eseményre az árak megtekintéséhez.
            </p>
          </div>
        </section>

        {/* Events grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Mini disclaimer */}
            <div className="bg-[var(--disclaimer)]/15 border-2 border-[var(--disclaimer)]/50 rounded-lg px-5 py-4 mb-10 flex items-start gap-3">
              <ShieldAlert className="w-6 h-6 text-[var(--disclaimer)] shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-base font-semibold text-foreground leading-relaxed">
                <strong className="text-[var(--disclaimer)] font-bold">MÁSODLAGOS PIAC – EMLÉKEZTETŐ:</strong> A megjelenített árak viszonteladói ajánlatok és <strong>magasabbak lehetnek a névleges jegyárnál</strong>. Ez az oldal NEM értékesít jegyeket – kizárólag ár-összehasonlítást végzünk partnerek ajánlatai alapján. Vásárláshoz kattintson a partner oldalára.
              </p>
            </div>

            {/* Stats row */}
            <div className="flex items-center gap-6 mb-10 text-sm text-muted-foreground flex-wrap">
              <span>
                <strong className="text-foreground text-lg font-heading">{events.length}</strong> esemény az adatbázisban
              </span>
              <span className="w-px h-4 bg-border hidden sm:block" aria-hidden="true" />
              <span>
                <strong className="text-foreground text-lg font-heading">{categories.length - 1}</strong> sportág
              </span>
              <span className="w-px h-4 bg-border hidden sm:block" aria-hidden="true" />
              <span>Csak <strong className="text-foreground">jövőbeli</strong> események</span>
            </div>

            {/* Events grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {events.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>

            {/* Bottom disclaimer */}
            <div className="mt-14 border-t border-border pt-8 text-center">
              <p className="text-foreground text-sm font-semibold max-w-3xl mx-auto leading-relaxed">
                A BudapestSportTickets.com egy másodlagos jegypiac-összehasonlító platform. A feltüntetett árak viszonteladói ajánlatok és <strong>magasabbak lehetnek a névleges jegyárnál</strong>. Nem értékesítünk jegyeket, nem gyűjtünk fizetési adatokat és nem vállalunk felelősséget a partner oldalain elérhető árakért. Minden ár tájékoztató jellegű, a tényleges ár és elérhetőség a partner weboldalán ellenőrizendő.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
