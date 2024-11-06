import React, { useState } from 'react'
import MainCard from './MainCard';

function MainPage() {
    const [data, setData] = useState();
    const [search, setSearch] = useState("");
    const [msg, setMsg] = useState("");

    const handleInput = (event) =>{
        setSearch(event.target.value)
    }
    const myFun = async () =>{
      if(search ===""){
        setMsg("please search something")
      }else{
        const get =  await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        const jsonData = await get.json()
        console.log(jsonData.meals)
        setData(jsonData.meals)
        console.log(data);
        setMsg("")
        
      }
       
    }
    
  return (
    < >
    <h1>FOOD RECIPE</h1>
      <div className='container'>
        <div className="searchBar">
        <input type="text" placeholder='enter dishes' onChange={handleInput}/>
        <button onClick={myFun}>search</button>
        </div>
        <h3>{msg}</h3>
        </div>
        < MainCard detail={data}/>  
    </>
  )
}

export default MainPage