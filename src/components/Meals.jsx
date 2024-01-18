import {useEffect, useRef, useState} from "react";
import '/src/styles/Meals.css'
import {Link} from "react-router-dom";
import Meal from "./Meal.jsx";
import MealsList from "./MealsList.jsx";

function Meals() {
    const [inputValue, setInputValue] = useState('')
    const inputRef = useRef(null)
    let [data, setData] = useState(null)
    async function request() {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`);
            setData(await response.json());
            await console.log(data)
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
    <div>

        <form name={'form'} onSubmit={onSubmitHandle}>
            <input ref={inputRef} placeholder={'search for meal'}/>
            <button type="submit">search</button>
        </form>
        <MealsList data = {data} />
        <Meal data = {data}/>



    </div>
  )
}

export default Meals
