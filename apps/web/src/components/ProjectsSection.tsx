'use client'

import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@repo/ui/lib/utils'
import { useTranslations, type Locale } from '../i18n/ui'

interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  href?: string
}

interface Props {
  projects: Project[]
  locale: Locale
}

export default function ProjectsSection({ projects, locale }: Props) {
  const t = useTranslations(locale)

  return (
    <section
      id="projects"
      className="border-border bg-main/5 border-t-2 px-4 py-24 md:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p className="text-foreground/50 mb-4 text-xs font-bold uppercase tracking-[0.2em]">
              02 — {t.nav.projects}
            </p>
            <h2 className="text-foreground text-4xl font-black tracking-tight md:text-5xl">
              {t.projects.headingPre}
              <span className="text-main">{t.projects.headingAccent}</span>
              {t.projects.headingPost}
            </h2>
          </div>
          <p className="text-foreground/75 max-w-sm text-lg sm:text-right">
            {t.projects.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="border-border bg-border grid gap-[2px] border-2 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, i) => {
            const cellBase =
              'bg-secondary-background flex h-full flex-col justify-between gap-6 p-6 transition-colors'
            const inner = (
              <>
                <div>
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <span className="text-foreground/40 text-xs font-bold tabular-nums">
                      P-{String(i + 1).padStart(2, '0')}
                    </span>
                    {project.href && (
                      <ArrowUpRight
                        size={18}
                        aria-hidden="true"
                        className="text-foreground/40 group-hover:text-main shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    )}
                  </div>
                  <h3 className="text-foreground group-hover:text-main mb-3 text-xl font-bold transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-foreground/75 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border-border bg-background text-foreground/70 border px-2.5 py-1 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </>
            )

            return project.href ? (
              <a
                key={project.id}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${t.projects.visit} ${project.title}`}
                className={cn(
                  'hover:bg-background group focus-visible:ring-main focus-visible:ring-2 focus-visible:ring-inset focus-visible:outline-none',
                  cellBase,
                )}
              >
                {inner}
              </a>
            ) : (
              <div key={project.id} className={cn('group', cellBase)}>
                {inner}
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
