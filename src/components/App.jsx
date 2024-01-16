import {useRef, useState} from "react";
function App() {
    const [inputValue,setInputValue] = useState('')
    const inputRef = useRef(null)
    let data = {}

    async function request() {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)
            data = await response.json()
            console.log(data)

        }catch (err){
            console.error(err)
        }
    }


    const onSubmitHandle = (e) => {
        e.preventDefault()
        setInputValue(inputRef.current.value)
        request()
    }


        return (
    <>
        <form onSubmit={onSubmitHandle}>
            <input ref={inputRef} placeholder={'search for meal'}/>
            <button type="submit">search</button>
        </form>




    </>
  )
}

export default App
