export default function AboutSection() {
  return (
    <section className="py-24 bg-secondary" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <span className="inline-block text-primary text-xs font-bold uppercase tracking-[0.25em] mb-4">
              Rólunk
            </span>
            <h2
              id="about-heading"
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance mb-6"
            >
              KIK VAGYUNK MI?
            </h2>
            <div className="space-y-4 text-muted-foreground text-base leading-relaxed">
              <p>
                A BudapestSportTickets.com egy független ár-összehasonlító platform, amelyet azért hoztunk létre, hogy a sportszerető közönség egyszerűen és átláthatóan megtalálja a számára legjobb jegyajánlatot – anélkül, hogy több oldalon kelljen keresgélnie.
              </p>
              <p>
                Nem vagyunk jegynyelv, nem vagyunk kereskedők. Nem gyűjtünk fizetési adatokat, nem közvetítünk vásárlást és nem garantálunk jegyelérhetőséget. Csupán összegyűjtjük és megjelenítjük a megbízható partnerek aktuális ajánlatait.
              </p>
              <p>
                Célunk, hogy a Magyar és Európai sporteseményekre készülő szurkolók egy helyen lássák az árakat, és megalapozott döntést hozhassanak.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { number: '18+', label: 'Esemény\naz adatbázisban' },
              { number: '7', label: 'Partner\nforgalmazó' },
              { number: '100%', label: 'Független\nösszehasonlítás' },
              { number: '0 Ft', label: 'Szolgáltatás\ndíja' },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary/40 transition-colors"
              >
                <p className="font-heading text-4xl sm:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </p>
                <p className="text-muted-foreground text-sm leading-snug whitespace-pre-line">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
