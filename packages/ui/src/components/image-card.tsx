import { cn } from '@repo/ui/lib/utils'

type ImageCardProps = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
> & {
  hasCaption?: boolean
}

export function ImageCard({
  src,
  alt,
  className,
  hasCaption,
  ...props
}: ImageCardProps) {
  return (
    <figure
      className={cn(
        'rounded-base border-border bg-main font-base shadow-shadow max-w-xs overflow-hidden border-2',
        className,
      )}
    >
      <img className="w-full" src={src} alt={alt} {...props} />
      {hasCaption && (
        <figcaption className="text-main-foreground border-border border-t-2 p-4">
          {alt}
        </figcaption>
      )}
    </figure>
  )
}
