'use client'

import { motion, stagger } from 'motion/react'
import { ExternalLink } from 'lucide-react'
import Card from './Card'

interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  href?: string
}

interface Props {
  projects: Project[]
}

const list = {
  hidden: {},
  visible: {
    transition: { delayChildren: stagger(0.12) },
  },
}

export default function ProjectsSection({ projects }: Props) {
  return (
    <section
      id="projects"
      className="border-border bg-main/10 border-t-2 px-4 py-24 md:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-foreground mb-4 text-4xl font-black tracking-tight md:text-5xl">
            <span className="text-main">Projects</span> Lab
          </h2>
          <p className="text-foreground/75 text-lg">
            A selection of experiments that made it out of the lab.
          </p>
        </motion.div>

        <motion.div
          variants={list}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-6 md:grid-cols-2"
        >
          {projects.map((project) => (
            <Card key={project.id}>
              <div className="flex h-full flex-col justify-between">
                <div>
                  <div className="mb-4 flex items-start justify-between">
                    <h3 className="text-foreground text-xl font-bold">
                      {project.title}
                    </h3>
                    {project.href && (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/40 hover:text-main transition-colors"
                        aria-label={`Visit ${project.title}`}
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                  <p className="text-foreground/75 mb-6 text-sm leading-relaxed">
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
              </div>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
