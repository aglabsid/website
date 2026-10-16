import { ArrowDown, ArrowUpRight, Mail } from 'lucide-react'
import { IconBrandWhatsapp as WhatsAppIcon } from '@tabler/icons-react'
import { cn } from '@repo/ui/lib/utils'
import Button from '@repo/ui/components/Button'
import { useTranslations, type Locale } from '../i18n/ui'

interface Props {
  locale: Locale
}

// CSS entrance: runs on first paint, no JS/hydration wait.
const enter =
  'animate-in fade-in slide-in-from-bottom-4 fill-mode-both duration-500 ease-out motion-reduce:animate-none'

export default function HeroSection({ locale }: Props) {
  const t = useTranslations(locale)

  const subtitle = ['Software', 'Lab', '&', 'Experiment']

  const index = [
    { no: '01', label: t.nav.about, href: '#about' },
    { no: '02', label: t.nav.projects, href: '#projects' },
    { no: '03', label: t.nav.contact, href: '#contact' },
  ]

  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-28 md:pb-28 md:pt-36">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            'linear-gradient(to right, color-mix(in oklch, var(--border) 6%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklch, var(--border) 6%, transparent) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
          maskImage:
            'radial-gradient(120% 90% at 50% 0%, black 40%, transparent 100%)',
        }}
      />

      <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-12 lg:gap-8">
        {/* Statement */}
        <div className="lg:col-span-7">
          <p
            className={cn(
              enter,
              'text-foreground/50 mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em]',
            )}
          >
            <span className="bg-main inline-block size-2.5" />
            Independent Software Lab
          </p>

          <h1
            className={cn(
              enter,
              'text-foreground text-7xl font-black leading-[0.9] tracking-tight md:text-8xl',
            )}
            style={{ overflowWrap: 'anywhere', animationDelay: '0.1s' }}
          >
            Aglabs
          </h1>

          <div className="text-foreground/80 mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-1 text-2xl font-bold md:text-3xl">
            {subtitle.map((word, i) => (
              <span
                key={i}
                className={cn(enter, { 'text-main': word === '&' })}
                style={{ animationDelay: `${0.2 + i * 0.06}s` }}
              >
                {word}
              </span>
            ))}
          </div>

          <p
            className={cn(enter, 'text-foreground/60 mt-6 max-w-md text-lg')}
            style={{ animationDelay: '0.4s' }}
          >
            {t.hero.tagline}
          </p>

          <div
            className={cn(
              enter,
              'mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap',
            )}
            style={{ animationDelay: '0.55s' }}
          >
            <Button href="mailto:hi@aglabs.id" data-umami-event="mail-hero">
              <Mail size={16} aria-hidden="true" />
              {t.hero.getInTouch}
            </Button>
            <Button
              href="https://wa.me/628159997830"
              target="_blank"
              rel="noopener noreferrer"
              data-umami-event="whatsapp-hero"
            >
              <WhatsAppIcon size={16} aria-hidden="true" />
              {t.hero.whatsapp}
            </Button>
            <Button href="#projects" variant="secondary">
              {t.hero.viewProjects}
              <ArrowDown size={16} aria-hidden="true" />
            </Button>
          </div>
        </div>

        {/* Lab index panel */}
        <aside
          className={cn(
            enter,
            'border-border bg-secondary-background shadow-shadow self-start border-2 lg:col-span-5',
          )}
          style={{ animationDelay: '0.3s' }}
        >
          <div className="border-border text-foreground/50 flex items-center justify-between border-b-2 px-5 py-3 text-xs font-bold uppercase tracking-[0.2em]">
            <span>Index</span>
            <span className="tabular-nums">03</span>
          </div>
          <ul>
            {index.map((row) => (
              <li
                key={row.href}
                className="border-border border-b-2 last:border-b-0"
              >
                <a
                  href={row.href}
                  className="hover:bg-main/10 group flex items-center gap-4 px-5 py-5 transition-colors focus-visible:ring-main focus-visible:ring-2 focus-visible:ring-inset focus-visible:outline-none"
                >
                  <span className="text-foreground/40 group-hover:text-main text-sm font-bold tabular-nums transition-colors">
                    {row.no}
                  </span>
                  <span className="text-foreground text-lg font-bold">
                    {row.label}
                  </span>
                  <ArrowUpRight
                    size={18}
                    aria-hidden="true"
                    className="text-foreground/40 group-hover:text-main ml-auto transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </li>
            ))}
          </ul>
          <div className="border-border text-foreground/50 border-t-2 px-5 py-3 text-xs font-medium">
            Est. — independent · 5+ yrs
          </div>
        </aside>
      </div>
    </section>
  )
}
