import { motion, stagger, useMotionValue, useSpring } from 'motion/react'
import { useRef } from 'react'
import { ArrowDown, Mail } from 'lucide-react'
import { cn } from '@repo/ui/lib/utils'
import Button from '@repo/ui/components/Button'

const container = {
  hidden: {},
  visible: {
    transition: { delayChildren: stagger(0.06) },
  },
}

const wordVariant = {
  hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
}

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)

  const rawX = useMotionValue(-9999)
  const rawY = useMotionValue(-9999)
  const cursorX = useSpring(rawX, { stiffness: 80, damping: 20, mass: 0.5 })
  const cursorY = useSpring(rawY, { stiffness: 80, damping: 20, mass: 0.5 })

  const rawOpacity = useMotionValue(0.4)
  const blobOpacity = useSpring(rawOpacity, { stiffness: 120, damping: 20 })

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const rect = sectionRef.current?.getBoundingClientRect()
    if (!rect) return
    rawX.set(e.clientX - rect.left - 160)
    rawY.set(e.clientY - rect.top - 160)
  }

  function handleMouseDown() {
    rawOpacity.set(0.6)
  }

  function handleMouseUp() {
    rawOpacity.set(0.4)
  }

  const title = 'Aglabs'
  const subtitle = ['Software', 'Lab', '&', 'Experiment']
  const tagline =
    'Where ideas become experiments, and experiments become software.'

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden px-4 py-16"
    >
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(to right, color-mix(in oklch, var(--border) 5%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklch, var(--border) 5%, transparent) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
        <div className="bg-main absolute left-1/4 top-1/4 size-96 opacity-20 blur-[120px]" />
        <div className="bg-main absolute bottom-1/4 right-1/4 size-64 opacity-20 blur-[100px]" />
        <motion.div
          className="bg-main pointer-events-none absolute size-80 rounded-full blur-[80px]"
          style={{ x: cursorX, y: cursorY, opacity: blobOpacity }}
        />
      </div>

      <div className="mx-auto w-full max-w-4xl text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="pointer-events-none mb-8 inline-block select-none"
        >
          <img
            src="/logo-primary.svg"
            alt="Aglabs"
            width={96}
            height={96}
            className="mx-auto size-24 md:size-32 lg:size-40"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-foreground mb-4 text-7xl font-black tracking-tight md:text-8xl"
        >
          {title}
        </motion.h1>

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="text-foreground mb-8 flex items-center justify-center gap-3 text-3xl font-bold md:text-4xl"
        >
          {subtitle.map((word, i) => (
            <motion.span
              key={i}
              variants={wordVariant}
              className={cn({
                'text-main': word === '&',
                'text-foreground/75': word !== '&',
              })}
            >
              {word}
            </motion.span>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-foreground/50 mx-auto mb-12 max-w-xl text-lg"
        >
          {tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button href="#projects">
            View Projects
            <ArrowDown size={16} aria-hidden="true" />
          </Button>
          <Button
            href="mailto:hi@aglabs.id"
            variant="secondary"
            data-umami-event="mail-hero"
          >
            <Mail size={16} aria-hidden="true" />
            Get In Touch
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 sm:bottom-16"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="text-main/50 inline-block"
        >
          <ArrowDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  )
}
