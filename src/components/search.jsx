
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Search = () => {

    return (
        <div className="bg-white w-full flex flex-row items-center justify-around p-5">
            <div className="flex flex-row items-center bg-white">
                <input className='bg-white rounded-sm text-2xl p-2 text-black border' placeholder="Search"></input>
                <button><FontAwesomeIcon className='cursor-pointer text-2xl' icon={faMagnifyingGlass} /></button>
            </div>
            <div className='hidden sm:block'>
                <FontAwesomeIcon className=' text-3xl text-black ' icon={faCartShopping} />
            </div>
  

        </div>
    )
}
export default Search;