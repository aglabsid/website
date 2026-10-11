'use client'

import { motion } from 'motion/react'
import { Mail } from 'lucide-react'
import {
  IconBrandInstagram as InstagramIcon,
  IconBrandLinkedin as LinkedInIcon,
  IconBrandWhatsapp as WhatsAppIcon,
} from '@tabler/icons-react'
import Button from '@repo/ui/components/Button'
import { useTranslations, type Locale } from '../i18n/ui'

interface Props {
  locale: Locale
}

export default function Footer({ locale }: Props) {
  const t = useTranslations(locale)
  const currentYear = new Date().getFullYear()

  return (
    <footer
      id="contact"
      className="border-border border-t-2 px-4 py-20 md:py-24"
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end"
        >
          <div className="max-w-xl">
            <p className="text-foreground/50 mb-4 text-xs font-bold uppercase tracking-[0.2em]">
              03 — {t.nav.contact}
            </p>
            <h2 className="text-foreground mb-4 text-4xl font-black tracking-tight md:text-5xl">
              {t.footer.headingPre}
              <span className="text-main">{t.footer.headingAccent}</span>
              {t.footer.headingPost}
            </h2>
            <p className="text-foreground/75 text-lg">{t.footer.copy}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
            <Button href="mailto:hi@aglabs.id" data-umami-event="mail-footer">
              <Mail size={16} aria-hidden="true" />
              hi@aglabs.id
            </Button>
            <Button
              href="https://wa.me/628159997830"
              target="_blank"
              rel="noopener noreferrer"
              data-umami-event="whatsapp-footer"
            >
              <WhatsAppIcon size={16} aria-hidden="true" />
              WhatsApp
            </Button>
          </div>
        </motion.div>

        <div className="border-border mt-16 grid gap-8 border-t-2 pt-8 sm:grid-cols-3">
          <div>
            <p className="text-foreground/40 mb-3 text-xs font-bold uppercase tracking-[0.2em]">
              Lab
            </p>
            <div className="flex items-center gap-2">
              <img src="/logo-primary.svg" alt="" width={24} height={24} />
              <span className="text-foreground text-sm font-bold">Aglabs</span>
            </div>
          </div>
          <div className="sm:flex sm:flex-col sm:items-center sm:text-center">
            <p className="text-foreground/40 mb-3 text-xs font-bold uppercase tracking-[0.2em]">
              Social
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/aglabsid"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/50 hover:text-main transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInIcon size={22} />
              </a>
              <a
                href="https://www.instagram.com/aglabs.id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/50 hover:text-main transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon size={22} />
              </a>
            </div>
          </div>
          <div className="sm:flex sm:flex-col sm:items-end sm:text-end">
            <p className="text-foreground/40 mb-3 text-xs font-bold uppercase tracking-[0.2em]">
              Legal
            </p>
            <p className="text-foreground/50 text-xs leading-relaxed">
              &copy; {currentYear} Aglabs.
              <br />
              {t.footer.rights}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
