import { motion, stagger } from 'motion/react'
import { GitFork, Wrench, Zap } from 'lucide-react'
import Card from './Card'

const list = {
  hidden: {},
  visible: { transition: { delayChildren: stagger(0.12) } },
}

const pillars = [
  {
    icon: <Wrench size={24} />,
    title: 'Build',
    description:
      'We craft tools, apps, and systems from scratch. Every project starts as a raw idea that gets shaped into working software.',
  },
  {
    icon: <GitFork size={24} />,
    title: 'Experiment',
    description:
      'We explore unconventional approaches, test new tech stacks, and push boundaries. Not everything ships — and that is the point.',
  },
  {
    icon: <Zap size={24} />,
    title: 'Ship',
    description:
      'When an experiment proves itself, we ship it. Real users, real feedback, real iteration. From lab to production.',
  },
]

export default function AboutSection() {
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
            What is <span className="text-main">Aglabs</span>?
          </h2>
          <p className="text-foreground/75 text-lg">
            Aglabs is an independent software lab. We experiment with ideas,
            build tools for ourselves and others, and ship what works. Think of
            it as a playground where code meets curiosity.
          </p>
        </motion.div>

        <motion.div
          variants={list}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-6 md:grid-cols-3"
        >
          {pillars.map((pillar) => (
            <Card key={pillar.title}>
              <div className="border-border bg-main text-main-foreground mb-4 inline-flex h-12 w-12 items-center justify-center border-2">
                {pillar.icon}
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
