import {useParams} from "react-router";
import {useEffect, useState} from "react";
import '../styles/Meal.css'

function Meal(){
    const {idMeal} = useParams();
    const [details,setDetails] = useState();
    const [ingredients,setIngredients] = useState([]);
    const [measures,setMeasures] = useState([]);
    const [instructions, setInstructions] = useState();
    useEffect( () => {
        const  fetches = async () => {
        try {
            let arrayIngredients = [];
            let arrayMeasures = [];
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
            const data = await response.json();
            for(let i = 0 ; i<=20 ; i++){
                arrayIngredients.push(data.meals[0][`strIngredient${i}`]);
                arrayMeasures.push(data.meals[0][`strMeasure${i}`]);
            }
            const {strInstructions} = data.meals[0];
            setInstructions(strInstructions);
            console.log(ingredients);
            setIngredients(arrayIngredients);
            setMeasures(arrayMeasures);
            setDetails(data);
            console.log(data);

        }catch (err){
                console.error(err);
            }}
            fetches();

    },[idMeal])

    return(


        <div>
            {details ? <h1>{details.meals[0].strMeal}</h1> : null}
            <h2>Instructions</h2>
            <pre className={"preformatted-text"}>{instructions}</pre>
            <h2>Ingredients</h2>
            <ul>
            {ingredients.map((ingredient,index) => (
                ingredient ? <li key={`${index}ing`}>{ingredient} - {measures[index]}</li> : null
            ))}

            {details ? <img src={details.meals[0].strMealThumb}/> : null}
            </ul>

        </div>
    )
}
export default Meal