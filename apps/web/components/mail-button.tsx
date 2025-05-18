'use client'

import { Button } from '@repo/ui/components/button'
import { Mail } from 'lucide-react'

export const MailButton = () => (
  <Button
    className="w-full cursor-pointer"
    size="lg"
    data-umami-event="mail"
    onClick={() => {
      window.open('mailto:hi@aglabs.id')
    }}
  >
    <Mail />
    <span>Send Email</span>
  </Button>
)
