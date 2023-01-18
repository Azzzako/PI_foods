const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {foodRouter} = require('../routes/foodRouter')
const {dietsRoute} = require("./dietsRouter")

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/recipe", foodRouter)
router.use("/diets", dietsRoute)

module.exports = router;
