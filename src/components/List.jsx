import {useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";
import '/src/styles/List.css'
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
        <form className={'d-flex flex-row justify-content-center'} name={'form'} onSubmit={onSubmitHandle}>
            <input className={'form-control col-7'} ref={inputRef} placeholder={'search for meal'}/>
            <button className={'btn btn-primary'} type="submit">search</button>
        </form>
        <div className={'d-flex flex-wrap col-10 m-3 justify-content-center mx-auto'}>
            {data && data.meals && data.meals.map( (meal) => (
                <Link className={'custom-round flex-column border border-primary col-3 row-cols-3 m-3 justify-content-center '} to={meal.idMeal} key={meal.idMeal}>
                        {meal.strMeal}
                        <img className={'w-100 h-1'} src={meal.strMealThumb}/>
                </Link>
            ))}
            {data && data.meals === null ? <p> no dishes </p> : ""}
        </div>


    </>
)}
export default List