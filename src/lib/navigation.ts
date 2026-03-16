import { LayoutDashboard, KanbanSquare, Activity, DollarSign, Settings, Users } from 'lucide-react'

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
    ],
  },
  {
    title: 'Comercial',
    icon: KanbanSquare,
    items: [
      { title: 'Dashboard de Vendas', url: '/sales/dashboard' },
      { title: 'Base de Clientes', url: '/sales/customers' },
      { title: 'Funis de Vendas', url: '/sales/funnels' },
      { title: 'Performance e Ads', url: '/marketing' },
    ],
  },
  {
    title: 'Comunidade',
    icon: Users,
    items: [
      { title: 'Dashboard', url: '/community/dashboard' },
      { title: 'Programa de Pontos', url: '/community/points' },
      { title: 'Atendimento', url: '/community/service' },
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
      { title: 'Segurança e Risco', url: '/security' },
    ],
  },
]
