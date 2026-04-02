import type { Metadata } from 'next'
import Link from 'next/link'
import { ShieldCheck, ArrowLeft } from 'lucide-react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import DisclaimerBanner from '@/components/disclaimer-banner'

export const metadata: Metadata = {
  title: 'Adatvédelmi szabályzat – Budapest Sport Tickets',
  description:
    'A BudapestSportTickets.com adatvédelmi szabályzata. Megismerheti, hogyan kezeljük az Ön adatait, milyen adatokat gyűjtünk és miért.',
}

const sections = [
  {
    title: '1. Az adatkezelő adatai',
    content: [
      'Adatkezelő neve: FISCUS NOSTRUM FUND SERVICES LIMITED',
      'Képviselő: Myrianthous Anna',
      'Székhely: Panagioti Kaspi 5A., Nicosia 1095, Ciprus',
      'E-mail: info@budapestsporttickets.com',
      'Weboldal: budapestsporttickets.com',
    ],
    type: 'list',
  },
  {
    title: '2. Az adatkezelés elvei',
    content:
      'A BudapestSportTickets.com kizárólag ár-összehasonlító szolgáltatást nyújt. Nem értékesítünk jegyeket, nem folytatunk kereskedelmi tevékenységet, és nem gyűjtünk fizetési adatokat. Adatkezelésünk során az alábbi elvek szerint járunk el: jogszerűség, tisztességes eljárás és átláthatóság; célhoz kötöttség; adattakarékosság; pontosság; korlátozott tárolhatóság; integritás és bizalmas jelleg.',
    type: 'paragraph',
  },
  {
    title: '3. Milyen adatokat gyűjtünk?',
    content: [
      'Látogatási adatok (IP-cím, böngésző típusa, megtekintett oldalak) – kizárólag analitikai célból, anonim formában.',
      'Cookie-k által rögzített munkamenet-adatok – a weboldal megfelelő működéséhez.',
      'Önkéntesen megadott e-mail-cím – kizárólag akkor, ha Ön kapcsolatba lép velünk.',
      'Fizetési adatokat, bankkártya-adatokat, személyazonosító okmányok adatait NEM gyűjtjük.',
    ],
    type: 'list',
  },
  {
    title: '4. Az adatgyűjtés célja',
    content: [
      'A weboldal technikai működésének biztosítása.',
      'A felhasználói élmény javítása és a weboldal tartalmának fejlesztése.',
      'Anonim látogatottsági statisztikák készítése.',
      'Felhasználói megkeresésekre való válaszadás.',
    ],
    type: 'list',
  },
  {
    title: '5. Adatmegőrzési idő',
    content:
      'Az analitikai célból gyűjtött anonim adatokat legfeljebb 26 hónapig tároljuk. A kapcsolatfelvételkor megadott e-mail-címeket az ügy lezárásától számított 1 évig tároljuk. Fizetési adatokat egyáltalán nem tárolunk, mivel ilyeneket nem gyűjtünk.',
    type: 'paragraph',
  },
  {
    title: '6. Harmadik felek és partnerek',
    content:
      'A weboldal partnerei (pl. Ticketmaster, StubHub, Viagogo, Jegy.hu, Eventim, Jegymester, AXS) önálló adatkezelők. A partner weboldalára kattintva az adott platform adatvédelmi szabályzata vonatkozik Önre. A BudapestSportTickets.com nem vállal felelősséget a partnerek adatkezeléséért. Az általunk linkelt partneroldalak saját, független adatvédelmi és kereskedelmi feltételekkel rendelkeznek.',
    type: 'paragraph',
  },
  {
    title: '7. Az Ön jogai',
    content: [
      'Hozzáférési jog – kérheti az Önről tárolt adatokat.',
      'Helyesbítési jog – kérheti a pontatlan adatok javítását.',
      'Törlési jog („az elfeledtetéshez való jog") – kérheti adatai törlését.',
      'Adathordozhatóság joga – kérheti adatai elektronikus formátumban való kiadását.',
      'Tiltakozáshoz való jog – tiltakozhat adatai meghatározott célú kezelése ellen.',
      'Jogorvoslathoz való jog – panaszt nyújthat be az illetékes adatvédelmi hatósághoz.',
    ],
    type: 'list',
  },
  {
    title: '8. Adatbiztonság',
    content:
      'Megfelelő technikai és szervezési intézkedéseket alkalmazunk az adatok védelme érdekében. Mivel nem gyűjtünk fizetési adatokat, a vásárlásokkal kapcsolatos adatbiztonsági kockázat kizárólag a partnereknél merülhet fel. SSL titkosítást alkalmazunk a weboldal minden oldalán.',
    type: 'paragraph',
  },
  {
    title: '9. Cookie-k (sütik)',
    content:
      'A weboldal sütiket használ. A sütikkel kapcsolatos részletes tájékoztatót a Cookie-szabályzatunkban talál. Böngészőjében bármikor letilthatja a sütik használatát, ez azonban egyes funkciók működését befolyásolhatja.',
    type: 'paragraph',
  },
  {
    title: '10. Módosítások',
    content:
      'Fenntartjuk a jogot, hogy ezt az adatvédelmi szabályzatot bármikor módosítsuk. A változásokról a weboldalon tájékoztatjuk a felhasználókat. A szabályzat utolsó frissítésének dátuma: 2026',
    type: 'paragraph',
  },
  {
    title: '11. Kapcsolat',
    content:
      'Adatvédelmi kérdéseivel és kérelmeivel forduljon hozzánk az info@budapestsporttickets.com e-mail-címen. Válaszolásra törekszünk, de azonnali ügyfélszolgálatot nem biztosítunk.',
    type: 'paragraph',
  },
]

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero with Disclaimer */}
        <section className="bg-secondary pt-nav" aria-label="Adatvédelmi szabályzat hero">
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
                <ShieldCheck className="w-6 h-6 text-primary" aria-hidden="true" />
              </div>
              <span className="inline-block text-primary text-xs font-bold uppercase tracking-[0.25em]">
                Jogi dokumentum
              </span>
            </div>
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground text-balance">
              ADATVÉDELMI SZABÁLYZAT
            </h1>
            <p className="text-muted-foreground text-lg mt-4 leading-relaxed max-w-2xl">
              Tájékoztatjuk Önt a BudapestSportTickets.com adatkezelési gyakorlatáról az GDPR és az alkalmazandó adatvédelmi jogszabályok alapján.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Important notice */}
            <div className="bg-primary/10 border border-primary/30 rounded-xl p-6 mb-12">
              <p className="font-heading text-xl font-bold text-primary mb-2">FONTOS MEGJEGYZÉS</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                A BudapestSportTickets.com NEM értékesít jegyeket, NEM gyűjt fizetési adatokat, és NEM folytat kereskedelmi tevékenységet. Ez az adatvédelmi szabályzat kizárólag az ár-összehasonlító weboldalunk működésével kapcsolatos adatkezelésre vonatkozik.
              </p>
            </div>

            {/* Sections */}
            <div className="space-y-10">
              {sections.map((section, i) => (
                <article key={i} className="border-b border-border pb-10 last:border-0">
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-5">
                    {section.title}
                  </h2>
                  {section.type === 'paragraph' ? (
                    <p className="text-muted-foreground text-base leading-relaxed">
                      {section.content as string}
                    </p>
                  ) : (
                    <ul className="space-y-2">
                      {(section.content as string[]).map((item, j) => (
                        <li key={j} className="flex items-start gap-3 text-muted-foreground text-base leading-relaxed">
                          <span className="text-primary font-bold mt-0.5 shrink-0">—</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}
            </div>

            {/* Navigation to other legal */}
            <div className="mt-14 border-t border-border pt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/sutik"
                className="flex-1 bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-colors group"
              >
                <p className="text-muted-foreground text-xs uppercase tracking-widest mb-2">Kapcsolódó dokumentum</p>
                <p className="font-heading text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  Cookie-szabályzat &rarr;
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
