'use client';

import { SearchContextProvider } from './context/searchContext';

export function Providers({ children }: { children: React.ReactNode }) {
  return <SearchContextProvider>{children}</SearchContextProvider>;
}
