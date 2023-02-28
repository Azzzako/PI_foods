import React from "react";
import { Cards } from "../Cards/Cards";
import { Navbar } from "../Navbar/Navbar";

export const Home = ({setCurrentPage}) => {

    return (
        <div>
            <Navbar/>
          <Cards
          setCurrentPage={setCurrentPage}
          />  
        </div>
        
    )
}
