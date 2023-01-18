import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getRecipeDetail } from "../../redux/actions"
import "./DetailCard.css"
import { Loader } from "../Loader/Loader"
import { Navbar } from "../Navbar/Navbar"


export const DetailCard = () => {

    const { id } = useParams()
    const dispatch = useDispatch()
    const [load, setLoad] = useState(true)

    useEffect(() => {
        dispatch(getRecipeDetail(id))
        setTimeout(() => {
            setLoad(false)
        }, 3000)
    }, [id, dispatch])

    const detailRecipe = useSelector(state => state.recipeDetail)

    return (
        <div>
            <Navbar />

            {load ? (
                <div className="loader-container"><Loader /></div>

            ) :
                <div className="contenedor_de_receta">

                    <h1 className="nombre_receta">{detailRecipe.name}</h1>
                    <img src={detailRecipe.image} alt={detailRecipe.name} className="imagen_receta" />
                    <p className="diet_type">Dish type: {detailRecipe.dishTypes}</p>
                    <p className="score">HealthScore: {detailRecipe.healthScore}</p>

                    <div className="summary">
                        <p>{`${detailRecipe.summary}`}</p>
                    </div>
                    <h1 className="score">How To Prepare</h1>
                    <div className="paso_a_paso">
                        {detailRecipe.steps?.map(step => {
                            return <div className="contenedor1">
                                <ul className="lista_de_pasos">
                                    <li
                                        key={step}
                                        className="pasos"
                                    >🧂 {step}</li>
                                </ul>
                            </div>
                        })}
                    </div>
                </div>
            }
        </div>
    )

}
