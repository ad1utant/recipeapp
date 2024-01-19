import {Link} from "react-router-dom";
import '/src/styles/Nav.css'
function Nav(){
    return(
        <nav>
            <div className={'nav-items'}>
                <div className={'first-child'}>
                    <Link to={'/categorise'}>Categories</Link>
                    <Link to={'/random'}>Random Meal</Link>
                    <Link to={'/search'}>Search</Link>
                </div>
                <div className={'last-child'}>
                    <Link to={'/about'}>About</Link>
                    <Link to={'/login'}>Login</Link>
                </div>
            </div>
        </nav>
    )
}
export default Nav