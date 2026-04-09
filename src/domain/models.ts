export type DocumentType = 'ASO' | 'NR' | 'INTEGRACAO';

export interface Employee {
  id: string;
  name: string;
  email: string;
  role: string;
  department: string;
  admissionDate: string;
  active: boolean;
}

export interface ComplianceDocument {
  id: string;
  employeeId: string;
  type: DocumentType;
  subtype: string;
  completionDate: string;
  expirationDate: string;
}

export interface DashboardIndicators {
  activeEmployees: number;
  expiringIn30Days: number;
  expiredDocuments: number;
  complianceRate: number;
}
