import '/src/styles/App.css'
import Nav from "./Nav.jsx";
import List from "./List.jsx";
import Meal from "./Meal.jsx";
import {Route, Routes} from "react-router";
function App() {
return(
    <div>
        <Nav/>
        <Routes>
            <Route path={'/:idMeal'} element={<Meal/>}/>
        </Routes>



        <List/>
    </div>
)
}

export default App
