import "./Cards.css"
import React, { useState } from "react";
import { getAllRecipes } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Card } from "../Card/Card";
import { Paginacion } from "../Paginacion/Paginacion";
import { Searchbar } from "../Searchbar/Searchbar";
import { Loader } from "../Loader/Loader";

export const Cards = () => {

    //Despachando la accion para traernos todas las recetas
    const dispatch = useDispatch()
    const recetas = useSelector((state) => state.recipes)
    const recipeByName = useSelector((state) => state.recipeByName)
    
    const [load, setLoad] = useState(true)

    useEffect(() => {
        dispatch(getAllRecipes())
        setTimeout(() => {
        setLoad(false)
    }, 3000)
    }, [dispatch])

    

    //Paginacion
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage, setPostPerPage] = useState(8)

    const recipeLength = recetas.length
    const recipeByNameLength = recipeByName.length
    const lastPostIndex = currentPage * postPerPage
    const firstPostIndex = lastPostIndex - postPerPage

    let recipe
    if (recipeByNameLength > 0) {
        recipe = recipeByName.slice(firstPostIndex, lastPostIndex)
    } else {
        recipe = recetas.slice(firstPostIndex, lastPostIndex)
    }


    return (

        <>
            
        <div className="search-container">
            <Searchbar
            />
        </div>
        {load ? (
            <div className="loader-container"><Loader/></div>
            
        ) : 
        <div className="Cards">
            {recipe.map(info => {
                return <Card
                    key={info.id}
                    id={info.id}
                    name={info.name}
                    dietType={info.dietType}
                    dishTypes={info.dishTypes}
                    healthScore={info.healthScore}
                    image={info.image}
                    summary={info.summary}
                    steps={info.steps}
                />
            })}
        </div>
}
        <div className="button-page">
            <Paginacion
                totalPosts={recipeByName.length ? recipeByNameLength : recipeLength
                }
                postPerPage={postPerPage}
                setCurrentPage={setCurrentPage}
            />  
        
        </div>

          </>
            
    )
}
