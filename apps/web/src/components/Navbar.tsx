'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { cn } from '@repo/ui/lib/utils'
import { Menu, X } from 'lucide-react'
import Button from '@repo/ui/components/Button'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className={cn(
        'fixed left-0 right-0 top-0 z-50 border-b-2 transition-colors',
        {
          'border-border bg-background': menuOpen || scrolled,
          'border-transparent bg-transparent': !menuOpen && !scrolled,
        },
      )}
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        <a
          href="/"
          className="text-foreground flex items-center gap-2 text-lg font-bold"
        >
          <img
            src="/logo-primary.svg"
            alt=""
            width={28}
            height={28}
            className="inline-block"
          />
          Aglabs
        </a>

        <div className="hidden items-center gap-6 sm:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-foreground/75 hover:text-foreground text-sm font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <Button
          variant="secondary"
          size="icon"
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </Button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="border-border bg-background overflow-hidden border-b-2 sm:hidden"
          >
            <div className="flex flex-col gap-2 px-4 py-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    setMenuOpen(false)
                    setTimeout(() => {
                      document
                        .querySelector(link.href)
                        ?.scrollIntoView({ behavior: 'smooth' })
                    }, 200)
                  }}
                  className="text-foreground/75 hover:text-foreground py-2 text-sm font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
