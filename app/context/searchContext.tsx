import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

// I used Github Copilot to generete context tamplete, then I modified it to fit my needs
interface SearchContextValue {
  searchTerm: string | undefined;
  setSearchTerm: (term: string) => void;
}

const SearchContext = createContext<SearchContextValue | undefined>(undefined);
export const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearchContext must be used within a SearchContextProvider');
  }
  return context;
};

export const SearchContextProvider = ({ children }: { children: ReactNode }) => {
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState<string | undefined>();

  const search = searchParams.get('q');

  useEffect(() => {
    search && setSearchTerm(search);
  }, [search]);

  const value: SearchContextValue = {
    searchTerm,
    setSearchTerm,
  };

  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
};
