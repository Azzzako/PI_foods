import React from "react";
import "./LandingPage.css"
import { Link } from "react-router-dom";


export const LandingPage = () => {
    return (
        <div className="container-landing">
        <h1 className="saludo">Hi, Chef!</h1>

        <div className="contain-mensaje">
        <h2 className="mensaje">Welcome to<br/>
        the food recipe book <br/>
        Please, enjoy your meel
        </h2>
        </div>
        <Link to="/home">
        <button className="boton">View Recipes</button>
        </Link>
        </div>
    )
}
