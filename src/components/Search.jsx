import { useState } from 'react';
const tiers = ["All", "Platinum", "Gold", "Silver", "In-Kind"]

const Search = ({query, setQuery, tier, setTier}) => {

  const handleClear = () => {
    setQuery('');
  };


  return (
    <>
    <div className="flex flex-col lg:flex-row gap-6 justify-between items-center w-full max-w-7xl mx-auto p-4">
 
    <div className="w-full lg:w-5/9 hover:shadow-lg transition-shadow duration-300">
    <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-md bg-white overflow-hidden border border-gray-200 focus-within:border-indigo-500 transition-all duration-300">
      
      <div className="grid place-items-center h-full w-12 text-gray-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      <input
        className="peer h-full w-full outline-none text-sm text-gray-700 pr-10 placeholder-gray-400"
        type="text"
        id="search"
        placeholder="Search sponsors, partners..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

     
      {query && (
        <button
          onClick={handleClear}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </div>
  </div>

  <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap lg:flex-nowrap gap-3 lg:gap-6 w-full lg:w-auto justify-center lg:justify-end">
    {tiers.map((t)=>(
      <button
      key={t}
      onClick={()=> setTier(t)}
      className='bg-gray-900 border border-amber-50 rounded text-amber-50 px-4 py-2 text-lg font-medium hover:bg-gray-800 transition-colors duration-200 min-w-90px text-center cursor-pointer'
      >
        {t}

      </button>
    ) )
    }
    
  </div>
</div>
    </>
  );
};

export default Search;