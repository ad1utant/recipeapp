import {useParams} from "react-router";
import {useEffect, useState} from "react";

function Meal(){
    const {idMeal} = useParams()
    const [details,setDetails] = useState()
    let [ingredients,setIngredients] = useState([]);

    useEffect( () => {
        const  fetches = async () => {
        try {
            let array = []
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
            const data = await response.json()
            for(let i = 0 ; i<=20 ; i++){
                array.push(data.meals[0][`strIngredient${i}`])
            }
            console.log(ingredients)
            setIngredients(array)
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
            {ingredients.map((ingredient,index) => (
                <h3 key={index}>{ingredient}</h3>
            ))}

            {details ? <img src={details.meals[0].strMealThumb}/> : null}

        </div>
    )
}
export default Meal