import { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '@/components/Layout'
import { Skeleton } from '@/components/ui/skeleton'

// Lazy load all pages to reduce build memory footprint and prevent OOM (Exit Code 143)
const Index = lazy(() => import('@/pages/Index'))
const Bikes = lazy(() => import('@/pages/Bikes'))
const BikeDetail = lazy(() => import('@/pages/BikeDetail'))
const Calendar = lazy(() => import('@/pages/Calendar'))
const Chat = lazy(() => import('@/pages/Chat'))
const ComingSoon = lazy(() => import('@/pages/ComingSoon'))
const Deliverers = lazy(() => import('@/pages/Deliverers'))
const DelivererDetail = lazy(() => import('@/pages/DelivererDetail'))
const Financial = lazy(() => import('@/pages/Financial'))
const Hubs = lazy(() => import('@/pages/Hubs'))
const Integrations = lazy(() => import('@/pages/Integrations'))
const Landing = lazy(() => import('@/pages/Landing'))
const LeadDetail = lazy(() => import('@/pages/LeadDetail'))
const Login = lazy(() => import('@/pages/Login'))
const Maintenance = lazy(() => import('@/pages/Maintenance'))
const Marketing = lazy(() => import('@/pages/Marketing'))
const Meetings = lazy(() => import('@/pages/Meetings'))
const Security = lazy(() => import('@/pages/Security'))
const Tasks = lazy(() => import('@/pages/Tasks'))
const CommunityDashboard = lazy(() => import('@/pages/community/CommunityDashboard'))
const CustomerService = lazy(() => import('@/pages/community/CustomerService'))
const PointsProgram = lazy(() => import('@/pages/community/PointsProgram'))
const CustomerBase = lazy(() => import('@/pages/sales/CustomerBase'))
const SalesDashboard = lazy(() => import('@/pages/sales/SalesDashboard'))
const SalesFunnels = lazy(() => import('@/pages/sales/SalesFunnels'))

function Loader() {
  return (
    <div className="flex h-[50vh] w-full items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <Skeleton className="h-4 w-32" />
      </div>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/landing" element={<Landing />} />

          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="bikes" element={<Bikes />} />
            <Route path="bikes/:id" element={<BikeDetail />} />
            <Route path="calendar" element={<Calendar />} />
            <Route path="chat" element={<Chat />} />
            <Route path="deliverers" element={<Deliverers />} />
            <Route path="deliverers/:id" element={<DelivererDetail />} />
            <Route path="financial" element={<Financial />} />
            <Route path="hubs" element={<Hubs />} />
            <Route path="integrations" element={<Integrations />} />
            <Route path="crm" element={<SalesDashboard />} />
            <Route path="crm/leads/:id" element={<LeadDetail />} />
            <Route path="crm/customers" element={<CustomerBase />} />
            <Route path="crm/funnels" element={<SalesFunnels />} />
            <Route path="maintenance" element={<Maintenance />} />
            <Route path="marketing" element={<Marketing />} />
            <Route path="meetings" element={<Meetings />} />
            <Route path="security" element={<Security />} />
            <Route path="tasks" element={<Tasks />} />
            <Route path="community" element={<CommunityDashboard />} />
            <Route path="customer-service" element={<CustomerService />} />
            <Route path="community/points" element={<PointsProgram />} />
            <Route path="*" element={<ComingSoon />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
