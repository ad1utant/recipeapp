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
        <form className={'d-flex flex-row justify-content-center mt-3'} name={'form'} onSubmit={onSubmitHandle}>
            <input className={'form-control col-7'} ref={inputRef} placeholder={'search for meal'}/>
            <button className={'btn btn-dark'} type="submit">search</button>
        </form>
        <div className={'d-flex flex-wrap col-10 m-3 justify-content-center mx-auto'}>
            {data && data.meals && data.meals.map( (meal) => (
                <Link className={' custom-border flex-column p-0 m-3 justify-content-center'} to={meal.idMeal} key={meal.idMeal}>
                        <img className={'image-custom w-100 h-1'} src={meal.strMealThumb}/>
                        <p className={'text-center'}>{meal.strMeal}</p>
                </Link>
            ))}
            {data && data.meals === null ? <p> no dishes </p> : ""}
        </div>


    </>
)}
export default List