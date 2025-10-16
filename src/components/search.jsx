
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
const Search = ({search,setSearch}) => {
   
    return (
        <div className="bg-white w-full flex flex-row items-center  p-5">
            <div className=" w-full flex flex-row items-center bg-white">
                <input className='bg-white rounded-sm w-[80%] text-2xl p-2 text-black border' placeholder="Search in Bazario" value={search} onChange={(e)=>{setSearch(e.target.value)}}></input>
                <button className='rounded-full bg-gray-200 p-2 hover:bg-gray-300'><FontAwesomeIcon className='cursor-pointer text-2xl text-white' icon={faMagnifyingGlass} /></button>
            </div>
            <div className='hidden sm:block'>
                <FontAwesomeIcon className=' text-3xl text-black ' icon={faCartShopping} />
            </div>
  

        </div>
    )
}
export default Search;