'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X, TicketIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

const navLinks = [
  { href: '/', label: 'Főoldal' },
  { href: '/esemenyek', label: 'Események' },
  { href: '/rolunk', label: 'Rólunk' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border pt-[env(safe-area-inset-top,0px)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div>
              <Image src="/favicon.ico" alt="Logo" width={32} height={32} />
            </div>
            <span className="font-heading text-xl font-bold tracking-wider text-foreground group-hover:text-primary transition-colors">
              BUDAPEST<span className="text-primary">SPORT</span>TICKETS
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Főnavigáció">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'font-sans text-sm font-600 uppercase tracking-widest transition-colors',
                  pathname === link.href
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <Link
            href="/esemenyek"
            className="hidden md:inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 text-sm font-bold uppercase tracking-widest rounded transition-opacity hover:opacity-90"
          >
            Összes esemény
          </Link>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Menü bezárása' : 'Menü megnyitása'}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <div className="md:hidden bg-secondary border-t border-border px-4 pb-4">
          <nav className="flex flex-col gap-3 pt-4" aria-label="Mobil navigáció">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'font-sans text-sm font-600 uppercase tracking-widest py-2 transition-colors',
                  pathname === link.href
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                )}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/esemenyek"
              className="mt-2 inline-flex items-center justify-center bg-primary text-primary-foreground px-4 py-2 text-sm font-bold uppercase tracking-widest rounded"
              onClick={() => setMenuOpen(false)}
            >
              Összes esemény
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
