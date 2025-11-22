import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Search = ({ search, setSearch }) => {
    return (
        <div className="w-full flex flex-row items-center p-5 bg-white shadow-md">
            <div className="w-full flex flex-row items-center bg-white border rounded-md overflow-hidden">
                <input
                    className="w-4/5 p-2 text-black text-lg border-none outline-none"
                    placeholder="Search in Bazario"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button className="bg-blue-500 hover:bg-blue-600 p-2 flex items-center justify-center">
                    <FontAwesomeIcon className="text-white text-xl" icon={faMagnifyingGlass} />
                </button>
            </div>
            <div className='hidden sm:block ml-4'>
                <FontAwesomeIcon className='text-3xl text-blue-600 hover:text-blue-700 cursor-pointer' icon={faCartShopping} />
            </div>
        </div>
    )
}

export default Search;
