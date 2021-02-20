import './search.scss';

function SearchComponent() {
    return(
        <div className='search-container'>
            <input className='search' type="text" placeholder='Search for a service'/>
        </div>
    )
}

export default SearchComponent;