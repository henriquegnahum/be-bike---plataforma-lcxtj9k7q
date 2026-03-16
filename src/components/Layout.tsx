import { Outlet } from 'react-router-dom'
import { SidebarProvider } from '@/components/ui/sidebar'
import { AppSidebar } from './AppSidebar'
import { AppHeader } from './AppHeader'
import { AIAssistant } from './AIAssistant'
import { TopAlerts } from './TopAlerts'
import { RightSidebar } from './RightSidebar'
import useAppStore from '@/stores/main'
import { Button } from '@/components/ui/button'
import { Sparkles } from 'lucide-react'

export default function Layout() {
  const { aiOpen, setAiOpen } = useAppStore()

  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="flex flex-col flex-1 min-h-screen overflow-hidden bg-background relative selection:bg-primary/20 selection:text-primary">
        <div className="absolute top-[-15%] left-[-10%] w-[700px] h-[700px] bg-primary/20 dark:bg-primary/10 rounded-full blur-[140px] pointer-events-none z-0 mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute bottom-[-15%] right-[-10%] w-[900px] h-[900px] bg-emerald-500/20 dark:bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none z-0 mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute top-[30%] left-[60%] w-[600px] h-[600px] bg-blue-400/10 dark:bg-blue-500/10 rounded-full blur-[150px] pointer-events-none z-0 mix-blend-multiply dark:mix-blend-screen" />

        <AppHeader />
        <TopAlerts />

        <div className="flex flex-1 overflow-hidden relative z-10 w-full">
          <main className="flex-1 overflow-y-auto p-4 md:p-8 w-full max-w-[1600px] mx-auto no-scrollbar">
            <Outlet />
          </main>
          <RightSidebar />
        </div>

        <AIAssistant open={aiOpen} onOpenChange={setAiOpen} />

        {!aiOpen && (
          <Button
            onClick={() => setAiOpen(true)}
            size="icon"
            className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-[0_8px_30px_rgba(28,209,92,0.3)] bg-primary hover:bg-primary/90 hover:scale-110 transition-all duration-300 z-50 flex items-center justify-center border border-primary/50 group"
          >
            <Sparkles className="h-6 w-6 text-primary-foreground group-hover:animate-pulse" />
          </Button>
        )}
      </div>
    </SidebarProvider>
  )
}
