const { Router } = require('express')
const { getRecipes } = require('../controllers/getApi')
const { Recipe, Diet } = require('../db')

const foodRouter = Router()

//Ruta que realiza un GET de todas las recetas, si en query se le pasa un name traerme solo las recetas que coincidan con ese name
foodRouter.get("/", async (req, res) => {
    const info = await getRecipes()
    const { name } = req.query
    if (name) {
        const nameRecipe = info.filter(recipe => recipe.name.toLowerCase().includes(name.toLowerCase()))
        nameRecipe.length ?
            res.status(200).send(nameRecipe) :
            res.status(404).json({ error: 'No hay recetas con ese nombre' })
    } else {
        res.status(200).send(info)
    }
})

//Ruta que realiza un GET si se le pasa por params el ID
foodRouter.get("/:id", async (req, res) => {
        const info = await getRecipes()
        const { id } = req.params
        if (id) {
            let idRecipe = info.filter(recipe => recipe.id == id)
            res.status(200).send(idRecipe)
        }
})


foodRouter.post("/", async (req, res) => {
    const { name, summary, healthScore, steps, dietType, dietId } = req.body

    if (!name || !summary || !healthScore || !steps || !dietType) {
        res.status(500).json({
            msg: "Tienes que completar todos los campos"
        })
    }
    const newRecipe = await Recipe.create({
        name,
        summary,
        healthScore,
        steps,
        dietType,
        dietId,
        image: "https://images.pexels.com/photos/8844888/pexels-photo-8844888.jpeg?auto=compress&cs=tinysrgb&w=321&h=352&dpr=1"
    })
    const dieta = await Diet.create({
        diet: dietType,
        dietId
    })
    newRecipe.addDiet(dieta)
    res.status(200).send(newRecipe)
})

module.exports = { foodRouter }
