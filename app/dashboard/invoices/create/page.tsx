import { Breadcrumbs } from '../_Breadcrumb';
import { CreateForm } from './_CreateForm';
import { fetchCustomers } from '../../=data';

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
      <CreateForm customers={customers} />
    </main>
  );
}
