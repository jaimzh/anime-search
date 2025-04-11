import React from 'react'

function Search({searchTerm, setTheSearchTerm}) {
  return (
   <div className="search">
    <div >
    <img src="Search.svg" alt="search" />
    <input type="text" placeholder="Search  for an anime..." value={searchTerm} onChange={e=>{setTheSearchTerm(e.target.value)}} />
    </div>

   </div>
  )
}

export default Search