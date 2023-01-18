import axios from "axios"
export const GET_ALL_RECIPES = "GET_ALL_RECIPES"
export const GET_RECIPE_DETAIL = "GET_RECIPE_DETAIL"
export const GET_RECIPE_BY_NAME = "GET_RECIPE_BY_NAME"
export const ORD_ALPHA = "ORD_ALPHA"
export const ORD_ALPHA_REV = "ORD_ALPHA_REV"
export const ALL_RECIPES = "ALL_RECIPES"
export const SCORE_SORT = "SCORE_SORT"
export const SCORE_SORT_REV = "SCORE_SORT_REV"
export const RECIPE_BY_DIET = "RECIPE_BY_DIET"


export const getAllRecipes = () => {
    return async function (dispatch) {
        return fetch(`http://localhost:3001/recipe`)
            .then(res => res.json())
            .then(data => dispatch({
                type: GET_ALL_RECIPES,
                payload: data
            }))
    }
}


export const getRecipeDetail = (id) => {
    return async function (dispatch) {
        const response = await axios.get(`http://localhost:3001/recipe/${id}`)
        return dispatch({
            type: GET_RECIPE_DETAIL,
            payload: response.data[0]
        })
    }
}


export const getRecipeByName = (name) => {
    return async function (dispatch) {
        return fetch(`http://localhost:3001/recipe?name=${name}`)
            .then(res => res.json())
            .then(data => dispatch({
                type: GET_RECIPE_BY_NAME,
                payload: data
            }))
    }
}


export const recipeByDiet = (diet) => {
    return async function (dispatch) {
        return fetch(`http://localhost:3001/recipe`)
            .then(res => res.json())
            .then(data => data.filter(recipes => recipes.dietType.includes(diet.toLowerCase())))
            .then(res => dispatch({
                type: RECIPE_BY_DIET,
                payload: res
            }))
    }
}


export const recipeAlpha = () => {
    return {
        type: ORD_ALPHA
    }
}

export const recipeAlphaRev = () => {
    return {
        type: ORD_ALPHA_REV
    }
}

export const allRecipes = () => {
    return {
        type: ALL_RECIPES
    }
}

export const scoreOrder = () => {
    return {
        type: SCORE_SORT
    }
}

export const scoreOrderRev = () => {
    return {
        type: SCORE_SORT_REV
    }
}



export function createRecipe(recipe) {
    return async function () {
        try {
            const newRecipe = await axios.post(
                "http://localhost:3001/recipe",
                recipe
            );
            console.log(newRecipe);
        } catch (error) {
            return error
        }
    };
}
