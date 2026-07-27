import { motion, stagger } from 'motion/react'
import { GitFork, Wrench, Zap } from 'lucide-react'
import { useTranslations, type Locale } from '../i18n/ui'

interface Props {
  locale: Locale
}

const list = {
  hidden: {},
  visible: { transition: { delayChildren: stagger(0.1) } },
}

const rowVariant = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
}

const pillarIcons = [
  <Wrench key="build" size={22} />,
  <GitFork key="experiment" size={22} />,
  <Zap key="ship" size={22} />,
]

export default function AboutSection({ locale }: Props) {
  const t = useTranslations(locale)

  return (
    <section id="about" className="border-border border-t-2 px-4 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <p className="text-foreground/50 mb-4 text-xs font-bold uppercase tracking-[0.2em]">
            01 — {t.nav.about}
          </p>
          <h2 className="text-foreground mb-4 text-4xl font-black tracking-tight md:text-5xl">
            {t.about.headingPre}
            <span className="text-main">{t.about.headingAccent}</span>
            {t.about.headingPost}
          </h2>
          <p className="text-foreground/75 mb-4 text-lg">{t.about.intro}</p>
          <p className="text-foreground/75 text-lg">
            {t.about.founderPre}
            <a
              href="https://hendraaagil.dev/about/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-main font-semibold underline underline-offset-4 transition-colors hover:no-underline"
              data-umami-event="hendraaagil-about"
            >
              {t.about.founderLink}
            </a>
            {t.about.founderPost}
          </p>
        </motion.div>

        <motion.ol
          variants={list}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="border-border border-t-2"
        >
          {t.about.pillars.map((pillar, i) => (
            <motion.li
              key={pillar.title}
              variants={rowVariant}
              className="border-border grid gap-x-6 gap-y-3 border-b-2 py-8 md:grid-cols-[auto_1fr]"
            >
              <div className="flex items-center gap-4">
                <span className="text-main text-2xl font-black tabular-nums md:w-16">
                  0{i + 1}
                </span>
                <div className="border-border bg-main text-main-foreground flex size-11 shrink-0 items-center justify-center border-2 md:hidden">
                  {pillarIcons[i]}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-foreground text-2xl font-bold">
                    {pillar.title}
                  </h3>
                  <div className="border-border bg-main text-main-foreground hidden size-11 shrink-0 items-center justify-center border-2 md:flex">
                    {pillarIcons[i]}
                  </div>
                </div>
                <p className="text-foreground/75 max-w-2xl leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  )
}
