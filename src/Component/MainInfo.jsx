import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function MainInfo() {
    const { mealid } = useParams();
    const [mealData, setMealData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch meal data only if mealid is available
        const getInfo = async () => {
            try {
                const response = await fetch(`http://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`);
                if (!response.ok) throw new Error("Network response was not ok");
                const jsonData = await response.json();
                setMealData(jsonData.meals ? jsonData.meals[0] : null); // Assuming meals is an array
            } catch (error) {
                setError(error.message);
            }
        };

        if (mealid) {
            getInfo();
        }
    }, [mealid]); // Only run the effect when mealid changes

    return (
        <>
            {error ? (
                <p>Error: {error}</p>
            ) : mealData ? (
                <div className='mealInfo'>
                    <img src={mealData.strMealThumb} alt="" />
                    <div className="info">
                        <h1>Recipe Detail</h1>
                        <button>{mealData.strMeal}</button>
                        <h3>Instruction's</h3>
                    <p>{mealData.strInstructions}</p>
                    {/* Add more meal details as needed */}
                </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </>
    );
}

export default MainInfo;
