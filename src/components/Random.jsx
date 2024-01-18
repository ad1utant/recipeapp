import {useEffect, useState} from "react";

function Random(){
    const [randomData, setRandomData] = useState()

    async function request(){
        try {

            const response = await fetch('www.themealdb.com/api/json/v1/1/random.php')
            setRandomData( await response.json())

        }catch (err){
            console.error(err)
        }
    }


    useEffect(() => {
        request()
    },[])



    return(
        <div>
            random
        </div>
    )
}
export default Random