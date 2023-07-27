import React, { useState } from "react";
import './style.css';

const Navbar=({ onSearch })=>{
    const [search ,setSearch]=useState("");
    const  input=(event)=>{
        setSearch(event.target.value);
    }
    // const searchbutton=()=>{
    //     onSearch(search);
    // };
    return(
        <div className="Navbar">
            <nav>
                <div>
                    <h1 className="moovie"> M<span>oo</span>vie</h1>
                </div>
                <div className="search">
                    <input type="text" placeholder="Search" value={search} onChange={input}/>
                    
                </div>
                <div className="li">
                    <li>Home</li>
                    <li>About</li>
                    <li>My List</li>
                    <button>Sign in</button>

                </div>
            </nav>
        </div>
    );
   
}
export default Navbar;