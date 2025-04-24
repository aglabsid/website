export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="max-w-xs p-4">
        <picture className="w-full">
          <source
            srcSet="logo-secondary.svg"
            media="(prefers-color-scheme: light)"
          />
          <img src="logo-primary.svg" alt="Aglabs logo" />
        </picture>
      </div>
      <h1 className="mt-8 text-center text-4xl font-bold">Aglabs Dev</h1>
    </main>
  )
}
