import {useParams} from "react-router";
import {useEffect, useState} from "react";

let listIngredients = [];
function Meal(){

    const {idMeal} = useParams()
    const [details,setDetails] = useState()

    useEffect( () => {
        const  fetches = async () => {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
            const data = await response.json()
            const {strIngredient1} = data.meals[0]
            console.log(strIngredient1)
            setDetails(data)
            console.log(data)

        }catch (err){
                console.error(err)
            }}
            fetches()

    },[idMeal])

    return(


        <div>
            {details ? <h1>{details.meals[0].strMeal}</h1> : null}
            <h2>Ingredients</h2>

            {details ? <img src={details.meals[0].strMealThumb}/> : null}

        </div>
    )
}
export default Meal