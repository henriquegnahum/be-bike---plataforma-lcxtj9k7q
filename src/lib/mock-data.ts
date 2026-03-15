export const kpis = {
  mrr: 'R$ 452.890',
  activeFleet: '88%',
  churnRisk: '12 Entregadores',
  subsidyPaid: 'R$ 34.500',
}

export const financialData = [
  { month: 'Jan', projetado: 400000, realizado: 410000 },
  { month: 'Fev', projetado: 420000, realizado: 415000 },
  { month: 'Mar', projetado: 440000, realizado: 452890 },
  { month: 'Abr', projetado: 460000, realizado: null },
]

export const fleetStatusData = [
  { name: 'Ativas', value: 220, fill: 'var(--color-ativas)' },
  { name: 'Manutenção', value: 15, fill: 'var(--color-manutencao)' },
  { name: 'Ociosas', value: 15, fill: 'var(--color-ociosas)' },
]

export const alerts = [
  {
    id: 1,
    type: 'warning',
    title: 'Bike #X-123 atingiu 2.500km',
    desc: 'Revisão preventiva necessária.',
    urgent: true,
  },
  {
    id: 2,
    type: 'danger',
    title: 'Risco de Inadimplência',
    desc: 'Entregador CPF ***.456.789-** com 85% de risco.',
    urgent: true,
  },
  {
    id: 3,
    type: 'info',
    title: 'Estoque Baixo',
    desc: 'Pneus aro 29 (Apenas 4 unidades restantes).',
    urgent: false,
  },
]

export const deliverers = [
  {
    cpf: '111.222.333-44',
    name: 'João Silva',
    status: 'Ativo',
    score: 95,
    risk: 'Baixo',
    bike: 'X-123',
  },
  {
    cpf: '222.333.444-55',
    name: 'Maria Oliveira',
    status: 'Em Risco',
    score: 60,
    risk: 'Alto',
    bike: 'Y-456',
  },
  {
    cpf: '333.444.555-66',
    name: 'Carlos Santos',
    status: 'Ativo',
    score: 88,
    risk: 'Médio',
    bike: 'Z-789',
  },
]

export const bikes = [
  {
    chassi: 'X-123',
    mileage: 2450,
    lastMaintenance: '10/02/2026',
    status: 'Ativa',
    user: 'João Silva',
  },
  {
    chassi: 'Y-456',
    mileage: 3100,
    lastMaintenance: '15/12/2025',
    status: 'Manutenção',
    user: 'Oficina',
  },
  {
    chassi: 'Z-789',
    mileage: 1200,
    lastMaintenance: '01/03/2026',
    status: 'Ativa',
    user: 'Carlos Santos',
  },
]

export const taskColumns = [
  {
    id: 'pending',
    title: 'Pendente',
    tasks: [{ id: 'T-1', chassi: 'A-001', desc: 'Troca de Corrente' }],
  },
  {
    id: 'progress',
    title: 'Em Progresso',
    tasks: [{ id: 'T-2', chassi: 'Y-456', desc: 'Revisão 3.000km' }],
  },
  {
    id: 'validation',
    title: 'Validação',
    tasks: [{ id: 'T-3', chassi: 'B-002', desc: 'Troca de Pneu' }],
  },
  {
    id: 'done',
    title: 'Concluído',
    tasks: [{ id: 'T-4', chassi: 'X-123', desc: 'Ajuste Freio' }],
  },
]
