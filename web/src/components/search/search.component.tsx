import { ChangeEvent, useState } from 'react';
import { debounce } from '../../helpers/debounce';
import { useSearchState } from '../../state/search.state';
import './search.scss';

function SearchComponent() {

    const { searchTerm, updateSearchTearm } = useSearchState();
    const [search, setSearch] = useState<string>(searchTerm);

    function onChnage(e: ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        setSearch(value);
        debounce<string>(updateSearchTearm, value, 200);
    }

    return (
        <div className='search-container'>
            <input
                value={search}
                onChange={onChnage}
                className='search'
                type="text"
                placeholder='Search for a service' />
        </div>
    )
}

export default SearchComponent;