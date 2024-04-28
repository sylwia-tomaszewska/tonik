import { Suspense } from 'react';
import SearchInput from './components/SearchInput/SearchInput';
import Table from './components/Table/Table';
import { Providers } from './providers';

export default function Home() {
  return (
    <main className='d-flex p-28 bg-gray-20 dark:bg-gray-900 min-h-screen'>
      <Providers>
        <Suspense>
          <SearchInput />
        </Suspense>
        <Table />
      </Providers>
    </main>
  );
}
