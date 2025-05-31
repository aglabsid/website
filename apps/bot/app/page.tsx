import { ImageCard } from '@repo/ui/components/image-card'
import { ChatButton } from '@/components/chat-button'

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-lg flex-col items-center justify-center space-y-8 px-4 py-8">
      <div className="px-4">
        <ImageCard
          src="logo.png"
          alt="Aglabs Bot"
          className="max-w-3xs rounded-full"
          fetchPriority="high"
        />
      </div>
      <h1 className="text-center text-4xl font-bold">
        <a
          href="https://aglabs.id"
          className="text-main hover:underline"
          target="_blank"
          rel="noreferrer noopener"
        >
          Aglabs
        </a>{' '}
        Bot
      </h1>
      <ChatButton />
    </main>
  )
}
