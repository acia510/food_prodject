import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title, calories, image, ingredients}) => {
    return (
        <div>

            <div className={style.recipe}>
                <img className={style.image} src={image} alt=""/>

                <div className={style.content}>
                    <h3 className={style.title}>{title}</h3>
                    <ul>
                        {
                            ingredients.slice(0, 8).map(ingredient => (
                                <li>{ingredient.text}</li>
                            ))


                        }

                    </ul>
                    <h5 className={style.callories}>{Math.floor(calories)} Kcal</h5>

                </div>
                <div className={style.btn_save}>


                </div>

            </div>

        </div>
    )
};

export default Recipe;
