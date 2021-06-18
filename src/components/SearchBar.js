import React from "react";

import { Card, Icon, Image, Header,Button } from 'semantic-ui-react'

const Search = (props) => {
  return (
    
    
    <div className="search-bar-div" >
      <br></br>
      <br></br>
      <br></br>
      <img style={{ width: "90px", height: "90px", objectFit: "cover" }} className="logo" src="https://i.pinimg.com/originals/2e/d1/15/2ed115c13891fd913afe5d2f32dfa85f.jpg"></img>
        
    
      <div className="bannersingle" >
            <h2>Welcome back, Romina!</h2>
        </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
      <div className="bannersingle" >
            <h1>Find Bike Category</h1>
        </div>
      <div className="searchBox" >
        <input
         type="text"
         placeholder={"Search Category by Industrial, Small Business or Personal"}
         className="searchInput"
         onChange={(e) => props.searchBar(e.target.value)}
        />
      </div>
      
    </div>
  );
};

export default Search;