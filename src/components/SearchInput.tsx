import React from 'react'
import { useStore } from "../AppContext";
import { SearchIcon } from "./icons";

function SearchInput() {
  const {setSearchValue, searchValue} = useStore();
  return (
    <div className='h-[60px] px-4 border-b border-b-gray-200 flex items-center'>
      <input 
      type="text" 
      placeholder='Search' 
      className='h-full w-full'
      value={searchValue}
      onChange={e => setSearchValue(e.target.value)} />
      <div className='text-gray-400 '>
        <SearchIcon />
      </div>
    </div>
  )
}

export default SearchInput;