import React from "react"
import { Link } from "react-router-dom"
import "./Card.css"

export const Card = (props) => {

    return (
        <section className="container-card">
              <Link to={`/recipe/${props.id}`}><img src={props.image} className="card-image" alt="dish" /></Link>
                <div className="card-info">
                    <h3 className="card-name">{props.name}</h3>
                    <h4 className="card-diet">Tipo de dieta: {props.dietType.join(', ').toUpperCase()}</h4>
                    <h4 className="card-score">HealthScore: {props.healthScore}</h4>
                </div>
            </section>
    )
}
