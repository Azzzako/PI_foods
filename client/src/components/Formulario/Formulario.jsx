import React from "react";
import { useState } from "react";
import { useDispatch } from 'react-redux'
import { createRecipe } from "../../redux/actions";
import { Navbar } from "../Navbar/Navbar";
import "./Formulario.css"

export const Form = () => {

    const dispatch = useDispatch()

    const [dataForm, setDataForm] = useState({
        name: "",
        summary: "",
        healthScore: "",
        steps: "",
        dietType: "",
    });


    const setDataHandler = (e) => {
        e.preventDefault();
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value,
        });
    };

    const submitForm = (e) => {
        e.preventDefault()
        let form = false

        if (!dataForm.name) {
            return alert("insert name recipe")
        } else if (!dataForm.summary) {
            return alert("insert summary")
        } else if (!dataForm.healthScore || dataForm.healthScore < 0 || dataForm.healthScore > 100) {
            return alert("Healthscore only 1 to 100")
        } else if (!dataForm.steps) {
            return alert("Preparation pls")
        } else if (!dataForm.dietType) {
            return alert("Select diet type")
        } else {
            dataForm.steps = [dataForm.steps]
            dataForm.dietType = [dataForm.dietType]
            form = true
        }

        if (form) {
            dispatch(createRecipe(dataForm))
                .then(() => alert("Recipe added"))
            setDataForm({
                name: "",
                summary: "",
                healthScore: "",
                steps: "",
                dietType: "",
            })
        }

    }



    console.log(dataForm);

    return (

        <div>

            <Navbar />
            <section>

                <form action="" className="create-form" onSubmit={(e) => submitForm(e)}>
                    <h1 className="title-form">Create your own recipe</h1>
                    <label >Recipe name:</label>
                    <input value={dataForm.name} type="text" name="name" id="name" onChange={setDataHandler} />

                    <label >Summary:</label>
                    <textarea value={dataForm.summary} type="text" name="summary" id="summary" onChange={setDataHandler} />

                    <label >Health Score:</label>
                    <input placeholder="insert 1 to 100" value={dataForm.healthScore} type="number" name="healthScore" id="healthScore" onChange={setDataHandler} />

                    <label >Preparation:</label>
                    <input value={dataForm.steps} type="text" name="steps" id="steps" onChange={setDataHandler} />

                    <label >Diet Type:</label>
                    <select name="dietType" value={dataForm.dietType} onChange={setDataHandler}>
                        <option value=''>Select Diet</option>
                        <option value='gluten free'>gluten free</option>
                        <option value='dairy free'>dairy free</option>
                        <option value='lacto ovo vegetarian'>lacto ovo vegetarian</option>
                        <option value='vegan'>vegan</option>
                        <option value='paleolithic'>paleolithic</option>
                        <option value='primal'>primal</option>
                        <option value='whole 30'>whole 30</option>
                        <option value='pescatarian'>pescatarian</option>
                        <option value='ketogenic'>ketogenic</option>
                        <option value='foodmap friendly'>foodmap friendly</option>
                    </select>

                    <input
                        className="create-button"
                        type="submit"
                    ></input>

                </form>
            </section>
        </div>
    )
}
