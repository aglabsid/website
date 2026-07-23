import { motion, stagger } from 'motion/react'
import { GitFork, Wrench, Zap } from 'lucide-react'
import Card from './Card'
import { useTranslations, type Locale } from '../i18n/ui'

interface Props {
  locale: Locale
}

const list = {
  hidden: {},
  visible: { transition: { delayChildren: stagger(0.12) } },
}

const pillarIcons = [
  <Wrench key="build" size={24} />,
  <GitFork key="experiment" size={24} />,
  <Zap key="ship" size={24} />,
]

export default function AboutSection({ locale }: Props) {
  const t = useTranslations(locale)

  return (
    <section
      id="about"
      className="border-border border-t-2 px-4 py-24 md:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
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

        <motion.div
          variants={list}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-6 md:grid-cols-3"
        >
          {t.about.pillars.map((pillar, i) => (
            <Card key={pillar.title}>
              <div className="border-border bg-main text-main-foreground mb-4 inline-flex size-12 items-center justify-center border-2">
                {pillarIcons[i]}
              </div>
              <h3 className="text-foreground mb-2 text-xl font-bold">
                {pillar.title}
              </h3>
              <p className="text-foreground/75 text-sm leading-relaxed">
                {pillar.description}
              </p>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
