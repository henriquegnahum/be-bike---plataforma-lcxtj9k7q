import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Toaster } from '@/components/ui/sonner'
import Layout from '@/components/Layout'
import Index from '@/pages/Index'
import Hubs from '@/pages/Hubs'
import CalendarPage from '@/pages/Calendar'
import SalesDashboard from '@/pages/sales/SalesDashboard'
import CustomerBase from '@/pages/sales/CustomerBase'
import SalesFunnels from '@/pages/sales/SalesFunnels'
import LeadDetail from '@/pages/LeadDetail'
import Marketing from '@/pages/Marketing'
import Bikes from '@/pages/Bikes'
import BikeDetail from '@/pages/BikeDetail'
import Deliverers from '@/pages/Deliverers'
import DelivererDetail from '@/pages/DelivererDetail'
import Maintenance from '@/pages/Maintenance'
import CommunityDashboard from '@/pages/community/CommunityDashboard'
import PointsProgram from '@/pages/community/PointsProgram'
import CustomerService from '@/pages/community/CustomerService'
import Tasks from '@/pages/Tasks'
import Financial from '@/pages/Financial'
import Security from '@/pages/Security'
import Chat from '@/pages/Chat'
import Integrations from '@/pages/Integrations'
import Meetings from '@/pages/Meetings'
import ComingSoon from '@/pages/ComingSoon'
import NotFound from '@/pages/NotFound'
import Login from '@/pages/Login'
import useAppStore, { AppProvider } from '@/stores/main'
import { ThemeProvider } from 'next-themes'

try {
  const patchSheet = (prop: 'cssRules' | 'rules') => {
    const original = Object.getOwnPropertyDescriptor(CSSStyleSheet.prototype, prop)
    if (original) {
      Object.defineProperty(CSSStyleSheet.prototype, prop, {
        get() {
          try {
            return original.get?.call(this) || []
          } catch (e: any) {
            if (e.name === 'SecurityError') return []
            throw e
          }
        },
      })
    }
  }
  patchSheet('cssRules')
  patchSheet('rules')
} catch (err) {
  // Ignore errors on patch
}

function AppContent() {
  const { isAuthenticated } = useAppStore()

  if (!isAuthenticated) {
    return <Login />
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="hubs" element={<Hubs />} />
          <Route path="calendar" element={<CalendarPage />} />
          <Route path="sales/dashboard" element={<SalesDashboard />} />
          <Route path="sales/customers" element={<CustomerBase />} />
          <Route path="sales/customers/:id" element={<LeadDetail />} />
          <Route path="sales/funnels" element={<SalesFunnels />} />
          <Route path="marketing" element={<Marketing />} />
          <Route path="bikes" element={<Bikes />} />
          <Route path="bikes/:id" element={<BikeDetail />} />
          <Route path="deliverers" element={<Deliverers />} />
          <Route path="deliverers/:id" element={<DelivererDetail />} />
          <Route path="maintenance" element={<Maintenance />} />
          <Route path="community/dashboard" element={<CommunityDashboard />} />
          <Route path="community/points" element={<PointsProgram />} />
          <Route path="community/service" element={<CustomerService />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="financial" element={<Financial />} />
          <Route path="security" element={<Security />} />
          <Route path="meetings" element={<Meetings />} />
          <Route path="coming-soon" element={<ComingSoon />} />
          <Route path="chat" element={<Navigate to="/chat/geral" replace />} />
          <Route path="chat/:channel" element={<Chat />} />
          <Route path="integrations" element={<Integrations />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <AppProvider>
        <AppContent />
        <Toaster />
      </AppProvider>
    </ThemeProvider>
  )
}

export default App
