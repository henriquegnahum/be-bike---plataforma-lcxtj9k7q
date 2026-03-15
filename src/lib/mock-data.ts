export const MOCK_CRM_LEADS = [
  { id: '1', name: 'Carlos Silva', phone: '(11) 98888-1111', stage: 'Leads', source: 'Instagram' },
  {
    id: '2',
    name: 'Ana Oliveira',
    phone: '(11) 97777-2222',
    stage: 'Contacted',
    source: 'Referral',
  },
  { id: '3', name: 'Pedro Santos', phone: '(11) 96666-3333', stage: 'Analysis', source: 'Website' },
  {
    id: '4',
    name: 'João Costa',
    phone: '(11) 95555-4444',
    stage: 'Negotiation',
    source: 'Organic',
  },
  {
    id: '5',
    name: 'Maria Lima',
    phone: '(11) 94444-5555',
    stage: 'Signed/Onboarding',
    source: 'Instagram',
  },
]

export const MOCK_BIKES = [
  {
    id: '1',
    chassi: '9C21A4B2C3D4E5F6G',
    status: 'In Use',
    model: 'BeBike City Pro',
    mileage: 1250,
    nextMaintenance: '2024-05-10',
    deliverer: 'Carlos Silva',
  },
  {
    id: '2',
    chassi: '9C22B5C3D4E5F6G7H',
    status: 'Maintenance',
    model: 'BeBike Cargo',
    mileage: 3400,
    nextMaintenance: 'Overdue',
    deliverer: null,
  },
  {
    id: '3',
    chassi: '9C23C6D4E5F6G7H8I',
    status: 'Available',
    model: 'BeBike City Pro',
    mileage: 150,
    nextMaintenance: '2024-11-20',
    deliverer: null,
  },
]

export const MOCK_BIKE_OS = [
  {
    id: 'OS-1029',
    date: '2024-03-15',
    description: 'Brake pad replacement',
    cost: 45.0,
    status: 'Completed',
  },
  {
    id: 'OS-1045',
    date: '2024-04-02',
    description: 'Tire puncture repair',
    cost: 25.0,
    status: 'Completed',
  },
  {
    id: 'OS-1088',
    date: '2024-04-20',
    description: 'Full drivetrain overhaul',
    cost: 120.0,
    status: 'In Progress',
  },
]

export const MOCK_BIKE_PARTS = [
  { id: 'P-01', name: 'Ceramic Brake Pads', stock: 45, status: 'Good' },
  { id: 'P-02', name: 'All-Weather Tire 26"', stock: 12, status: 'Low' },
  { id: 'P-03', name: 'Chain Lubricant 500ml', stock: 8, status: 'Critical' },
]

export const MOCK_DELIVERERS = [
  {
    id: '1',
    name: 'Carlos Silva',
    cpf: '123.456.789-00',
    status: 'Active',
    trips: 145,
    rating: 4.8,
    activeBike: '9C21A4B2C3D4E5F6G',
    joinDate: '2023-11-10',
  },
  {
    id: '2',
    name: 'Ana Oliveira',
    cpf: '234.567.890-11',
    status: 'Onboarding',
    trips: 0,
    rating: 0,
    activeBike: null,
    joinDate: '2024-04-25',
  },
  {
    id: '3',
    name: 'Pedro Santos',
    cpf: '345.678.901-22',
    status: 'In Debt',
    trips: 412,
    rating: 4.2,
    activeBike: '9C23C6D4E5F6G7H8I',
    joinDate: '2023-08-05',
  },
  {
    id: '4',
    name: 'João Costa',
    cpf: '456.789.012-33',
    status: 'Inactive',
    trips: 89,
    rating: 4.5,
    activeBike: null,
    joinDate: '2023-12-01',
  },
]

export const MOCK_DELIVERER_LOGS = [
  {
    id: 'L-1',
    date: '2024-04-24 10:30',
    type: 'Communication',
    note: 'Sent payment reminder via WhatsApp.',
  },
  {
    id: 'L-2',
    date: '2024-04-10 14:15',
    type: 'Contract',
    note: 'Signed new 6-month leasing agreement.',
  },
  {
    id: 'L-3',
    date: '2024-03-05 09:00',
    type: 'Fleet',
    note: 'Assigned to bike CHASSI: 9C23C6D4E5F6G7H8I.',
  },
]

export const MOCK_CLOUD_HUMANS_TICKETS = [
  {
    id: 'CH-8821',
    subject: 'App Login Issue',
    user: 'Ana Oliveira',
    status: 'Open',
    priority: 'High',
    time: '10m ago',
  },
  {
    id: 'CH-8822',
    subject: 'Payment not received',
    user: 'Pedro Santos',
    status: 'In Progress',
    priority: 'Medium',
    time: '2h ago',
  },
  {
    id: 'CH-8815',
    subject: 'Bike maintenance request',
    user: 'Carlos Silva',
    status: 'Resolved',
    priority: 'Low',
    time: '1d ago',
  },
]
