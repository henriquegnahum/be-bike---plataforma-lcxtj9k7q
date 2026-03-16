import { Outlet } from 'react-router-dom'
import { SidebarProvider } from '@/components/ui/sidebar'
import { AppSidebar } from './AppSidebar'
import { AppHeader } from './AppHeader'
import { AIAssistant } from './AIAssistant'
import { Button } from '@/components/ui/button'
import { Sparkles } from 'lucide-react'
import { useState } from 'react'

export default function Layout() {
  const [aiOpen, setAiOpen] = useState(false)

  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="flex flex-col flex-1 min-h-screen overflow-hidden bg-background relative selection:bg-primary/20 selection:text-primary">
        {/* Liquid Glass ambient orbs */}
        <div className="absolute top-[-15%] left-[-10%] w-[700px] h-[700px] bg-primary/20 dark:bg-primary/10 rounded-full blur-[140px] pointer-events-none z-0 mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute bottom-[-15%] right-[-10%] w-[900px] h-[900px] bg-emerald-500/20 dark:bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none z-0 mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute top-[30%] left-[60%] w-[600px] h-[600px] bg-blue-400/10 dark:bg-blue-500/10 rounded-full blur-[150px] pointer-events-none z-0 mix-blend-multiply dark:mix-blend-screen" />

        <AppHeader />
        <main className="flex-1 overflow-y-auto p-4 md:p-8 relative z-10 w-full max-w-[1600px] mx-auto">
          <Outlet />
        </main>

        <div className="fixed bottom-6 right-6 z-40 animate-bounce hover:animate-none">
          <Button
            onClick={() => setAiOpen(true)}
            className="h-14 w-14 rounded-full shadow-[0_8px_30px_rgba(28,209,92,0.4)] hover:shadow-[0_12px_40px_rgba(28,209,92,0.6)] hover:scale-105 transition-all bg-primary hover:bg-primary/90 text-primary-foreground border border-white/20"
            size="icon"
          >
            <Sparkles className="h-6 w-6" />
          </Button>
        </div>

        <AIAssistant open={aiOpen} onOpenChange={setAiOpen} />
      </div>
    </SidebarProvider>
  )
}
