import {useEffect, useState} from "react";
import '../styles/Random.css'
function Random(){
    const [details,setDetails] = useState();
    const [ingredients,setIngredients] = useState([]);
    const [measures,setMeasures] = useState([]);
    const [instructions, setInstructions] = useState();
    const  fetches = async () => {
        try {
            let arrayIngredients = [];
            let arrayMeasures = [];
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`);
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
    const handleButtonClick =  () => {
        fetches()
    }

    useEffect( () => {
        fetches();
    },[])


    return(

        <div className={'row m-0 p-4 justify-content-center col-12 gap-0'}>
            <div className={'col-lg-6 col-xs-12 col-sm-12 col-md-6 pe-md-2 pe-lg-2 pe-sm-0 pe-0 ps-0'}>
                <div className={'grid-item text-center bg-light round-corners-img-title pt-2 ps-0 pe-0'}>
                    {details ? <h2>{details.meals[0].strMeal}</h2> : null}
                    {details ? <img className={'img-fluid col-12'} src={details.meals[0].strMealThumb}/> : null}
                </div>
            </div>

            <div className={'col-xs-12 col-sm-12 col-md-6 col-lg-6 ps-sm-0 ps-0 ps-lg-2 ps-md-2 pe-0 mt-sm-4 mt-4 mt-lg-0 mt-md-0'}>
                <div className={'grid-item ps-lg-2 ps-md-2 height bg-light round-corners'}>
                    <div className={'text-center p-0 m-0'}>
                        <h2>Ingredients</h2>
                    </div>
                    <ul>
                        {ingredients.map((ingredient,index) => (
                            ingredient ? <li key={`${index}ing`}>{ingredient} - {measures[index]}</li> : null
                        ))}
                    </ul>
                </div>
            </div>

            <div className={'col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-4 m-lg-4 p-0 bg-light round-corners'}>
                <div className={'grid-item p-4'}>
                    <h2>Instructions</h2>
                    <pre className={"preformatted-text"}>{instructions}</pre>
                </div>
            </div>

            <button onClick={handleButtonClick} className={'btn btn-dark round-corners col-sm-12 col-xs-12 col-md-12 col-lg-12 mt-4 mt-lg-1'}>
                next meal
            </button>

        </div>

    )
}
export default Random