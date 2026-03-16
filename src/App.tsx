import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from '@/components/ui/sonner'
import Layout from '@/components/Layout'
import Index from '@/pages/Index'
import CRM from '@/pages/CRM'
import LeadDetail from '@/pages/LeadDetail'
import Bikes from '@/pages/Bikes'
import BikeDetail from '@/pages/BikeDetail'
import Deliverers from '@/pages/Deliverers'
import DelivererDetail from '@/pages/DelivererDetail'
import Maintenance from '@/pages/Maintenance'
import Tasks from '@/pages/Tasks'
import Financial from '@/pages/Financial'
import Security from '@/pages/Security'
import NotFound from '@/pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="crm" element={<CRM />} />
          <Route path="crm/:id" element={<LeadDetail />} />
          <Route path="bikes" element={<Bikes />} />
          <Route path="bikes/:id" element={<BikeDetail />} />
          <Route path="deliverers" element={<Deliverers />} />
          <Route path="deliverers/:id" element={<DelivererDetail />} />
          <Route path="maintenance" element={<Maintenance />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="financial" element={<Financial />} />
          <Route path="security" element={<Security />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Toaster />
    </BrowserRouter>
  )
}

export default App
