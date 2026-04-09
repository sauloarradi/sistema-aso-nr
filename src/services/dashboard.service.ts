import type { ComplianceDocument, DashboardIndicators, Employee } from '../domain/models';

const today = new Date('2026-04-07');

const daysFromToday = (dateValue: string): number => {
  const target = new Date(`${dateValue}T00:00:00`);
  const diff = target.getTime() - today.getTime();

  return Math.ceil(diff / (1000 * 60 * 60 * 24));
};

export const calculateIndicators = (
  employees: Employee[],
  documents: ComplianceDocument[],
): DashboardIndicators => {
  const activeEmployees = employees.filter((employee) => employee.active).length;
  const expiringIn30Days = documents.filter((document) => {
    const days = daysFromToday(document.expirationDate);
    return days >= 0 && days <= 30;
  }).length;

  const expiredDocuments = documents.filter(
    (document) => daysFromToday(document.expirationDate) < 0,
  ).length;

  const validDocuments = documents.length - expiredDocuments;
  const complianceRate = documents.length ? Math.round((validDocuments / documents.length) * 100) : 0;

  return {
    activeEmployees,
    expiringIn30Days,
    expiredDocuments,
    complianceRate,
  };
};
