import React from 'react'
import "../styles/Search.css";

function Search() {
    return (
        <div className="search">
            <input type="text" placeholder="Search"></input>
            <button type="submit"> <i class="fa fa-search"> </i></button>
        </div>
    )
}

export default Search