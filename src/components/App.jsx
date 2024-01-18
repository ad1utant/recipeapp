import '/src/styles/Meals.css'
import Meals from "./Meals.jsx";
import Nav from "./Nav.jsx";
import {Route, Routes} from "react-router";
import Random from "./Random.jsx";
function App(){
return(
    <div>
        <Nav/>
        <Routes>
            <Route path={'/'} element={<Meals/>}/>
            <Route path={'/meals'} element={<Meals/>}/>
            <Route path={'/random'} element={<Random/>}/>
        </Routes>
    </div>
        )}
export default App