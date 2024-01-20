import {useEffect, useRef, useState} from "react";
import Nav from "./Nav.jsx";
import {Link} from "react-router-dom";

function List(){

const [inputValue, setInputValue] = useState('')
const inputRef = useRef(null)
let [data, setData] = useState(null)
async function request() {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`);
        setData(await response.json());
    }catch (err){
        console.error(err);
    }
}


const onSubmitHandle = (e) => {
    e.preventDefault();
    setInputValue(inputRef.current.value);



}
useEffect(() =>{
    request()


},[inputValue])

return (
    <>
        <form name={'form'} onSubmit={onSubmitHandle}>
            <input ref={inputRef} placeholder={'search for meal'}/>
            <button type="submit">search</button>
        </form>
        <div className={'mealsList'}>
            {data && data.meals && data.meals.map( (meal) => (
                <Link className={'meal'} to={meal.idMeal} key={meal.idMeal}>{meal.strMeal}</Link>
            ))}
            {data && data.meals === null ? <p> no dishes </p> : ""}
        </div>


    </>
)}
export default List