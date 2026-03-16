import { Outlet } from 'react-router-dom'
import { SidebarProvider } from '@/components/ui/sidebar'
import { AppSidebar } from './AppSidebar'
import { AppHeader } from './AppHeader'
import { AIAssistant } from './AIAssistant'
import { TopAlerts } from './TopAlerts'
import { RightSidebar } from './RightSidebar'
import { InternalChat } from './InternalChat'
import useAppStore from '@/stores/main'

export default function Layout() {
  const { aiOpen, setAiOpen, chatOpen, setChatOpen } = useAppStore()

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
        <InternalChat open={chatOpen} onOpenChange={setChatOpen} />
      </div>
    </SidebarProvider>
  )
}
