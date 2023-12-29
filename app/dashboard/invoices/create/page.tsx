import { Breadcrumbs } from '../Breadcrumb';
import { Form } from './Form';
import { fetchCustomers } from '@/app/lib/data';

export default async function CreateInvoicePage() {
  const customers = await fetchCustomers();

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Create Invoice',
            href: '/dashboard/invoices/create',
            active: true,
          },
        ]}
      />
      <Form customers={customers} />
    </main>
  );
}
