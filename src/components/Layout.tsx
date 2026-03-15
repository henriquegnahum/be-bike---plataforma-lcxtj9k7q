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
      <div className="flex flex-col flex-1 min-h-screen overflow-hidden bg-background">
        <AppHeader />
        <main className="flex-1 overflow-y-auto p-4 md:p-6 animate-fade-in relative">
          <Outlet />
        </main>

        {/* Global AI Floating Button */}
        <div className="fixed bottom-6 right-6 z-40 animate-bounce hover:animate-none">
          <Button
            onClick={() => setAiOpen(true)}
            className="h-14 w-14 rounded-full shadow-elevation hover:shadow-xl hover:scale-105 transition-all"
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
