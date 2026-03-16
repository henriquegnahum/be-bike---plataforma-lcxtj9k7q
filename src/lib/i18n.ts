import useAppStore from '@/stores/main'

const dict = {
  PT: {
    dashboard: 'Painel Hub',
    crm: 'CRM e Funil',
    fleet: 'Gestão de Frota',
    deliverers: 'Entregadores',
    maintenance: 'Manutenção e Suprimentos',
    financial: 'Financeiro AsaaS',
    security: 'Segurança e Risco',
    tasks: 'Tarefas e Workflows',
    export: 'Exportar',
    import: 'Importar Massa',
    new: 'Novo',
    feedback: 'Enviar Sugestão',
    language: 'Idioma',
  },
  EN: {
    dashboard: 'Dashboard Hub',
    crm: 'CRM & Funnel',
    fleet: 'Fleet Master',
    deliverers: 'Deliverer Master',
    maintenance: 'Maintenance & Supply',
    financial: 'Financial Hub',
    security: 'Security & Risk',
    tasks: 'Tasks & Workflows',
    export: 'Export',
    import: 'Bulk Import',
    new: 'New',
    feedback: 'Submit Feedback',
    language: 'Language',
  },
  ES: {
    dashboard: 'Tablero',
    crm: 'CRM y Embudo',
    fleet: 'Gestión de Flota',
    deliverers: 'Repartidores',
    maintenance: 'Mantenimiento y Sum.',
    financial: 'Financiero',
    security: 'Seguridad y Riesgo',
    tasks: 'Tareas y Flujos',
    export: 'Exportar',
    import: 'Importación Masiva',
    new: 'Nuevo',
    feedback: 'Enviar Sugerencia',
    language: 'Idioma',
  },
}

export function useTranslation() {
  const { language } = useAppStore()
  return (key: keyof (typeof dict)['PT']) => dict[language][key] || key
}
