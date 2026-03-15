import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import Layout from './components/Layout'

import Index from './pages/Index'
import Deliverers from './pages/Deliverers'
import DelivererDetail from './pages/DelivererDetail'
import Bikes from './pages/Bikes'
import BikeDetail from './pages/BikeDetail'
import Maintenance from './pages/Maintenance'
import Tasks from './pages/Tasks'
import NotFound from './pages/NotFound'

const App = () => (
  <BrowserRouter future={{ v7_startTransition: false, v7_relativeSplatPath: false }}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Index />} />
          <Route path="/entregadores" element={<Deliverers />} />
          <Route path="/entregadores/:id" element={<DelivererDetail />} />
          <Route path="/frota" element={<Bikes />} />
          <Route path="/frota/:id" element={<BikeDetail />} />
          <Route path="/manutencao" element={<Maintenance />} />
          <Route path="/tarefas" element={<Tasks />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </BrowserRouter>
)

export default App
