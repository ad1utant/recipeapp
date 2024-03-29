import {useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";
import '/src/styles/List.css'
import Slider from "./Slider.jsx";

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
    <div className={'col-12'}>
        <Slider/>
        <div className={'col-12'}>


            <form className={'col-12 d-flex m-0 p-0'} name={'form'} onSubmit={onSubmitHandle}>
                <input className={'form-control custom-inp radius-custom'} ref={inputRef} placeholder={'search for meal'}/>
                <button className={'btn btn-dark radius-custom'} type="submit">search</button>
            </form>

            <div className={'d-flex row m-0 p-0 col-12'}>
                {data && data.meals && data.meals.map( (meal) => (
                <div key={meal.idMeal} className={'p-2 col-lg-3 col-md-4 col-sm-6 col-xs-12'}>
                    <Link className={'custom-border flex-column m-0 p-0  text-decoration-none justify-content-center col-12'} to={meal.idMeal} >
                            <img className={'image-custom col-12'} src={meal.strMealThumb}/>
                            <div className={'text-center pt-2 pb-2 bg-light div-border'}>{meal.strMeal}</div>
                    </Link>
                </div>
                ))}
                {data && data.meals === null ? <p> no dishes </p> : ""}
            </div>


        </div>
    </div>
)}
export default List