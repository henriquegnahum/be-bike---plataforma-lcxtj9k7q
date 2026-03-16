import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from '@/components/ui/sonner'
import Layout from '@/components/Layout'
import Index from '@/pages/Index'
import CRM from '@/pages/CRM'
import Marketing from '@/pages/Marketing'
import LeadDetail from '@/pages/LeadDetail'
import Bikes from '@/pages/Bikes'
import BikeDetail from '@/pages/BikeDetail'
import Deliverers from '@/pages/Deliverers'
import DelivererDetail from '@/pages/DelivererDetail'
import Maintenance from '@/pages/Maintenance'
import CustomerService from '@/pages/CustomerService'
import Community from '@/pages/Community'
import Tasks from '@/pages/Tasks'
import Financial from '@/pages/Financial'
import Security from '@/pages/Security'
import NotFound from '@/pages/NotFound'
import { AppProvider } from '@/stores/main'
import { ThemeProvider } from 'next-themes'

// Global patch to prevent SecurityError when accessing cssRules on cross-origin stylesheets.
try {
  const patchSheet = (prop: 'cssRules' | 'rules') => {
    const original = Object.getOwnPropertyDescriptor(CSSStyleSheet.prototype, prop)
    if (original) {
      Object.defineProperty(CSSStyleSheet.prototype, prop, {
        get() {
          try {
            return original.get?.call(this) || []
          } catch (e: any) {
            if (e.name === 'SecurityError') {
              return []
            }
            throw e
          }
        },
      })
    }
  }
  patchSheet('cssRules')
  patchSheet('rules')
} catch (err) {
  // Silently ignore if patch fails
}

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <AppProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="crm" element={<CRM />} />
              <Route path="crm/:id" element={<LeadDetail />} />
              <Route path="marketing" element={<Marketing />} />
              <Route path="bikes" element={<Bikes />} />
              <Route path="bikes/:id" element={<BikeDetail />} />
              <Route path="deliverers" element={<Deliverers />} />
              <Route path="deliverers/:id" element={<DelivererDetail />} />
              <Route path="maintenance" element={<Maintenance />} />
              <Route path="customer-service" element={<CustomerService />} />
              <Route path="community" element={<Community />} />
              <Route path="tasks" element={<Tasks />} />
              <Route path="financial" element={<Financial />} />
              <Route path="security" element={<Security />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
          <Toaster />
        </BrowserRouter>
      </AppProvider>
    </ThemeProvider>
  )
}

export default App
