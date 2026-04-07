import { motion } from 'motion/react'
import { cn } from '@repo/ui/lib/utils'
import type { ComponentPropsWithoutRef } from 'react'

export const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
}

type CardProps = ComponentPropsWithoutRef<typeof motion.div>

export default function Card({ className, ...props }: CardProps) {
  return (
    <motion.div
      variants={cardVariants}
      className={cn(
        'border-border bg-secondary-background shadow-shadow hover:translate-x-boxShadowX hover:translate-y-boxShadowY group border-2 p-6 transition-[box-shadow,translate] hover:shadow-none',
        className,
      )}
      {...props}
    />
  )
}
