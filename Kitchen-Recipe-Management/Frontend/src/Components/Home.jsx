import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "../App.css"


function Home() {
  const [isLoading,setIsLoading]=useState(true)
  const [recipes, setRecipes] = useState([])
  useEffect(() => {
    axios.get("https://recipe-1.onrender.com/recipe/recipes")
      .then(recipes => {
        setRecipes(recipes.data)
      setIsLoading(false)

      }).catch(err => console.log(err))
  }, [])
  return (
    <>
    {isLoading ? <h1 style={{color:"white"}}>Loading...</h1> :
      <div className="container">
        <div className="row gy-3">
          {recipes.map(recipe => (
            <div className="col-md-3">
              <div id='card' className="card h-100" key={recipe._id}>
                <Link to={`/recipe/${recipe._id}`} className='card-body text-decoration-none'>
                  <img style={{ height: "12rem" }} src={recipe.imageURL} className="card-img-top" alt="..." />
                  <h3 className='text text-center mt-4'>{recipe.name}</h3>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>}
    </>
  );
}

export default Home;