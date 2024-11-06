import React, { useState } from 'react'
import MainCard from './MainCard';

function MainPage() {
    const [data, setData] = useState();
    const [search, setSearch] = useState();

    const handleInput = (event) =>{
        setSearch(event.target.value)
    }
    const myFun = async () =>{
        const get =  await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        const jsonData = await get.json()
        console.log(jsonData.meals)
        setData(jsonData.meals)
        console.log(data);
        
    }
    
  return (
    < >
      <div className='container'>
        <div className="searchBar">
        <input type="text" placeholder='enter dishes' onChange={handleInput}/>
        <button onClick={myFun}>search</button>
        </div>
        </div>
        < MainCard detail={data}/>  
    </>
  )
}

export default MainPage