import { LayoutDashboard, KanbanSquare, Activity, DollarSign, Settings } from 'lucide-react'

export const navHierarchy = [
  {
    title: 'Visão Geral',
    icon: LayoutDashboard,
    items: [
      { title: 'Dashboard Executivo', url: '/' },
      { title: 'Agenda Global', url: '/calendar' },
    ],
  },
  {
    title: 'Operação',
    icon: Activity,
    items: [
      { title: 'Frota', url: '/bikes' },
      { title: 'Hubs', url: '/hubs' },
      { title: 'Manutenção', url: '/maintenance' },
      { title: 'Supply', url: '/coming-soon' },
      { title: 'Comunidade', url: '/community' },
      { title: 'Atendimento', url: '/customer-service' },
      { title: 'Segurança e Risco', url: '/security' },
    ],
  },
  {
    title: 'Comercial & Marketing',
    icon: KanbanSquare,
    items: [
      { title: 'CRM e Leads', url: '/crm' },
      { title: 'Performance e Ads', url: '/marketing' },
      { title: 'Contratos', url: '/coming-soon' },
    ],
  },
  {
    title: 'Financeiro',
    icon: DollarSign,
    items: [
      { title: 'Governança', url: '/financial' },
      { title: 'Relatórios', url: '/coming-soon' },
    ],
  },
  {
    title: 'Administração',
    icon: Settings,
    items: [
      { title: 'Entregadores (Master)', url: '/deliverers' },
      { title: 'Tarefas e Workflows', url: '/tasks' },
      { title: 'Integrações Google', url: '/integrations' },
      { title: 'Reuniões (Meet)', url: '/meetings' },
    ],
  },
]
