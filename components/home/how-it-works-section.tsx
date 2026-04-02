import { Search, BarChart3, ExternalLink, ShieldCheck } from 'lucide-react'

const steps = [
  {
    icon: Search,
    title: 'Keresd meg az eseményt',
    description: 'Böngészd át a közelgő sporteseményeket Magyarországon és Európában. Szűrj sportág, helyszín vagy dátum szerint.',
  },
  {
    icon: BarChart3,
    title: 'Összehasonlítjuk az árakat',
    description: 'Automatikusan összegyűjtjük a partnereink aktuális jegyárait, hogy egyetlen helyen lásd a legolcsóbbtól a legdrágábbig.',
  },
  {
    icon: ExternalLink,
    title: 'Továbbirányítunk a partnerhez',
    description: 'Kiválasztod a számodra megfelelő ajánlatot, majd átirányítunk a partner weboldalára. Mi nem bonyolódunk bele a vásárlásba.',
  },
  {
    icon: ShieldCheck,
    title: 'Te fizetsz a partnernek',
    description: 'Fizetési adataidat kizárólag a partner kezeli. Mi semmilyen tranzakcióban, fizetési folyamatban nem veszünk részt.',
  },
]

export default function HowItWorksSection() {
  return (
    <section
      id="hogyan-mukodik"
      className="py-24 bg-secondary"
      aria-labelledby="how-it-works-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary text-xs font-bold uppercase tracking-[0.25em] mb-4">
            Átlátható működés
          </span>
          <h2
            id="how-it-works-heading"
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance"
          >
            HOGYAN MŰKÖDIK A SZOLGÁLTATÁS?
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            Egyszerű, átlátható és kényelmes – a jegyárak összehasonlítása soha nem volt ilyen egyszerű.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <div
                key={idx}
                className="relative bg-card border border-border rounded-lg p-6 hover:border-primary/40 transition-colors"
              >
                {/* Step number */}
                <span className="absolute top-4 right-4 font-heading text-5xl font-bold text-primary/10 leading-none select-none">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            )
          })}
        </div>

        {/* Rules box */}
        <div className="mt-12 bg-card border border-primary/30 rounded-lg p-6 sm:p-8">
          <h3 className="font-heading text-2xl font-bold text-primary mb-4">A SZOLGÁLTATÁS SZABÁLYAI</h3>
          <ul className="grid sm:grid-cols-2 gap-3 text-sm text-muted-foreground">
            {[
              'Nem vagyunk jegykereskedők – kizárólag ár-összehasonlítást végzünk.',
              'Nem gyűjtünk fizetési adatokat – soha, semmilyen körülmények között.',
              'Az árak tájékoztató jellegűek – a pontos ár mindig a partner oldalán ellenőrizendő.',
              'A partnerkapcsolatok nem befolyásolják a megjelenített árakat.',
              'Nem garantálunk jegyelérhetőséget – ez kizárólag a partnertől függ.',
              'A vásárlásért és a jegyért kizárólag a partner felel.',
              'Az oldal tartalmát rendszeresen frissítjük, de a valós idejű pontosság nem garantálható.',
              'Jogorvoslatért közvetlenül az érintett partnerhez forduljon.',
            ].map((rule, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-primary font-bold mt-0.5">—</span>
                <span>{rule}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
