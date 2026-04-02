import type { Metadata } from 'next'
import Link from 'next/link'
import { Cookie, ArrowLeft } from 'lucide-react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import DisclaimerBanner from '@/components/disclaimer-banner'

export const metadata: Metadata = {
  title: 'Cookie-szabályzat – Budapest Sport Tickets',
  description:
    'A BudapestSportTickets.com cookie (süti) szabályzata. Tudjon meg többet a weboldal által használt sütikről és azok kezeléséről.',
}

const cookieTypes = [
  {
    name: 'Feltétlenül szükséges sütik',
    required: true,
    description:
      'Ezek a sütik a weboldal alapvető működéséhez szükségesek. Nélkülük a weboldal nem tud megfelelően működni. Nem tárolnak személyazonosításra alkalmas adatokat.',
    examples: [
      { name: 'session_id', purpose: 'Munkamenet-azonosító a weboldal megfelelő működéséhez', duration: 'Munkamenet végéig' },
      { name: 'csrf_token', purpose: 'Biztonsági token a cross-site request forgery ellen', duration: 'Munkamenet végéig' },
    ],
  },
  {
    name: 'Analitikai sütik',
    required: false,
    description:
      'Ezeket a sütiket arra használjuk, hogy megértsük, hogyan használják a látogatók a weboldalunkat. Az összegyűjtött adatok anonim formájúak és kizárólag statisztikai célokat szolgálnak.',
    examples: [
      { name: '_ga', purpose: 'Google Analytics – látogatottsági mérés (anonim)', duration: '2 év' },
      { name: '_gid', purpose: 'Google Analytics – napi látogatói azonosítás (anonim)', duration: '24 óra' },
    ],
  },
  {
    name: 'Funkcionális sütik',
    required: false,
    description:
      'Ezek a sütik lehetővé teszik, hogy a weboldal megjegyezzen egyes beállításokat (pl. preferált nézet, keresési paraméterek). Nem gyűjtenek személyes adatokat.',
    examples: [
      { name: 'ui_pref', purpose: 'Felhasználói felület preferenciák tárolása', duration: '30 nap' },
    ],
  },
]

const sections = [
  {
    title: '1. Mi az a cookie (süti)?',
    content:
      'A cookie (süti) egy kis méretű szöveges fájl, amelyet a weboldal az Ön böngészőjébe helyez el, amikor meglátogatja az oldalt. A sütik lehetővé teszik a weboldal számára, hogy felismerje böngészőjét és megjegyezzen egyes beállításokat, valamint elemezze a weboldal használatát.',
  },
  {
    title: '2. Hogyan kezeljük a sütiket?',
    content:
      'A BudapestSportTickets.com sütiket kizárólag a weboldal technikai működéséhez és anonim statisztikák gyűjtéséhez használja. Fizetési adatokhoz, személyazonosításhoz vagy kereskedelmi tevékenységhez kapcsolódó sütiket NEM alkalmazunk, mivel ilyen tevékenységet sem folytatunk.',
  },
  {
    title: '3. Harmadik felek sütijei',
    content:
      'Weboldalunk analitikai sütikhez igénybe veszi a Google Analytics szolgáltatást. Ezek az adatok anonim formában kerülnek feldolgozásra, személyazonosításra nem alkalmasak. Partneroldalaink (pl. Ticketmaster, StubHub, Viagogo) saját sütiket helyezhetnek el, ha az Ön böngészőjében megnyitja azokat – ezekért mi nem vállalunk felelősséget.',
  },
  {
    title: '4. A sütik kezelése és letiltása',
    content:
      'A böngészőjében bármikor beállíthatja, hogy fogadjon-e sütiket vagy sem. Letilthatja az összes sütit, vagy csak meghatározott típusokat. Fontos: a feltétlenül szükséges sütik letiltása esetén a weboldal egyes funkciói nem működnek megfelelően. A böngészőre vonatkozó sütikezelési beállításokról a böngésző súgójában talál részletes tájékoztatást.',
  },
  {
    title: '5. Módosítások',
    content:
      'Fenntartjuk a jogot, hogy ezt a cookie-szabályzatot bármikor módosítsuk. A változásokról a weboldalon tájékoztatjuk a felhasználókat. A szabályzat utolsó frissítésének dátuma: 2026',
  },
]

export default function CookiePolicyPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero with Disclaimer */}
        <section className="pt-16 bg-secondary" aria-label="Cookie-szabályzat hero">
          <div className="min-h-[20vh] flex items-center">
            <DisclaimerBanner variant="hero" />
          </div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm font-semibold uppercase tracking-widest mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" /> Vissza a főoldalra
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Cookie className="w-6 h-6 text-primary" aria-hidden="true" />
              </div>
              <span className="inline-block text-primary text-xs font-bold uppercase tracking-[0.25em]">
                Jogi dokumentum
              </span>
            </div>
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground text-balance">
              COOKIE-SZABÁLYZAT
            </h1>
            <p className="text-muted-foreground text-lg mt-4 leading-relaxed max-w-2xl">
              Tájékoztatjuk Önt arról, hogy a BudapestSportTickets.com milyen sütiket (cookie-kat) használ, miért és hogyan kezeli azokat.
            </p>
          </div>
        </section>

        {/* Cookie types table */}
        <section className="py-16" aria-labelledby="cookie-types-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              id="cookie-types-heading"
              className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-10"
            >
              ALKALMAZOTT SÜTIK TÍPUSAI
            </h2>

            <div className="space-y-8 mb-16">
              {cookieTypes.map((type, i) => (
                <div key={i} className="bg-card border border-border rounded-xl overflow-hidden">
                  {/* Header */}
                  <div className={`px-6 py-4 flex items-center justify-between gap-4 ${type.required ? 'bg-primary/10 border-b border-primary/20' : 'bg-secondary border-b border-border'}`}>
                    <h3 className="font-heading text-lg font-bold text-foreground">{type.name}</h3>
                    <span
                      className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded shrink-0 ${
                        type.required
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-secondary border border-border text-muted-foreground'
                      }`}
                    >
                      {type.required ? 'Kötelező' : 'Opcionális'}
                    </span>
                  </div>

                  {/* Description */}
                  <div className="px-6 pt-5 pb-4">
                    <p className="text-muted-foreground text-sm leading-relaxed mb-5">{type.description}</p>

                    {/* Cookie table */}
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-border">
                            <th className="text-left py-2 pr-4 text-muted-foreground text-xs uppercase tracking-widest font-bold whitespace-nowrap">
                              Süti neve
                            </th>
                            <th className="text-left py-2 pr-4 text-muted-foreground text-xs uppercase tracking-widest font-bold">
                              Cél
                            </th>
                            <th className="text-left py-2 text-muted-foreground text-xs uppercase tracking-widest font-bold whitespace-nowrap">
                              Lejárat
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {type.examples.map((ex, j) => (
                            <tr key={j} className="border-b border-border/50 last:border-0">
                              <td className="py-3 pr-4 font-mono text-xs text-primary whitespace-nowrap">
                                {ex.name}
                              </td>
                              <td className="py-3 pr-4 text-muted-foreground text-xs leading-relaxed">
                                {ex.purpose}
                              </td>
                              <td className="py-3 text-muted-foreground text-xs whitespace-nowrap">
                                {ex.duration}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Text sections */}
            <div className="space-y-10">
              {sections.map((section, i) => (
                <article key={i} className="border-b border-border pb-10 last:border-0">
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">
                    {section.title}
                  </h2>
                  <p className="text-muted-foreground text-base leading-relaxed">{section.content}</p>
                </article>
              ))}
            </div>

            {/* Browser links */}
            <div className="mt-12 bg-card border border-border rounded-xl p-6">
              <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                SÜTIK KEZELÉSE BÖNGÉSZŐKBEN
              </h3>
              <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                Az alábbi linkeken keresztül tájékozódhat az egyes böngészők sütikezelési beállításairól:
              </p>
              <ul className="space-y-2">
                {[
                  { name: 'Google Chrome', url: 'https://support.google.com/chrome/answer/95647' },
                  { name: 'Mozilla Firefox', url: 'https://support.mozilla.org/hu/kb/sutik-engedelyezese-es-tiltasa' },
                  { name: 'Safari', url: 'https://support.apple.com/hu-hu/guide/safari/sfri11471/mac' },
                  { name: 'Microsoft Edge', url: 'https://support.microsoft.com/hu-hu/microsoft-edge/cookie-k-torl%C3%A9se-a-microsoft-edge-b%C3%B6ng%C3%A9sz%C5%91ben-63947406-40ac-c3b8-57b9-2a946a29ae09' },
                ].map((b, i) => (
                  <li key={i}>
                    <a
                      href={b.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="inline-flex items-center gap-2 text-primary text-sm hover:underline font-semibold"
                    >
                      {b.name} &rarr;
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Navigation to other legal */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/adatvedelmi-szabalyzat"
                className="flex-1 bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-colors group"
              >
                <p className="text-muted-foreground text-xs uppercase tracking-widest mb-2">Kapcsolódó dokumentum</p>
                <p className="font-heading text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  Adatvédelmi szabályzat &rarr;
                </p>
              </Link>
              <Link
                href="/rolunk"
                className="flex-1 bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-colors group"
              >
                <p className="text-muted-foreground text-xs uppercase tracking-widest mb-2">Ismerjen meg minket</p>
                <p className="font-heading text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  Rólunk &rarr;
                </p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
