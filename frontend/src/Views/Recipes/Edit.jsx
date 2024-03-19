import {useState} from "react";


const Edit = () => {
    // dummy dane recipe, normalnie przyjda z BD
    const recipe = {
        title:'Maselo z mlekiem',
        ingredients: [{name:'maslo', quantity:'2', unit:'gr'},{name:'mleko', quantity:'100', unit:'ml'}],
        instructions:"miesac i miesac potem wciagac",
        ready_in_minutes:'3',
        servings:"4"
    }
    const ingredients = recipe.ingredients;

    //koniec dummy danych
    const unitOptions = ['ml', 'l', 'kg', 'g', 'szt.', 'łyżka', 'łyżeczka', 'opakowanie', 'szklanka'];

    // const ingredients = JSON.parse(recipe.ingredients);
    // const cleanInstructions = DOMPurify.sanitize(recipe.instructions);

    const [values, setValues] = useState({
        title: recipe.title,
        ingredients: ingredients || [{name: '', quantity: '', unit: ''}],
        instructions: recipe.instructions,
        ready_in_minutes: recipe.ready_in_minutes,
        servings: recipe.servings,
    });
    const [image, setImage] = useState(null);

    const handleChange = (e) => {
        const {name, value, dataset} = e.target;
        if (name.startsWith('ingredient')) {
            const index = parseInt(name.split('_')[1], 10);
            const newIngredients = [...values.ingredients];
            newIngredients[index][dataset.type] = value;
            setValues({...values, ingredients: newIngredients});
        } else {
            setValues({...values, [name]: value});
        }
    };

    const handleAddIngredient = () => {
        setValues({
            ...values,
            ingredients: [...values.ingredients, {name: '', quantity: ''}],
        });
    };

    const handleRemoveLastIngredient = () => {
        if (values.ingredients.length > 1) {
            setValues(values => ({
                ...values,
                ingredients: values.ingredients.slice(0, -1),
            }));
        }
    };
    const handleRemoveIngredient = (index) => {
        setValues(values => ({
            ...values,
            ingredients: values.ingredients.filter((_, i) => i !== index),
        }));
    };
    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        Object.keys(values).forEach((key) => {
            if (key === 'ingredients') {
                formData.append(key, JSON.stringify(values[key]));
            } else {
                formData.append(key, values[key]);
            }
        });

        if (image) {
            formData.append('image', image);
        }
        formData.append('_method', 'PUT');
        console.log('Form Data:', formData);
        for (let [key, value] of formData.entries()) {
            console.log(key, value);
        }

        // Inertia.post(route('recipes.update', {recipe: recipe.id}), formData, {
        //
        //     headers: {
        //         'Content-Type': 'multipart/form-data',
        //     },
        // });
    };
    return (
        <>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="p-4">
                        <h2 className="text-2xl font-semibold">Doskonal Swoje Kulinarnie Dzieła</h2>
                        <p>Witaj na stronie edycji przepisu, gdzie Twoja kulinarna kreatywność spotyka się z możliwością
                            ciągłego doskonalenia. Każdy przepis jest żywą historią, która może ewoluować i rozwijać się
                            razem z Tobą. To Twoja szansa, by dopracować każdy szczegół, udoskonalić smaki i uczynić
                            każde danie prawdziwie swoim.
                        </p>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow mb-4">



                        {/*<BackButton/>*/}
                    </div>
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className='p-4 '>
                            <img src={recipe.image} alt="Recipe"
                                 className="w-full h-auto object-cover rounded-lg shadow-md"/>
                        </div>

                        <form className="p-6 flex flex-col" onSubmit={handleSubmit}>
                            <div className="mb-6 flex flex-wrap mx-2 p-4 bg-white rounded-lg shadow">
                                <label htmlFor="title"
                                       className="block text-sm font-medium text-gray-700 w-full">Nazwa
                                    Przepisu:</label>
                                <input name="title" value={values.title} onChange={handleChange}
                                       className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"/>
                            </div>

                            {values.ingredients.map((ingredient, index) => (
                                <div key={index}
                                     className='flex flex-wrap items-center mx-2 mb-4 p-4 bg-white rounded-lg shadow'>
                                    <div className='w-full md:w-2/5 px-2 mb-4 md:mb-0'>
                                        <label htmlFor={`ingredient_${index}_name`}
                                               className="block text-sm font-medium text-gray-700">Składnik {index + 1} </label>
                                        <input
                                            name={`ingredient_${index}`}
                                            // data-type="name"
                                            value={ingredient.name}
                                            onChange={handleChange}
                                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                        />
                                    </div>

                                    <div className='w-1/4 md:w-1/6 px-2 mb-4 md:mb-0'>
                                        <label htmlFor={`ingredient_${index}_quantity`}
                                               className="block text-sm font-medium text-gray-700">Ilość:</label>
                                        <input
                                            name={`ingredient_${index}`}
                                            data-type="quantity"
                                            value={ingredient.quantity}
                                            onChange={handleChange}
                                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                        />
                                    </div>

                                    <div className='w-1/2 md:w-1/6 px-2 mb-4 md:mb-0'>
                                        <label htmlFor={`ingredient_${index}_unit`}
                                               className="block text-sm font-medium text-gray-700">Jednostka:</label>
                                        <input
                                            name={`ingredient_${index}`}
                                            data-type="unit"
                                            value={ingredient.unit}
                                            onChange={handleChange}
                                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                        />
                                    </div>


                                    <div className=" self-end md:w-1/6 ">
                                        <button
                                            className='text-white bg-red-600 hover:bg-red-700 py-2 px-6 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 m-4 md:mb-0'
                                            type="button"
                                            onClick={() => handleRemoveIngredient(index)}
                                        >
                                            Usuń
                                        </button>
                                    </div>

                                </div>
                            ))}

                            <div className="flex justify-start mx-2 mb-4">
                                <button
                                    className='text-white bg-green-500 hover:bg-green-600 py-2 px-6 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50'
                                    type="button"
                                    onClick={handleAddIngredient}
                                >
                                    Dodaj Składnik
                                </button>
                            </div>

                            <div className='flex flex-wrap mx-2 mb-4 p-4 bg-white rounded-lg shadow'>
                                <label htmlFor="instructions"
                                       className="block text-sm font-medium text-gray-700 w-full">Instrukcje:</label>
                                <textarea name="instructions" value={values.instructions} onChange={handleChange}
                                          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"/>
                            </div>

                            <div className='flex flex-wrap mx-2 mb-4 p-4 bg-white rounded-lg shadow'>
                                <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                                    <label htmlFor="ready_in_minutes"
                                           className="block text-sm font-medium text-gray-700">Gotowe w minut:</label>
                                    <input name="ready_in_minutes" type="number" value={values.ready_in_minutes}
                                           onChange={handleChange}
                                           className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"/>
                                </div>

                                <div className="w-full md:w-1/2 px-2">
                                    <label htmlFor="servings"
                                           className="block text-sm font-medium text-gray-700">Porcji:</label>
                                    <input name="servings" type="number" value={values.servings} onChange={handleChange}
                                           className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"/>
                                </div>
                            </div>

                            <div className='flex flex-wrap mx-2 mb-4 p-4 bg-white rounded-lg shadow'>
                                <label htmlFor="image"
                                       className="block text-sm font-medium text-gray-700 w-full">Obraz:</label>
                                <input type="file" name="image" onChange={handleImageChange}
                                       className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"/>
                            </div>

                            <button
                                className="w-3/4 mx-auto text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 py-2 px-6 rounded"
                                type="button" onClick={handleSubmit}>Zapisz Edycje
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Edit;