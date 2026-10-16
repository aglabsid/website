'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { cn } from '@repo/ui/lib/utils'
import { Menu, X } from 'lucide-react'
import Button from '@repo/ui/components/Button'
import { useTranslations, localePath, locales, type Locale } from '../i18n/ui'

interface Props {
  locale: Locale
}

export default function Navbar({ locale }: Props) {
  const [menuOpen, setMenuOpen] = useState(false)
  const t = useTranslations(locale)

  const links = [
    { no: '01', label: t.nav.about, href: '#about' },
    { no: '02', label: t.nav.projects, href: '#projects' },
    { no: '03', label: t.nav.contact, href: '#contact' },
  ]

  // Keys 1/2/3 jump to the matching nav section.
  useEffect(() => {
    const sections = ['#about', '#projects', '#contact']
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return
      const el = e.target as HTMLElement | null
      if (el?.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(el?.tagName ?? ''))
        return
      const i = Number(e.key) - 1
      const href = sections[i]
      if (!href) return
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const localeSwitcher = (
    <div className="flex items-center gap-1.5 text-sm font-medium">
      {locales.map((l, i) => (
        <span key={l} className="flex items-center gap-1.5">
          {i > 0 && <span className="text-foreground/30">/</span>}
          <a
            href={localePath(l)}
            className={cn('transition-colors', {
              'text-foreground font-bold': l === locale,
              'text-foreground/50 hover:text-foreground': l !== locale,
            })}
            aria-current={l === locale ? 'true' : undefined}
          >
            {l.toUpperCase()}
          </a>
        </span>
      ))}
    </div>
  )

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="border-border bg-background/90 fixed left-0 right-0 top-0 z-50 border-b-2 backdrop-blur"
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        <a
          href={localePath(locale)}
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
          <span className="text-foreground/40 hidden text-xs font-bold uppercase tracking-[0.2em] sm:inline">
            / Lab
          </span>
        </a>

        <div className="hidden items-center gap-6 sm:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-foreground/75 hover:text-foreground group flex items-center gap-1.5 text-sm font-medium transition-colors"
            >
              <span className="text-foreground/30 group-hover:text-main text-xs font-bold tabular-nums transition-colors">
                {link.no}
              </span>
              {link.label}
            </a>
          ))}
          {localeSwitcher}
        </div>

        <div className="flex items-center gap-4 sm:hidden">
          {localeSwitcher}
          <Button
            variant="secondary"
            size="icon"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={t.nav.toggleMenu}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </Button>
        </div>
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
            <div className="flex flex-col px-4 py-2">
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
                  className="text-foreground/75 hover:text-foreground border-border flex items-center gap-3 border-b-2 py-3 text-sm font-medium transition-colors last:border-b-0"
                >
                  <span className="text-foreground/30 text-xs font-bold tabular-nums">
                    {link.no}
                  </span>
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
