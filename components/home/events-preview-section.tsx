import Link from 'next/link'
import { ArrowRight, ShieldAlert } from 'lucide-react'
import { events } from '@/lib/events-data'
import EventCard from '@/components/event-card'

export default function EventsPreviewSection() {
  const preview = events.slice(0, 6)

  return (
    <section className="py-24" aria-labelledby="events-preview-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Disclaimer strip above cards */}
        <div className="bg-[var(--disclaimer)]/15 border-2 border-[var(--disclaimer)]/50 rounded-lg px-5 py-4 mb-10 flex items-start gap-3">
          <ShieldAlert className="w-6 h-6 text-[var(--disclaimer)] shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-base font-semibold text-foreground leading-relaxed">
            <strong className="text-[var(--disclaimer)] font-bold">MÁSODLAGOS PIAC – FIGYELEM:</strong> Az alábbi árak viszonteladói ajánlatok, amelyek <strong>magasabbak lehetnek a névleges jegyárnál</strong>. Ez az oldal NEM értékesít jegyeket – kizárólag ár-összehasonlítást végzünk. Vásárlás a partner weboldalán történik.
          </p>
        </div>

        {/* Header */}
        <div className="flex items-end justify-between mb-10 gap-4 flex-wrap">
          <div>
            <span className="inline-block text-primary text-xs font-bold uppercase tracking-[0.25em] mb-3">
              Közelgő események
            </span>
            <h2
              id="events-preview-heading"
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance"
            >
              KIEMELT SPORTESEMÉNYE<wbr />K
            </h2>
          </div>
          <Link
            href="/esemenyek"
            className="inline-flex items-center gap-2 text-primary font-bold uppercase text-sm tracking-widest hover:gap-3 transition-all whitespace-nowrap"
          >
            Összes esemény <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {preview.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {/* Bottom disclaimer */}
        <div className="mt-10 text-center">
          <p className="text-foreground text-sm font-semibold max-w-2xl mx-auto">
            * Ez az oldal egy másodlagos jegypiac-összehasonlító platform. A feltüntetett árak viszonteladói ajánlatok és <strong>magasabbak lehetnek a névleges jegyárnál</strong>. A BudapestSportTickets.com nem értékesít jegyeket, nem végez kereskedelmi tevékenységet és nem gyűjt fizetési adatokat.
          </p>
        </div>
      </div>
    </section>
  )
}
