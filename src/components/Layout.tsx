import { useEffect } from 'react'
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

  useEffect(() => {
    try {
      const originalCssRulesDescriptor = Object.getOwnPropertyDescriptor(
        CSSStyleSheet.prototype,
        'cssRules',
      )
      if (originalCssRulesDescriptor) {
        Object.defineProperty(CSSStyleSheet.prototype, 'cssRules', {
          get() {
            try {
              return originalCssRulesDescriptor.get?.call(this)
            } catch (e: any) {
              if (e.name === 'SecurityError' || (e.message && e.message.includes('cssRules'))) {
                return []
              }
              throw e
            }
          },
        })
      }
    } catch (error) {
      console.warn('Failed to apply CSSStyleSheet safeguard', error)
    }
  }, [])

  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="flex flex-col flex-1 min-h-screen overflow-hidden bg-background">
        <AppHeader />
        <TopAlerts />

        <div className="flex flex-1 overflow-hidden w-full">
          <main className="flex-1 overflow-y-auto p-4 md:p-8 w-full max-w-[1600px] mx-auto">
            <Outlet />
          </main>
          <RightSidebar />
        </div>

        <AIAssistant open={aiOpen} onOpenChange={setAiOpen} />

        {!aiOpen && (
          <Button
            onClick={() => setAiOpen(true)}
            size="icon"
            className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg z-50 flex items-center justify-center"
          >
            <Sparkles className="h-6 w-6" />
          </Button>
        )}
      </div>
    </SidebarProvider>
  )
}
