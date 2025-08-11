import Link from "next/link"
import { Button } from "@/components/ui/button"
import { UserProfile } from "@/components/auth/user-profile"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Next.js Starter Kit</h1>
          <UserProfile />
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold tracking-tight">
              Welcome to Your Next.js Boilerplate
            </h2>
            <p className="text-xl text-muted-foreground">
              A complete starter kit with authentication, database, AI integration, and modern tooling
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">🔐 Authentication</h3>
              <p className="text-sm text-muted-foreground">
                Better Auth with Google OAuth integration
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">🗄️ Database</h3>
              <p className="text-sm text-muted-foreground">
                Drizzle ORM with PostgreSQL setup
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">🤖 AI Ready</h3>
              <p className="text-sm text-muted-foreground">
                Vercel AI SDK with OpenAI integration
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">🎨 UI Components</h3>
              <p className="text-sm text-muted-foreground">
                shadcn/ui with Tailwind CSS
              </p>
            </div>
          </div>

          <div className="space-y-6 mt-12">
            <h3 className="text-2xl font-semibold">Next Steps</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-2">1. Set up environment variables</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Copy <code>.env.example</code> to <code>.env.local</code> and configure:
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  <li>DATABASE_URL (PostgreSQL connection string)</li>
                  <li>GOOGLE_CLIENT_ID (OAuth credentials)</li>
                  <li>GOOGLE_CLIENT_SECRET (OAuth credentials)</li>
                  <li>OPENAI_API_KEY (for AI functionality)</li>
                </ul>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-2">2. Set up your database</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Run database migrations:
                </p>
                <code className="text-sm bg-muted p-2 rounded block">
                  npx drizzle-kit push
                </code>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-2">3. Try the features</h4>
                <div className="space-y-2">
                  <Button asChild size="sm" className="w-full">
                    <Link href="/dashboard">View Dashboard</Link>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link href="/chat">Try AI Chat</Link>
                  </Button>
                </div>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-2">4. Start building</h4>
                <p className="text-sm text-muted-foreground">
                  Customize the components, add your own pages, and build your application on top of this solid foundation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t py-8 text-center text-sm text-muted-foreground">
        <div className="container mx-auto px-4">
          Built with Next.js, Better Auth, Drizzle ORM, and Vercel AI SDK
        </div>
      </footer>
    </div>
  )
}
