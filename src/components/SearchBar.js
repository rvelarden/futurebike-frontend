import React from "react";

import { Card, Icon, Image, Header,Button } from 'semantic-ui-react'

const Search = (props) => {
  return (
    
    
    <div className="search-bar-div" >
      <br></br>
      <br></br>
      <br></br>
      <img style={{ width: "200px", height: "90px", objectFit: "cover" }} className="logo" src="https://cdn.pixabay.com/photo/2014/03/25/15/26/bike-296852_960_720.png"></img>
        
    
      <div className="bannersingle" >
            <h2>Welcome back, Romina!</h2>
        </div>
           
        <div className="bannersingle" >
            <h1>Find Bike Category</h1>
        </div>
        <div className="searchBox" >
          <input
          type="text"
          placeholder={"    Search Category by Parcel (Same Day), Food Delivery"}
          className="searchInput"
          onChange={(e) => props.searchBar(e.target.value)}
          />
        </div>
      
    </div>
  );
};

export default Search;