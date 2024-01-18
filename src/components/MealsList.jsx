import {Link} from "react-router-dom";

function MealsList(props){

    return(
        <div className={'mealsList'}>
            {props.data && props.data.meals && props.data.meals.map( (meal) => (
                <Link className={'meal'} to={meal.idMeal} key={meal.idMeal}>{meal.strMeal}</Link>
            ))}
            {props.data && props.data.meals === null ? <p> no meals </p> : ""}
        </div>
    )
}
export default MealsList