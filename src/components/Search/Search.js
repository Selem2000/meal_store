import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import "./search.css"

const Search = ({setSearch}) => {
    const [input, setInput] = useState('')
    return (
        <div className='search'>
            <input placeholder='search' onChange={(e)=>setInput(e.target.value)} value={input}/>
            <FontAwesomeIcon icon={faSearch} style={{color:'#333',cursor: "pointer"}} onClick={()=>{
                setSearch(input)
                setInput("")
            }} />
        </div>
    )
}

export default Search
