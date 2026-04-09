import { z } from 'zod';

export const employeeSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(3),
  email: z.string().email(),
  role: z.string().min(2),
  department: z.string().min(2),
  admissionDate: z.string().date(),
  active: z.boolean(),
});

export const documentSchema = z.object({
  id: z.string().min(1),
  employeeId: z.string().min(1),
  type: z.enum(['ASO', 'NR', 'INTEGRACAO']),
  subtype: z.string().min(2),
  completionDate: z.string().date(),
  expirationDate: z.string().date(),
});
