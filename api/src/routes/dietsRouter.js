const { Router } = require('express')
const { getDiets } = require('../controllers/getApi')

const dietsRoute = Router()

dietsRoute.get("/", async (req, res) => {
    try {
        const diets = await getDiets()
        res.status(200).send(diets)
    } catch (error) {
        res.status(404).send(error)
    }
})


module.exports = { dietsRoute }
