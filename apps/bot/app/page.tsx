import { ImageCard } from '@repo/ui/components/image-card'
import { ChatButton } from '@/components/chat-button'

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-lg flex-col items-center justify-center space-y-8 px-4">
      <div className="px-4">
        <ImageCard
          imageUrl="logo.svg"
          caption="Aglabs Bot"
          className="rounded-full"
        />
      </div>
      <h1 className="text-center text-4xl font-bold">Aglabs Bot</h1>
      <ChatButton />
    </main>
  )
}
