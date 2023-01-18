import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getAllRecipes, getRecipeByName, recipeAlpha, recipeAlphaRev, recipeByDiet, scoreOrder, scoreOrderRev } from "../../redux/actions";
import "./Searchbar.css"

export const Searchbar = () => {

    const [recipe, setRecipe] = useState('')
    const [filter, setFilter] = useState('')
    const [diet, setDiet] = useState('')
    const dispatch = useDispatch()



    const handleOnSearch = (e) => {
        e.preventDefault()
        dispatch(getRecipeByName(recipe))
        setRecipe('')
    }

    useEffect(() => {
        if (filter == "alpha") {
            dispatch(recipeAlpha())
        }
        else if (filter == "all") {
            dispatch(getAllRecipes())
        } else if (filter == "alpha-rev") {
            dispatch(recipeAlphaRev())
        }
        else if (filter == "asc") {
            dispatch(scoreOrder())
        } else if (filter == "desc") {
            dispatch(scoreOrderRev())
        } else if (diet !== '') {
            dispatch(recipeByDiet(diet))
        } else if (diet === '') {
            dispatch(getAllRecipes())
        }
    }, [dispatch, filter, diet])

    console.log(diet);

    return (
        <form className="formulario"
            onSubmit={handleOnSearch}
        >
            <label className="title-search">Search Recipe: <input
                name="searchbar"
                className="searchbar"
                placeholder="Recipe name..."
                type="text"
                value={recipe}
                onChange={event => setRecipe(event.target.value.toLowerCase())}
            />
                <input
                    className="buscar searchbar"
                    type="submit"
                    value="Search"
                />
            </label>



            <select
                className="sorted-alpha searchbar"
                onChange={(e) => setFilter(e.target.value)}
            >
                <option value="" >Select sort</option>
                <option value="all">All recipes</option>
                <option value="alpha"
                >[A - Z]</option>
                <option
                    value="alpha-rev"
                >[Z - A]</option>
            </select>

            <select
                className="sorted-alpha searchbar"
                onChange={(e) => setFilter(e.target.value)}
            >
                <option value="">Select healthScore</option>
                <option value="asc">Ascendent</option>
                <option value="desc">Descendent</option>

            </select>

            <select
                className="searchbar"
                onChange={(e) => setDiet(e.target.value)}
            >
                <option value="">Select diet type</option>
                <option value="gluten free">gluten free</option>
                <option value="dairy free">dairy free</option>
                <option value="lacto ovo vegetarian">lacto ovo vegetarian</option>
                <option value="vegan">vegan</option>
                <option value="paleolithic">paleolithic</option>
                <option value="primal">primal</option>
                <option value="whole 30">whole 30</option>
                <option value="pescatarian">pescatarian</option>
                <option value="ketogenic">ketogenic</option>
                <option value="foodmap friendly">foodmap friendly</option>

            </select>
        </form>
    )
}
