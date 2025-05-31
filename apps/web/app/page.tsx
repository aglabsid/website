import { ImageCard } from '@repo/ui/components/image-card'
import { MailButton } from '@/components/mail-button'

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-lg flex-col items-center justify-center space-y-8 px-4 py-8">
      <div className="px-4">
        <ImageCard
          src="logo-primary.svg"
          alt="Aglabs Dev"
          className="max-w-3xs rounded-full"
          fetchPriority="high"
        />
      </div>
      <h1 className="mt-8 text-center text-4xl font-bold">Aglabs Dev</h1>
      <MailButton />
    </main>
  )
}
