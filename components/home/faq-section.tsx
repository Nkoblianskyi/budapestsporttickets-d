'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const faqs = [
  {
    q: 'Lehet itt jegyeket vásárolni?',
    a: 'Nem. A BudapestSportTickets.com kizárólag ár-összehasonlító szolgáltatás. Jegyeket nem értékesítünk, nem közvetítünk és nem garantálunk. A vásárláshoz a partner weboldalára irányítunk.',
  },
  {
    q: 'Az árak pontosak és naprakészek?',
    a: 'Az árak tájékoztató jellegűek, partnereink ajánlatain alapulnak. Valós idejű pontosságot nem garantálunk – vásárlás előtt mindig ellenőrizze az aktuális árat közvetlenül a partner oldalán.',
  },
  {
    q: 'Gyűjtik-e a fizetési adataimat?',
    a: 'Soha. A BudapestSportTickets.com semmilyen fizetési adatot nem gyűjt, nem tárol és nem dolgoz fel. A vásárlás kizárólag a partnernél zajlik, az ő adatkezelési feltételeik szerint.',
  },
  {
    q: 'Miért térhetnek el az árak a partnerektől?',
    a: 'A partnerek önálló kereskedelmi döntéseket hoznak, áraikat dinamikusan változtathatják. Az általunk feltüntetett árak a legutóbbi frissítés szerinti adatokon alapulnak és nem feltétlenül tükrözik a valós időben elérhető árakat.',
  },
  {
    q: 'Mit tegyünk, ha problémám van a vásárolt jeggyel?',
    a: 'Mivel mi nem vesszük részt a jegyvásárlásban, kérjük, forduljon közvetlenül ahhoz a partnerhez, akitől a jegyet vásárolta. Jogorvoslatért kizárólag a forgalmazó felelős.',
  },
  {
    q: 'Ingyenes a szolgáltatás?',
    a: 'Igen, az összehasonlítás teljesen ingyenes. Nem számolunk fel díjat a partnerek ajánlatainak megtekintéséért.',
  },
  {
    q: 'Hogyan kerülnek fel az események az oldalra?',
    a: 'A közelgő sporteseményeket szerkesztői csapatunk gyűjti össze és frissíti rendszeresen. Kizárólag nyilvánosan elérhető partnerárakra támaszkodunk.',
  },
  {
    q: 'Hogyan léphetnek kapcsolatba velünk?',
    a: 'Az info@budapestsporttickets.com e-mail-címen elérhető a csapatunk. Válaszolásra törekszünk, de azonnali ügyfélszolgálatot nem biztosítunk.',
  },
]

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
        aria-expanded={open}
      >
        <span className="font-sans font-semibold text-foreground text-base">{q}</span>
        <ChevronDown
          className={cn('w-4 h-4 text-primary shrink-0 transition-transform', open && 'rotate-180')}
          aria-hidden="true"
        />
      </button>
      {open && (
        <p className="pb-5 text-muted-foreground text-sm leading-relaxed">{a}</p>
      )}
    </div>
  )
}

export default function FaqSection() {
  return (
    <section className="py-24 bg-secondary" aria-labelledby="faq-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-primary text-xs font-bold uppercase tracking-[0.25em] mb-4">
            Kérdések
          </span>
          <h2
            id="faq-heading"
            className="font-heading text-4xl sm:text-5xl font-bold text-foreground text-balance"
          >
            GYAKRAN ISMÉTELT KÉRDÉSEK
          </h2>
        </div>
        <div role="list">
          {faqs.map((item, i) => (
            <FaqItem key={i} q={item.q} a={item.a} />
          ))}
        </div>
      </div>
    </section>
  )
}
