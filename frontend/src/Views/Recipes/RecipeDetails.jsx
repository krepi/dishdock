// import React from 'react';
import {Head, Link} from "@inertiajs/react";
import styled from "styled-components";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import DOMPurify from 'dompurify';
import React, {useState, useEffect} from 'react';
import IngredientListItem from "@/Components/Recipes/partials/IngredientListItem.jsx";
import {Inertia} from "@inertiajs/inertia";
import BackButton from "@/Components/custom/BackButtons.jsx";
import {DietsList, NutritionList} from "@/Components/Recipes/partials/NutritionList.jsx";


const RecipeDetails = ({recipe, auth, errors}) => {
    // const [message, setMessage] = useState(externalMessage || '')
    const message = errors.id_from_api && "Juz masz ten przepis w swojej kolekcji";
    // console.log(Recipe.nutrition)

    const formatRecipeForSaving = () => {
        return {
            title: recipe.title,
            ingredients: recipe.extendedIngredients.map(ingredient => ({
                name: ingredient.originalName,
                quantity: ingredient.measures.metric.amount.toString(), // Konwersja na string
                unit: ingredient.measures.metric.unitLong
            })),
            instructions: recipe.instructions,
            ready_in_minutes: recipe.readyInMinutes.toString(), // Konwersja na string
            servings: recipe.servings.toString(), // Konwersja na string
            source: 'spoon',
            image: recipe.image, // URL obrazu
            id_from_api: recipe.id,
            nutrition: JSON.stringify(recipe.nutrition.nutrients),  // Formatuj jako JSON
            diets: JSON.stringify(recipe.diets)  // Formatuj jako JSON
        };
    };

    const repcia = formatRecipeForSaving();
    console.log('id from api ' + typeof (repcia.id_from_api))


    const handleSaveRecipe = () => {
        const formattedRecipe = formatRecipeForSaving();
        const formData = new FormData();

        formData.append('title', formattedRecipe.title);
        formData.append('ingredients', JSON.stringify(formattedRecipe.ingredients));
        formData.append('instructions', formattedRecipe.instructions);
        formData.append('ready_in_minutes', formattedRecipe.ready_in_minutes);
        formData.append('servings', formattedRecipe.servings);
        formData.append('source', formattedRecipe.source);
        formData.append('id_from_api', formattedRecipe.id_from_api);
        formData.append('nutrition', formattedRecipe.nutrition);
        formData.append('diets', formattedRecipe.diets);


        if (formattedRecipe.image) {
            formData.append('image', formattedRecipe.image);
        }

        Inertia.post(route('recipes.store'), formData, {
            onSuccess: (response) => {
                setMessage(response.data.message || 'Recipe has been saved successfully.');
            },
            onError: (errors) => {
                setMessage('An error occurred while saving the Recipe.');
            }
        });
    };
    const cleanInstructions = DOMPurify.sanitize(recipe.instructions);

    return (

            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mt-4">
                {/* Top Navigation and Messages */}
                <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    {/*<InertiaLink*/}
                    {/*    className='text-white bg-blue-600 hover:bg-blue-700 py-2 px-6 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'*/}
                    {/*    as='button' href="/recipes">Back</InertiaLink>*/}
                    <BackButton/>
                    {message && (
                        <div className="alert alert-info text-red-600">
                            {message}
                        </div>
                    )}
                    <button onClick={handleSaveRecipe}
                            className='text-white bg-green-500 hover:bg-green-600 py-2 px-6 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50'>
                        Zapisz jako mój przepis
                    </button>
                </div>

                {/* Recipe Details */}
                <div className="my-8 p-4 bg-white rounded-lg shadow">
                    <h2 className="text-2xl font-bold mb-4">{recipe.title}</h2>
                    <div className="my-8 flex flex-col md:flex-row gap-4">
                        <img src={recipe.image} alt={recipe.title} className="rounded-lg shadow-md"/>
                        <div className="flex-1 space-y-4">
                            {recipe.nutrition && <NutritionList nutritionData={recipe.nutrition.nutrients}/>}
                            {recipe.diets && <DietsList dietsData={recipe.diets}/>}
                            <p className="mt-2 text-lg">Porcji: {recipe.servings}</p>
                            <p className="text-lg">Gotowe w: {recipe.readyInMinutes} minut</p>
                        </div>
                    </div>
                </div>

                {/* Instructions */}
                <div className="mb-8 p-4 bg-white rounded-lg shadow">
                    <h3 className="text-xl font-semibold mb-3">Instrukcje:</h3>
                    <p dangerouslySetInnerHTML={{__html: cleanInstructions}} className="text-gray-700"></p>
                </div>

                {/* Ingredients */}
                <div className="mb-8 p-4 bg-white rounded-lg shadow">
                    <h3 className="text-xl font-semibold mb-3">Składniki:</h3>
                    <ul className="list-disc list-inside">
                        {recipe.extendedIngredients.map((ingredient, index) => (
                            <IngredientListItem key={ingredient.id + '_' + index} ingredient={ingredient}
                                                source={'spoon'}/>
                        ))}
                    </ul>
                </div>
            </div>



    );
};


export default RecipeDetails