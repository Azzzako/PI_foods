import React from "react";
import "./LandingPage.css"
import { Link } from "react-router-dom";


export const LandingPage = () => {
    return (
        <div className="container-landing">
        <h1 className="saludo">Bienvenido</h1>

        <div className="contain-mensaje">
        <h2 className="mensaje">Este es un espacio dedicado a toda la gente que gusta del buen comer<br/>
        Contamos con distintas recetas que te haran tener la mejor velada<br/>
        Esperamos encuentres la indicada.
        </h2>
        </div>
        <Link to="/home">
        <button className="boton">Ver recetas</button>
        </Link>
        </div>
    )
}
