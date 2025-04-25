'use client'

import { Button } from '@repo/ui/components/button'
import { MessageSquare } from 'lucide-react'

export const ChatButton = () => (
  <Button
    className="w-full cursor-pointer"
    size="lg"
    data-umami-event="chat"
    onClick={() => {
      window.open('/chat', '_blank')
    }}
  >
    <MessageSquare />
    <span>Chat</span>
  </Button>
)
