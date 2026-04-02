import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Search } from 'lucide-react'
import { ShieldAlert } from 'lucide-react'

export default function HeroSection() {
  return (
    <section
      className="relative flex min-h-screen flex-col overflow-x-hidden supports-[height:100dvh]:min-h-dvh"
      aria-label="Főoldal hős szekció"
    >
      {/* Background image (full viewport; content sits in padded column below) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-stadium.jpg"
          alt="Telt házas stadion este"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/65" />
        {/* Bottom fade into page background */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col pt-nav supports-[height:100dvh]:min-h-dvh">
        {/* ── DISCLAIMER BAND ─────────────────────────── */}
        <div
          className="relative flex shrink-0 items-start py-4 sm:items-center sm:py-0 md:min-h-[20vh]"
          style={{ minHeight: 'max(8.5rem, 18vh)', background: 'var(--disclaimer)' }}
          role="alert"
          aria-live="polite"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-1 sm:py-4">
            <div className="flex items-start gap-3 sm:gap-4">
              <ShieldAlert
                className="shrink-0 text-[var(--disclaimer-foreground)] mt-0.5 size-7 sm:size-10"
                aria-hidden="true"
              />
              <div>
                <p className="font-heading font-bold leading-snug text-[var(--disclaimer-foreground)] text-[clamp(1rem,4.2vw,2.4rem)] uppercase sm:leading-tight">
                  FONTOS: Ez az oldal egy MÁSODLAGOS PIAC – NEM értékesít jegyeket közvetlenül!
                </p>
                <p className="font-sans font-semibold leading-snug text-[var(--disclaimer-foreground)]/95 mt-2 text-[clamp(0.8rem,3.5vw,1.2rem)] sm:mt-1.5">
                  A BudapestSportTickets.com viszonteladói jegyeket összehasonlító platform. Az árak <strong>magasabbak lehetnek a névleges jegyárnál</strong>. Jegyeket nem értékesítünk, fizetési adatokat nem gyűjtünk – vásárlás előtt ellenőrizze az árat közvetlenül a partner weboldalán.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── HERO CONTENT ───────────────────────────── */}
        <div className="relative flex min-h-0 flex-1 flex-col justify-center py-10 sm:py-12">
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">

            {/* Tag */}
            <span className="inline-flex items-center gap-1.5 bg-primary/15 border border-primary/35 text-primary font-bold uppercase tracking-[0.18em] px-3 py-1 rounded-sm text-xs mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" aria-hidden="true" />
              Magyarország &amp; Európa
            </span>

            {/* H1 — intentionally SMALLER than disclaimer */}
            <h1 className="font-heading font-bold text-foreground leading-none text-balance text-[clamp(2rem,5.5vw,4.2rem)] mb-4">
              HASONLÍTSD ÖSSZE A SPORTJEGYEK ÁRAIT
            </h1>

            <p className="font-sans text-muted-foreground leading-relaxed mb-8 max-w-2xl text-[clamp(0.9rem,1.4vw,1.1rem)]">
              Egy helyen látod az összes partner legjobb ajánlatát — nem adunk el jegyeket, csak megmutatjuk, hol a legjobb ár.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3">
              <Link
                href="/esemenyek"
                className="group inline-flex items-center gap-2.5 bg-primary text-primary-foreground font-heading font-bold uppercase tracking-widest text-sm px-7 py-3.5 rounded-sm hover:bg-primary/85 active:scale-95 transition-all duration-150"
              >
                Összes esemény
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
              <Link
                href="#hogyan-mukodik"
                className="group inline-flex items-center gap-2.5 border-2 border-foreground/25 text-foreground font-heading font-bold uppercase tracking-widest text-sm px-7 py-3.5 rounded-sm hover:border-primary hover:text-primary active:scale-95 transition-all duration-150"
              >
                <Search className="w-4 h-4" aria-hidden="true" />
                Hogyan működik?
              </Link>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-x-8 gap-y-2 mt-10">
              {[
                { value: '200+', label: 'Esemény' },
                { value: '7', label: 'Partner' },
                { value: '12', label: 'Ország' },
              ].map((stat) => (
                <div key={stat.label} className="flex items-baseline gap-2">
                  <span className="font-heading font-bold text-primary text-[clamp(1.5rem,2.5vw,2rem)]">
                    {stat.value}
                  </span>
                  <span className="font-sans text-muted-foreground text-sm uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}
