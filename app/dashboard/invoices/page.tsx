import { CreateInvoice } from './Buttons';
import { InvoicesTable } from './InvoicesTable';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Pagination } from './Pagination';
import { Search } from './Search';
import { Suspense } from 'react';
import { fetchInvoicesPages } from '../../lib/data';
import { lusitana } from '@/app/ui/fonts';

type InvoicesPageProps = {
  searchParams?: {
    query?: string;
    page?: string;
  };
};

export default async function InvoicesPage(props: InvoicesPageProps) {
  const query = props.searchParams?.query || '';
  const currentPage = Number(props.searchParams?.page) || 1;
  const totalPages = await fetchInvoicesPages(query);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Invoices</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search invoices..." />
        <CreateInvoice />
      </div>
      <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <InvoicesTable query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
