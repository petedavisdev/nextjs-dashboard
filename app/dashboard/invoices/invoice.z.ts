import { z } from 'zod';

export const InvoiceSchema = z.object({
  id: z.string(),
  customerId: z.string(),
  amount: z.coerce.number().positive(),
  status: z.string(),
  date: z.string(),
});
