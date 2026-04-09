import { describe, expect, it } from 'vitest';
import { calculateIndicators } from '../services/dashboard.service';
import { documents, employees } from '../services/mock-data';

describe('calculateIndicators', () => {
  it('returns the expected compliance dashboard numbers', () => {
    const result = calculateIndicators(employees, documents);

    expect(result.activeEmployees).toBe(2);
    expect(result.expiringIn30Days).toBe(1);
    expect(result.expiredDocuments).toBe(1);
    expect(result.complianceRate).toBe(67);
  });
});
