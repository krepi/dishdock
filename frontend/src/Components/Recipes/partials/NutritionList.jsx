const desiredNutrients = ["Calories", "Fat", "Carbohydrates", "Sugar", "Protein"];
const nutritionTranslations = {
    "Calories": "Kalorie",
    "Fat": "Tłuszcz",
    "Carbohydrates": "Węglowodany",
    "Sugar": "Cukier",
    "Protein": "Białko",
    // Dodaj więcej według potrzeb
};

const dietTranslations = {
    "gluten free": "bezglutenowa",
    "dairy free": "bezmleczna",
    "lacto ovo vegetarian": "lakto-owo-wegetariańska",
    "vegan": "wegańska",
    // Dodaj więcej według potrzeb
};

export const NutritionList = ({ nutritionData }) => {
    console.log(typeof(nutritionData))
    console.log(nutritionData)
    let data;

    if (typeof nutritionData === 'string') {
        try {
            data = JSON.parse(nutritionData);
        } catch (error) {
            console.error('Parsing error:', error);
            data = [];
        }
    } else {
        data = nutritionData;
    }

    return (
        <div>
            <h2 className="font-bold"> Wybrane wartości odżywcze:</h2>
            <ul>
                {data
                    .filter(item => desiredNutrients.includes(item.name))
                    .map((item, index) => (
                        <li key={index}>
                            {/*{nutritionTranslations[item.name] || item.name}: {item.amount} {item.unit} ({item.percentOfDailyNeeds}% dziennego zapotrzebowania)*/}
                            {nutritionTranslations[item.name] || item.name}: {item.amount} {item.unit}
                        </li>
                    ))}
            </ul>
        </div>
    );
};


export const DietsList = ({ dietsData }) => {
    let diets;

    // Sprawdź, czy dietsData jest stringiem i przekonwertuj go na tablicę
    if (typeof dietsData === 'string') {
        try {
            diets = JSON.parse(dietsData);
        } catch (error) {
            console.error('Parsing error:', error);
            // Możesz ustawić tutaj diets na pustą tablicę lub zwrócić błąd, w zależności od preferencji
            diets = [];
        }
    } else {
        diets = dietsData;
    }

    // Kontynuuj z przekonwertowanymi danymi
    return (
        <div>
            <h2 className="font-bold">Diety:</h2>
            <ul>
                {diets.map((diet, index) => (
                    <li key={index}>{dietTranslations[diet] || diet}</li>
                ))}
            </ul>
        </div>
    );
};

