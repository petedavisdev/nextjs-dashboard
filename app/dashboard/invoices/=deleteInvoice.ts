'use server';

import { revalidatePath } from 'next/cache';
import { sql } from '@vercel/postgres';

export async function deleteInvoice(id: string) {
  // test code
  throw new Error('Failed to Delete Invoice');

  try {
    await sql`DELETE FROM invoices WHERE id = ${id}`;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Delete Invoice.',
    };
  }

  revalidatePath('/dashboard/invoices');
}
