import React, {useRef, useState} from "react";
function App() {
    const [show,setShow] = useState('')
    const inputRef = useRef(null)
    const onSubmitHandle = (e) => {
        e.preventDefault()
        setShow(inputRef.current.value)
    }


        return (
    <>
        <form onSubmit={onSubmitHandle}>
            <input ref={inputRef} placeholder={'search for meal'}/>
            <button type="submit">search</button>
        </form>
        <div>{show}</div>
    </>
  )
}

export default App
