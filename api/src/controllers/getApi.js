// const { API_KEY } = process.env
const axios = require('axios')
const { Recipe, Diet } = require('../db')
const { API_KEY } = process.env


const getApi = async () => {
    const info = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=200`, { headers: { "Accept-Encoding": "gzip,deflate,compress" } })
    const apiData = info.data.results.map(e => {
        return {
            id: e.id,
            name: e.title,
            dishTypes: e.dishTypes,
            dietType: e.diets,
            summary: e.summary,
            healthScore: e.healthScore,
            steps: e.analyzedInstructions.reduce((acc, ele) => {
                ele.steps.map(e2 => { acc.push(e2.step) })
                return acc
            }, []),
            image: e.image,
        }
    })
    return apiData
}

const getRecipes = async () => {
    const recipes = await getApi()
    const recipeDB = await Recipe.findAll()
    const allRecipes = [...recipeDB, ...recipes]
    return allRecipes
}

const getDiets = async () => {
    const apiDiets = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=99`, { headers: { "Accept-Encoding": "gzip,deflate,compress" } })
    const diets = apiDiets.data.results.map(e => {
        return e.diets
    })
    const dietDB = await Diet.findAll()
    const diets2 = diets.flat()
    const diets3 = new Set(diets2)
    const diets4 = [...diets3]
    const diets5 = [...diets4, ...dietDB]

    return {
        diets: diets5
    }

}




module.exports = { getRecipes, getDiets }
