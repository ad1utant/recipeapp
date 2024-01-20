import {useParams} from "react-router";

function Meal(){
    const {idMeal} = useParams()
    return(
        <h1>:{idMeal}</h1>
    )
}
export default Meal