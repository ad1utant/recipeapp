import '../styles/Nav.css'
import {NavLink} from "react-router-dom";
function Nav(){
    return(
        <div className={'container'}>
            <NavLink to={'/meals'}>
                Search for meal
            </NavLink>
            <NavLink to={'/random'}>
                Random meal
            </NavLink>

        </div>
    )
}

export default Nav