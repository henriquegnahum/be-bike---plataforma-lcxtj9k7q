import {
  LayoutDashboard,
  KanbanSquare,
  Megaphone,
  Wrench,
  Headset,
  ShieldAlert,
  DollarSign,
  Brain,
  Settings,
  MessageSquare,
} from 'lucide-react'

export const navHierarchy = [
  {
    title: 'Visão Geral',
    icon: LayoutDashboard,
    roles: ['Admin', 'Finance', 'Operations', 'Hubs', 'Supply'],
    items: [
      { title: 'Dashboard Executivo', url: '/' },
      { title: 'Alertas Críticos', url: '/security' },
      { title: 'Agenda Operacional', url: '/calendar' },
      { title: 'Agenda Executiva', url: '/calendar' },
    ],
  },
  {
    title: 'Comunicação',
    icon: MessageSquare,
    roles: ['Admin', 'Operations', 'Hubs', 'Supply', 'Finance'],
    items: [
      {
        title: 'Canais de Chat',
        subItems: [
          { title: '# geral', url: '/chat/geral' },
          { title: '# operacoes', url: '/chat/operacoes' },
          { title: '# manutencao', url: '/chat/manutencao' },
          { title: '# hubs', url: '/chat/hubs' },
          { title: '# financeiro', url: '/chat/financeiro' },
        ],
      },
    ],
  },
  {
    title: 'Comercial',
    icon: KanbanSquare,
    roles: ['Admin', 'Operations', 'Hubs'],
    items: [
      { title: 'CRM & Leads', url: '/crm' },
      { title: 'Pipeline de Vendas', url: '/crm' },
      { title: 'Contratos', url: '/crm' },
      { title: 'Documentos', url: '/crm' },
      { title: 'Parceiros', url: '/community' },
    ],
  },
  {
    title: 'Marketing',
    icon: Megaphone,
    roles: ['Admin', 'Operations'],
    items: [
      { title: 'Performance', url: '/marketing' },
      { title: 'Campanhas', url: '/marketing' },
      { title: 'Criativos', url: '/marketing' },
      { title: 'Públicos', url: '/marketing' },
      { title: 'Analytics', url: '/marketing' },
    ],
  },
  {
    title: 'Operações',
    icon: Wrench,
    roles: ['Admin', 'Operations', 'Hubs', 'Supply'],
    items: [
      {
        title: 'Frota',
        subItems: [
          { title: 'Inventário', url: '/bikes' },
          { title: 'Telemetria', url: '/bikes' },
          { title: 'Status', url: '/bikes' },
          { title: 'Alocação', url: '/bikes' },
          { title: 'Histórico', url: '/bikes' },
        ],
      },
      {
        title: 'Hubs',
        subItems: [
          { title: 'Painel de Hubs', url: '/hubs' },
          { title: 'Retiradas', url: '/hubs' },
          { title: 'Devoluções', url: '/hubs' },
          { title: 'Estoque', url: '/hubs' },
          { title: 'O.S.', url: '/hubs' },
          { title: 'Relatórios', url: '/hubs' },
        ],
      },
      {
        title: 'Manutenção',
        subItems: [
          { title: 'O.S. Abertas', url: '/maintenance' },
          { title: 'Preventiva', url: '/maintenance' },
          { title: 'Corretiva', url: '/maintenance' },
          { title: 'Histórico', url: '/maintenance' },
        ],
      },
      {
        title: 'Supply',
        subItems: [
          { title: 'Inventário Global', url: '/maintenance' },
          { title: 'Pedidos', url: '/maintenance' },
          { title: 'Fornecedores', url: '/maintenance' },
          { title: 'Hubs (Estoque)', url: '/maintenance' },
          { title: 'Alertas', url: '/maintenance' },
        ],
      },
      {
        title: 'Comunidade',
        subItems: [
          { title: 'Gamificação', url: '/community' },
          { title: 'Benefícios', url: '/community' },
          { title: 'Eventos', url: '/community' },
          { title: 'Ranking', url: '/community' },
        ],
      },
    ],
  },
  {
    title: 'Atendimento',
    icon: Headset,
    roles: ['Admin', 'Operations', 'Hubs'],
    items: [
      { title: 'Conversas', url: '/customer-service' },
      { title: 'Chamados', url: '/customer-service' },
      { title: 'SLA', url: '/customer-service' },
      { title: 'Histórico', url: '/customer-service' },
      { title: 'Automação', url: '/customer-service' },
    ],
  },
  {
    title: 'Segurança e Risco',
    icon: ShieldAlert,
    roles: ['Admin', 'Operations'],
    items: [
      { title: 'Incidentes', url: '/security' },
      { title: 'Sinistros', url: '/security' },
      { title: 'B.O.', url: '/security' },
      { title: 'Fraude', url: '/security' },
      { title: 'Recuperação', url: '/security' },
    ],
  },
  {
    title: 'Financeiro',
    icon: DollarSign,
    roles: ['Admin', 'Finance'],
    items: [
      { title: 'Receitas', url: '/financial' },
      { title: 'Cobranças', url: '/financial' },
      { title: 'Inadimplência', url: '/financial' },
      { title: 'Fluxo de Caixa', url: '/financial' },
      { title: 'Contas Bancárias', url: '/financial' },
      { title: 'Conciliação', url: '/financial' },
      { title: 'Relatórios', url: '/financial' },
    ],
  },
  {
    title: 'Inteligência',
    icon: Brain,
    roles: ['Admin', 'Operations', 'Finance'],
    items: [
      { title: 'Analytics Global', url: '/' },
      { title: 'Tendências', url: '/' },
      { title: 'Previsões', url: '/' },
      { title: 'Insights Auto', url: '/' },
      { title: 'Modelos Preditivos', url: '/' },
    ],
  },
  {
    title: 'Administração',
    icon: Settings,
    roles: ['Admin'],
    items: [
      { title: 'Usuários', url: '/' },
      { title: 'Integrações Google', url: '/integrations' },
      { title: 'Permissões', url: '/' },
      { title: 'Logs', url: '/' },
      { title: 'Auditoria', url: '/' },
      { title: 'Configurações', url: '/' },
    ],
  },
]
