'use client'

import { motion } from 'motion/react'
import { Mail } from 'lucide-react'
import {
  IconBrandInstagram as InstagramIcon,
  IconBrandLinkedin as LinkedInIcon,
} from '@tabler/icons-react'
import Button from '@repo/ui/components/Button'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="border-border border-t-2 px-4 py-16">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-foreground mb-4 text-4xl font-black tracking-tight md:text-5xl">
            Let&apos;s <span className="text-main">Connect</span>
          </h2>
          <p className="text-foreground/75 mx-auto mb-8 max-w-md">
            Have an idea, a question, or just want to say hi? Drop us an email.
          </p>
          <Button href="mailto:hi@aglabs.id" data-umami-event="mail-footer">
            <Mail size={16} aria-hidden="true" />
            hi@aglabs.id
          </Button>
        </motion.div>

        <div className="border-border flex flex-col items-center justify-between gap-4 border-t-2 pt-8 sm:flex-row">
          <div className="sm:min-w-46 flex items-center gap-2">
            <img src="/logo-primary.svg" alt="" width={24} height={24} />
            <span className="text-foreground text-sm font-bold">Aglabs</span>
          </div>
          <div className="sm:min-w-46 flex items-center gap-3 sm:justify-center">
            <a
              href="https://www.linkedin.com/company/aglabsid"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/50 hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedInIcon size={24} />
            </a>
            <a
              href="https://www.instagram.com/aglabs.id"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/50 hover:text-foreground transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon size={24} />
            </a>
          </div>
          <p className="text-foreground/50 sm:min-w-46 text-xs sm:text-end">
            &copy; {currentYear} Aglabs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
