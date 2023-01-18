import { ordAlpha, ordScore, dietSort } from "../components/Order/Order"
import { ALL_RECIPES, GET_ALL_RECIPES, GET_RECIPE_BY_NAME, GET_RECIPE_DETAIL, ORD_ALPHA, ORD_ALPHA_REV, RECIPE_BY_DIET, SCORE_SORT, SCORE_SORT_REV } from "./actions"


const initialState = {
    recipes: [],
    recipeDetail: {},
    recipeByName: []
}


export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_RECIPES:
            return { ...state, recipes: action.payload }

        case GET_RECIPE_DETAIL:
            return { ...state, recipeDetail: action.payload }

        case GET_RECIPE_BY_NAME:
            return { ...state, recipeByName: action.payload }

        case ORD_ALPHA:
            return { ...state, recipes: state.recipes.slice().sort(ordAlpha) }

        case ORD_ALPHA_REV:
            return { ...state, recipes: state.recipes.slice().sort(ordAlpha).reverse() }

        case ALL_RECIPES:
            return { ...state, recipes: state.recipes }

        case SCORE_SORT:
            return { ...state, recipes: state.recipes.slice().sort(ordScore) }

        case SCORE_SORT_REV:
            return { ...state, recipes: state.recipes.slice().sort(ordScore).reverse() }

        case RECIPE_BY_DIET:
            return { ...state, recipes: action.payload }

        default: return state
        
    }
}
