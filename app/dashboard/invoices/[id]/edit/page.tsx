import { fetchCustomers, fetchInvoiceById } from '../../../../lib/data';

import { Breadcrumbs } from '../../Breadcrumb';
import { EditInvoiceForm } from './EditInvoiceForm';

type EditInvoicePageProps = {
  params: { id: string };
};

export default async function EditInvoicePage(props: EditInvoicePageProps) {
  const [invoice, customers] = await Promise.all([
    fetchInvoiceById(props.params.id),
    fetchCustomers(),
  ]);

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Edit Invoice',
            href: `/dashboard/invoices/${props.params.id}/edit`,
            active: true,
          },
        ]}
      />
      <EditInvoiceForm invoice={invoice} customers={customers} />
    </main>
  );
}
