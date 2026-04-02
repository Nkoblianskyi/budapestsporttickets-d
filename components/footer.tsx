import Link from 'next/link'
import { ShieldAlert } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-border mt-24" role="contentinfo">
      {/* Footer disclaimer */}
      <div className="bg-[var(--disclaimer)] text-[var(--disclaimer-foreground)] py-4 px-4">
        <div className="max-w-7xl mx-auto flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-sm leading-relaxed">
            <strong>FONTOS NYILATKOZAT:</strong> A BudapestSportTickets.com NEM értékesít jegyeket, NEM gyűjt fizetési adatokat, és NEM folytat kereskedelmi tevékenységet. Kizárólag harmadik fél forgalmazók ajánlatait jelenítjük meg összehasonlítás céljából. A feltüntetett árak tájékoztató jellegűek és eltérhetnek a partnereknél aktuálisan elérhető áraktól. Vásárlás előtt mindig ellenőrizze az árakat közvetlenül a partner oldalán. A weboldal semmilyen jegyértékesítési tevékenységet nem végez.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div>
                <Image src="/favicon.ico" alt="Logo" width={32} height={32} />
              </div>
              <span className="font-heading text-base font-bold tracking-wider">
                BUDAPEST<span className="text-primary">SPORT</span>TICKETS
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Sportesemény-jegyek árainak összehasonlítója Magyarországon és Európában.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-heading text-sm font-bold tracking-widest mb-4 text-foreground">Navigáció</h3>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Főoldal' },
                { href: '/esemenyek', label: 'Összes esemény' },
                { href: '/rolunk', label: 'Rólunk' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-heading text-sm font-bold tracking-widest mb-4 text-foreground">Jogi</h3>
            <ul className="space-y-2">
              {[
                { href: '/adatvedelmi-szabalyzat', label: 'Adatvédelmi szabályzat' },
                { href: '/sutik', label: 'Cookie-szabályzat' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-sm font-bold tracking-widest mb-4 text-foreground">Kapcsolat</h3>
            <address className="not-italic text-muted-foreground text-sm space-y-1">
              <p className="font-semibold text-foreground">FISCUS NOSTRUM FUND SERVICES LIMITED</p>
              <p>Myrianthous Anna</p>
              <p>Panagioti Kaspi 5A.</p>
              <p>Nicosia 1095, Ciprus</p>
              <a
                href="mailto:info@budapestsporttickets.com"
                className="text-primary hover:underline mt-2 inline-block"
              >
                info@budapestsporttickets.com
              </a>
            </address>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs text-center sm:text-left">
            &copy; {new Date().getFullYear()} BudapestSportTickets.com – Jegyár-összehasonlítás. Minden jog fenntartva.
          </p>
          <p className="text-muted-foreground text-xs text-center sm:text-right">
            Ez az oldal NEM értékesít jegyeket, csupán ár-összehasonlítást végez.
          </p>
        </div>
      </div>
    </footer>
  )
}
