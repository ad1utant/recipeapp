import {useEffect, useRef, useState} from "react";
function App() {
    const [inputValue, setInputValue] = useState('')
    const inputRef = useRef(null)
    let [data, setData] = useState(null)
    async function request() {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`);
            setData(await response.json());
            console.log(data)
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
        {data && data.meals && data.meals.map( (meal) => (
            <p key={meal.idMeal}>{meal.strMeal}</p>
        ))}
        {data && data.meals === null ? <p> no dishes </p> : ""}



    </>
  )
}

export default App
