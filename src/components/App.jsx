import '/src/styles/App.css'
import Nav from "./Nav.jsx";
import List from "./List.jsx";
import Meal from "./Meal.jsx";
import {Route, Routes, Navigate} from "react-router";
function App() {
return(
    <div>
        <Nav/>
        <Routes>
            <Route path={'/'} element={<List/>}/>
            <Route path="/search" element={<Navigate to="/" />} />
            <Route path={'/:idMeal'} element={<Meal/>}/>

        </Routes>




    </div>
)
}

export default App
