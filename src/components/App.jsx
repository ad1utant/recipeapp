import '/src/styles/App.css'
import Nav from "./Nav.jsx";
import List from "./List.jsx";
import Meal from "./Meal.jsx";
import {Route, Routes, Navigate} from "react-router";
import Categories from "./Categories.jsx";
import Random from "./Random.jsx";
function App() {
return(
    <div>
        <Nav/>
        <Routes>
            <Route path={'/'} element={<List/>}/>
            <Route path={"/categories"} element={<Categories/>}/>
            <Route path={"/random"} element={<Random/>}/>
            <Route path={'/:idMeal'} element={<Meal/>}/>
            <Route path="/search" element={<Navigate to="/" />} />
        </Routes>




    </div>
)
}

export default App
