import { cn } from '@repo/ui/lib/utils'

type Props = {
  imageUrl: string
  caption: string
  className?: string
  hasCaption?: boolean
}

export function ImageCard({ imageUrl, caption, className, hasCaption }: Props) {
  return (
    <figure
      className={cn(
        'rounded-base border-border bg-main font-base shadow-shadow max-w-xs overflow-hidden border-2',
        className,
      )}
    >
      <img className="w-full" src={imageUrl} alt={caption} />
      {hasCaption && (
        <figcaption className="text-main-foreground border-border border-t-2 p-4">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
