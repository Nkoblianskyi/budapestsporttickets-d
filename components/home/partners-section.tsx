const partners = [
  { name: 'Jegy.hu', description: 'Magyar jegyértékesítő platform – jegy.hu', region: 'Magyarország' },
  { name: 'Eventim', description: 'Nemzetközi és hazai eseményjegyek – eventim.com', region: 'Európa' },
  { name: 'Jegymester', description: 'Magyar jegyiroda – jegymester.hu', region: 'Magyarország' },
]

export default function PartnersSection() {
  return (
    <section className="py-24" aria-labelledby="partners-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-primary text-xs font-bold uppercase tracking-[0.25em] mb-4">
            Partnerek
          </span>
          <h2
            id="partners-heading"
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance"
          >
            ÖSSZE&shy;HASONLÍTOTT PARTNEREK
          </h2>
          <p className="text-muted-foreground text-base mt-4 max-w-xl mx-auto leading-relaxed">
            Ezektől a forgalmazóktól gyűjtjük az árakat. A listán szereplő partnerek önálló kereskedelmi tevékenységet folytatnak, mi csak az ajánlataikat jelenítjük meg.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {partners.map((p, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-lg p-5 text-center hover:border-primary/40 transition-colors group"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                <span className="font-heading text-primary font-bold text-lg leading-none">
                  {p.name.charAt(0)}
                </span>
              </div>
              <p className="font-heading text-sm font-bold text-foreground mb-1">{p.name}</p>
              <p className="text-muted-foreground text-[11px] leading-snug">{p.description}</p>
              <span className="inline-block mt-2 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded">
                {p.region}
              </span>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-xs mt-8 max-w-2xl mx-auto">
          A fenti partnereket NEM képviseljük. Nem vagyunk felelősek az általuk nyújtott szolgáltatásokért. Az árösszehasonlítás tájékoztató jellegű.
        </p>
      </div>
    </section>
  )
}
