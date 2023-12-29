import { fetchCustomers, fetchInvoiceById } from '../../../=data';

import { Breadcrumbs } from '../../_Breadcrumb';
import { EditInvoiceForm } from './_EditInvoiceForm';
import { notFound } from 'next/navigation';

type EditInvoicePageProps = {
  params: { id: string };
};

export default async function EditInvoicePage(props: EditInvoicePageProps) {
  const [invoice, customers] = await Promise.all([
    fetchInvoiceById(props.params.id),
    fetchCustomers(),
  ]);

  if (!invoice) {
    notFound();
  }

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
