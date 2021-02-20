import create from 'zustand'


export type SearchState  = {
    searchTerm: string;
    updateSearchTearm: (input: string) => void;
}

export const useSearchState = create<SearchState>(set => ({
     searchTerm: '',
    updateSearchTearm: (input: string) => set((state) => ({...state,  searchTerm: input}))
}));
