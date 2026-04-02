import { ShieldAlert } from 'lucide-react'

interface DisclaimerBannerProps {
  variant?: 'hero' | 'page'
}

export default function DisclaimerBanner({ variant = 'hero' }: DisclaimerBannerProps) {
  return (
    <div
      className="w-full bg-[var(--disclaimer)] text-[var(--disclaimer-foreground)]"
      role="alert"
      aria-live="polite"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-start gap-4">
        <ShieldAlert
          className={variant === 'hero' ? 'w-8 h-8 shrink-0 mt-0.5' : 'w-6 h-6 shrink-0 mt-0.5'}
          aria-hidden="true"
        />
        <div>
          <p
            className={
              variant === 'hero'
                ? 'font-heading text-2xl sm:text-3xl font-bold leading-snug uppercase'
                : 'font-heading text-xl sm:text-2xl font-bold leading-snug uppercase'
            }
          >
            FONTOS: Ez az oldal egy MÁSODLAGOS PIAC – NEM értékesít jegyeket közvetlenül!
          </p>
          <p
            className={
              variant === 'hero'
                ? 'text-lg sm:text-xl mt-2 leading-relaxed font-semibold'
                : 'text-base sm:text-lg mt-1.5 leading-relaxed font-semibold'
            }
          >
            A BudapestSportTickets.com viszonteladói jegyeket összehasonlító platform. Az oldalon megjelenő árak viszonteladói ajánlatok, amelyek <strong>magasabbak lehetnek a névleges jegyárnál</strong>. Jegyeket nem értékesítünk, fizetési adatokat nem gyűjtünk. Vásárlás előtt mindig ellenőrizze az aktuális árat közvetlenül a partner weboldalán.
          </p>
        </div>
      </div>
    </div>
  )
}
