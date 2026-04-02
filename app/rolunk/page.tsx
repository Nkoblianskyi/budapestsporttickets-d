import type { Metadata } from 'next'
import Link from 'next/link'
import { ShieldCheck, BarChart3, Eye, Scale, Building2, Mail, MapPin } from 'lucide-react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import DisclaimerBanner from '@/components/disclaimer-banner'

export const metadata: Metadata = {
  title: 'Rólunk – Budapest Sport Tickets',
  description: 'Ismerd meg a Budapest Sport Tickets csapatát és misszióját. Független sportjegy ár-összehasonlító platform Magyarországon és Európában.',
}

const values = [
  {
    icon: Eye,
    title: 'Átláthatóság',
    description: 'Pontosan megmutatjuk, mit csinálunk és mit nem. Nem értékesítünk jegyeket, nem gyűjtünk fizetési adatokat – csak összehasonlítunk.',
  },
  {
    icon: ShieldCheck,
    title: 'Megbízhatóság',
    description: 'Partnereink megbízható, ismert jegykereskedők. Az általunk megjelenített ajánlatok valós, elérhető platformoktól származnak.',
  },
  {
    icon: BarChart3,
    title: 'Egyszerűség',
    description: 'Egy kattintással áttekinthető árak – nem kell több oldalon böngészni. Spórolj időt és pénzt a sportélmény előtt.',
  },
  {
    icon: Scale,
    title: 'Pártatlanság',
    description: 'Az árak sorrendezése kizárólag az összeg alapján történik. Partnerkapcsolataink nem befolyásolják a megjelenítési sorrendet.',
  },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero with Disclaimer */}
        <section className="pt-16 bg-secondary" aria-label="Rólunk hero">
          <div className="min-h-[20vh] flex items-center">
            <DisclaimerBanner variant="hero" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <span className="inline-block text-primary text-xs font-bold uppercase tracking-[0.25em] mb-4">
              Rólunk
            </span>
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground text-balance">
              A BUDAPESTSPORTTICKETS MISSZIÓJA
            </h1>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl leading-relaxed">
              Független, pártatlan és átlátható jegyár-összehasonlító platform – azért, hogy a sportszerető közönség mindig a legjobb áron juthasson jegyhez.
            </p>
          </div>
        </section>

        {/* Mission text */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              <div className="space-y-6 text-muted-foreground text-base leading-relaxed">
                <p>
                  A BudapestSportTickets.com egy független digitális platform, amelyet azért hoztunk létre, hogy a sportszerető közönség egyszerűen, átláthatóan és gyorsan megtalálja a legjobb jegyárakat – anélkül, hogy több oldalon kellene böngészni.
                </p>
                <p>
                  Nem vagyunk jegykereskedők. Nem vásárolunk, nem adunk el és nem közvetítünk jegyeket. Kizárólag partnereinktől összegyűjtött áradatokat jelenítjük meg összehasonlítás céljából, majd a felhasználót a kiválasztott partner weboldalára irányítjuk.
                </p>
                <p>
                  Missiónk egyszerű: segíteni a szurkolóknak, hogy megalapozott döntést hozhassanak vásárlás előtt, és ne fizessenek feleslegesen sokat azért az élményért, amit a sport nyújtani tud.
                </p>
                <p>
                  Miért ez a szolgáltatás? Mert a jegypiacot a sokféle forgalmazó, az eltérő árak és a nehéz összehasonlíthatóság jellemzi. Mi ezt egyszerűsítjük le – egy helyen, tisztán, átláthatóan.
                </p>
              </div>

              <div className="space-y-5">
                {values.map((v, i) => {
                  const Icon = v.icon
                  return (
                    <div key={i} className="flex gap-5 bg-card border border-border rounded-lg p-5 hover:border-primary/30 transition-colors">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-primary" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-heading text-base font-bold text-foreground mb-1">{v.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{v.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* What we are NOT */}
        <section className="py-20 bg-secondary" aria-labelledby="not-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              id="not-heading"
              className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance mb-10"
            >
              MIT NEM CSINÁLUNK?
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { title: 'Nem értékesítünk jegyeket', desc: 'Semmilyen jegyvásárlási tranzakcióban nem veszünk részt. Kereskedelmi tevékenységet nem folytatunk.' },
                { title: 'Nem gyűjtünk fizetési adatokat', desc: 'Bankkártya-adatokat, bankszámlaadatokat vagy bármilyen fizetési információt nem kérünk és nem tárolunk.' },
                { title: 'Nem szavatolunk jegyelérhetőséget', desc: 'Nem tudjuk garantálni, hogy az összehasonlított jegyek elérhetők maradnak a partner oldalán.' },
                { title: 'Nem vállalunk felelősséget az árakért', desc: 'A feltüntetett árak tájékoztató jellegűek. A tényleges ár a partner oldalán ellenőrizendő.' },
                { title: 'Nem képviseljük a partnereket', desc: 'A megjelenített forgalmazóktól függetlenül működünk. Ajánlataikat csak összehasonlítjuk, nem hirdetjük.' },
                { title: 'Nem végzünk ügyfélszolgálatot a vásárláshoz', desc: 'Jegyvásárlással kapcsolatos panaszok, reklamációk esetén a forgalmazóhoz kell fordulni.' },
              ].map((item, i) => (
                <div key={i} className="bg-card border border-border rounded-lg p-5 hover:border-primary/30 transition-colors">
                  <div className="w-2 h-2 bg-primary rounded-full mb-3" aria-hidden="true" />
                  <h3 className="font-heading text-sm font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company details */}
        <section className="py-20" aria-labelledby="company-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              id="company-heading"
              className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-10"
            >
              CÉGADATOK
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-card border border-border rounded-xl p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Building2 className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-foreground">FISCUS NOSTRUM FUND SERVICES LIMITED</h3>
                    <p className="text-muted-foreground text-sm mt-1">Üzemeltető cég</p>
                  </div>
                </div>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p>Myrianthous Anna</p>
                      <p>Panagioti Kaspi 5A.</p>
                      <p>Nicosia 1095, Ciprus</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
                    <a
                      href="mailto:info@budapestsporttickets.com"
                      className="text-primary hover:underline"
                    >
                      info@budapestsporttickets.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-primary/30 rounded-xl p-8">
                <h3 className="font-heading text-xl font-bold text-primary mb-4">JOGI NYILATKOZAT</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  A BudapestSportTickets.com weboldalon megjelenő tartalmak kizárólag tájékoztató jellegűek. Az oldal üzemeltetője semmilyen jegyvásárlási, -értékesítési vagy -közvetítői tevékenységet nem végez. A partner oldalain megjelenő árak, jegyek elérhetősége és egyéb feltételek az adott forgalmazó felelőssége. Az összehasonlítási célokból megjelenített árak eltérhetnek a valóságostól.
                </p>
                <div className="flex gap-4 mt-6">
                  <Link href="/adatvedelmi-szabalyzat" className="text-primary text-xs font-bold uppercase tracking-widest hover:underline">
                    Adatvédelmi szabályzat
                  </Link>
                  <Link href="/sutik" className="text-primary text-xs font-bold uppercase tracking-widest hover:underline">
                    Cookie-szabályzat
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
