import type { ComplianceDocument, Employee } from '../domain/models';

export const employees: Employee[] = [
  {
    id: 'emp-1',
    name: 'Ana Souza',
    email: 'ana.souza@empresa.com.br',
    role: 'Técnica em Segurança',
    department: 'SST',
    admissionDate: '2022-03-15',
    active: true,
  },
  {
    id: 'emp-2',
    name: 'Carlos Lima',
    email: 'carlos.lima@empresa.com.br',
    role: 'Operador de Produção',
    department: 'Operações',
    admissionDate: '2024-08-01',
    active: true,
  },
];

export const documents: ComplianceDocument[] = [
  {
    id: 'doc-1',
    employeeId: 'emp-1',
    type: 'ASO',
    subtype: 'Periódico',
    completionDate: '2025-05-01',
    expirationDate: '2026-05-01',
  },
  {
    id: 'doc-2',
    employeeId: 'emp-2',
    type: 'NR',
    subtype: 'NR-35',
    completionDate: '2025-01-10',
    expirationDate: '2026-03-15',
  },
  {
    id: 'doc-3',
    employeeId: 'emp-2',
    type: 'INTEGRACAO',
    subtype: 'Onboarding',
    completionDate: '2026-01-03',
    expirationDate: '2026-12-31',
  },
];
