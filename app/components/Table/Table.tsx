'use client';

import { getRepos } from '@/app/api/search';
import { useSearchContext } from '@/app/context/searchContext';
import { useCallback, useEffect, useState } from 'react';

const Table = () => {
  const { searchTerm } = useSearchContext();
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    getRepos(searchTerm).then((res) => {
      res && setData(res.data);
    });
  }, [searchTerm, setData]);

  const timeToDate = useCallback((time: number) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }, []);

  return (
    <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
      <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th scope='col' className='px-6 py-3'>
              <div className='flex items-center'>
                Name
                <a href='#'>
                  <svg className='w-3 h-3 ms-1.5' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z' />
                  </svg>
                </a>
              </div>
            </th>
            <th scope='col' className='px-6 py-3'>
              <div className='flex items-center'>
                Owner
                <a href='#'>
                  <svg className='w-3 h-3 ms-1.5' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z' />
                  </svg>
                </a>
              </div>
            </th>
            <th scope='col' className='px-6 py-3'>
              <div className='flex items-center'>
                Stars
                <a href='#'>
                  <svg className='w-3 h-3 ms-1.5' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z' />
                  </svg>
                </a>
              </div>
            </th>
            <th scope='col' className='px-6 py-3'>
              <div className='flex items-center'>
                Created at
                <a href='#'>
                  <svg className='w-3 h-3 ms-1.5' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z' />
                  </svg>
                </a>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {data ? (
            data.items.map((repo: any) => (
              <tr key={repo.id} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                  {repo.name}
                </th>
                <td className='px-6 py-4'>{repo.owner.login}</td>
                <td className='px-6 py-4'>{repo.stargazers_count}</td>
                <td className='px-6 py-4'>{timeToDate(repo.created_at)}</td>
              </tr>
            ))
          ) : (
            <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
              <th colSpan={4} className='px-6 py-4 font-medium text-gray-700 dark:text-gray-400 whitespace-nowrap text-center '>
                Start searching to display data
              </th>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
