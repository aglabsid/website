import { cn } from '../lib/utils'
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

const base =
  'inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap border-2 border-border font-semibold shadow-shadow transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2'

const variants = {
  primary: 'bg-main text-main-foreground',
  secondary: 'bg-background text-foreground',
}

const sizes = {
  default: 'h-11 px-8 text-base',
  icon: 'size-10',
}

interface BaseProps {
  variant?: keyof typeof variants
  size?: keyof typeof sizes
  className?: string
}

type AsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: never }
type AsAnchor = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

export default function Button({
  variant = 'primary',
  size = 'default',
  className,
  ...props
}: AsButton | AsAnchor) {
  const classes = cn(base, variants[variant], sizes[size], className)

  if ('href' in props && props.href !== undefined) {
    return (
      <a
        className={classes}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      />
    )
  }

  return (
    <button
      className={classes}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    />
  )
}
