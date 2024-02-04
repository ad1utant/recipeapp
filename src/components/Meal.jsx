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

        <div className={'row m-0 p-4 justify-content-center'}>
            <div className={'me-md-2 col-lg-4 col-xs-12 col-sm-12 col-md-5 text-center ml bg-light round-corners-img-title pt-2 p-0'}>
                {details ? <h2>{details.meals[0].strMeal}</h2> : null}
                    {details ? <img className={'img-fluid'} src={details.meals[0].strMealThumb}/> : null}
            </div>

            <div className={'ms-md-2 col-xs-12 col-lg-7 col-md-6 col-sm-12 mt-4 mt-sm-4 mt-md-0 mt-lg-0 p-2 bg-light height round-corners'}>
                <div className={'text-center'}>
                    <h2>Ingredients</h2>
                </div>
                <ul>
                    {ingredients.map((ingredient,index) => (
                            ingredient ? <li key={`${index}ing`}>{ingredient} - {measures[index]}</li> : null
                    ))}
                </ul>
            </div>

            <div className={'col-xs-12 col-sm-12 col-md-12 col-lg-11 mt-4 p-3 bg-light round-corners'}>
                <h2>Instructions</h2>
                <pre className={"preformatted-text"}>{instructions}</pre>
            </div>

        </div>
    )
}
export default Meal