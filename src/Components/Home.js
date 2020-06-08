import React, {useEffect, useState} from 'react';
import Recipe from "./Recipe";
import CarouselBox from "./CarouselBox";
import "./Home.css";



const Home = () => {

    const APP_ID = "c9999d98";
    const APP_KEY = "3ee9f84a35b1e90910bf0b7fee56f15d";


    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState(' ');
    const [query, setQuery] = useState('chicken');


    useEffect(() => {
        getRecipes();

    }, [query]);


    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await response.json();
        setRecipes(data.hits);
    };


    const updateSearch = e => {
        setSearch(e.target.value)
    };

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch('');
    };


    return (


        <div className="App">

            <CarouselBox/>


            <div className="wrapper">


                <form onSubmit={getSearch} className="search-form">
                    <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
                    <button className="search-button" type="submit">Search</button>
                </form>


                <div className="container">

                    {recipes.map(recipe => (
                        <Recipe key={recipe.recipe.label}
                                title={recipe.recipe.label}
                                calories={recipe.recipe.calories}
                                image={recipe.recipe.image}
                                ingredients={recipe.recipe.ingredients}

                        />
                    ))}

                </div>
            </div>


        </div>

    )
};


export default Home;
