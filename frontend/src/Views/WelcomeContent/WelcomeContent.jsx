import mealImage from '/images/assets/meal.jpg';
import mealImage1 from '/images/assets/dishdock1.jpg';
import mealImage2 from '/images/assets/disz3.jpg';
import mealImage3 from '/images/assets/dishdock2.jpg';
import mealImage4 from '/images/assets/dish5.jpg';
import member1 from '/images/assets/t1.jpg';
import member2 from '/images/assets/t2.jpg';
import member3 from '/images/assets/shanti2.jpg';
import member4 from '/images/assets/joker.jpg';
import member5 from '/images/assets/time.jpg';


const WelcomeContent= () => {
    return (
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mt-4">

            <div>

                <div className="relative h-96 flex items-center justify-center bg-cover bg-center text-white p-8 rounded" style={{ backgroundImage: `url(${mealImage})` }}>
                    {/* Nakładka ściemniająca */}
                    <div className="absolute top-0 right-0 bottom-0 left-0 bg-black opacity-50 rounded"></div>

                    <div className="text-center relative"> {/* Ustawienie relative, aby tekst był na wierzchu */}
                        <h1 className="text-5xl font-bold mb-4">DishDock: Smakuj Świat</h1>
                        <p className="mb-6">Odkrywaj, twórz, delektuj się. Z DishDock każdy posiłek staje się przygodą kulinarą. Dołącz do nas i przekształć gotowanie w sztukę!</p>
                        <button href="/login" className="bg-blue-600 hover:bg-blue-700 py-3 px-8 rounded-lg text-lg">Dołącz do nas</button>
                    </div>
                </div>

                {/* Features Section */}
                <div className="my-12 mx-auto sm:px-6 lg:px-8">
                    <h2 className="text-3xl p-2 font-semibold text-center mb-10">Smaki Świata na Wyciągnięcie Ręki!</h2>
                    <p className="p-2">Rozbudz swoje kubki smakowe z DishDock - Twoim osobistym przewodnikiem po świecie kulinariów. Odkrywaj, gotuj i ciesz się różnorodnością przepisów, które przemienią każdy posiłek w wyjątkowe doświadczenie. DishDock to nie tylko przepisy, to Twoja ścieżka do stania się mistrzem kuchni. Gotuj, ucz się, i baw się smakami - wszystko w jednym miejscu!</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Feature Card 1 */}
                        <div className="bg-white rounded-lg shadow p-6">
                            <img src={mealImage1} alt="Feature 1" className="w-full h-40 object-cover rounded-md"/>
                            <h3 className="mt-4 font-semibold text-lg">Przetłumaczone Przepisy</h3>
                            <p>Z DishDock, odkrywanie nowych smaków jest łatwiejsze niż kiedykolwiek. Nasza aplikacja oferuje szeroką gamę przepisów z całego świata, każdy przetłumaczony na język polski. Teraz możesz bez przeszkód eksplorować kuchnie różnych kultur, rozumiejąc każdy krok i składnik. Niech każdy przepis opowiada historię i zabiera Cię w podróż do kulinarnych krain!.</p>
                        </div>
                        <div className="bg-white rounded-lg shadow p-6">
                            <img src={mealImage2} alt="Feature 1" className="w-full h-40 object-cover rounded-md"/>
                            <h3 className="mt-4 font-semibold text-lg">Zapisywanie Przepisów</h3>
                            <p>Znajdziesz przepis, który rozgrzewa Twoje serce i kubki smakowe? Z DishDock możesz łatwo zapisać go w swojej osobistej bazie danych. Twórz swoją kolekcję ulubionych przepisów, które będziesz mógł przeglądać, edytować i gotować w dowolnym czasie. Twoje kulinarne inspiracje zawsze będą w zasięgu ręki!</p>
                        </div>
                        <div className="bg-white rounded-lg shadow p-6">
                            <img src={mealImage4} alt="Feature 1" className="w-full h-40 object-cover rounded-md"/>
                            <h3 className="mt-4 font-semibold text-lg">Edycja i Personalizacja:</h3>
                            <p>Każdy kucharz ma swoje unikalne podejście do gotowania, a DishDock to docenia. Dlatego dajemy Ci pełną swobodę w edytowaniu i personalizacji zapisanych przepisów. Zmień składniki, dostosuj proporcje, dodaj własne wskazówki - zapisz swoje unikalne wersje przepisów tak, aby pasowały do Twojego stylu i upodobań.</p>
                        </div>
                        <div className="bg-white rounded-lg shadow p-6">
                            <img src={mealImage3} alt="Feature 1" className="w-full h-40 object-cover rounded-md"/>
                            <h3 className="mt-4 font-semibold text-lg">Tworzenie Własnych Przepisów</h3>
                            <p>Masz swoje kulinarnie dzieło, którym chcesz się podzielić? DishDock to idealne miejsce na to! Nasza aplikacja pozwala nie tylko na zapisywanie i edycję istniejących przepisów, ale także na tworzenie własnych. Zapisuj swoje najlepsze przepisy, dziel się nimi z innymi użytkownikami i inspiruj społeczność swoją kreatywnością.</p>
                        </div>
                        {/* Feature Card 2 */}
                        {/* ... (powtórz dla pozostałych funkcji) ... */}

                    </div>
                </div>

                {/* About Us Section */}
                <div className="my-12 mx-auto sm:px-6 lg:px-8 ">
                    <h2 className="text-3xl font-semibold text-center mb-10">Poznaj Ekipę DishDock – Gdzie Pasja Spotyka Się ze Smakiem!</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {/* Team Member Card 1 */}
                        <div className="bg-white rounded-lg shadow p-4 text-center">
                            <img src={member1}  alt="Team Member 1" className="w-24 h-24 object-cover rounded-full mx-auto"/>
                            <h3 className="mt-4 font-semibold">Przemek</h3>
                            <p>Klepacz kodu, kucharz, stylowiec, dokumentator</p>
                        </div>
                        <div className="bg-white rounded-lg shadow p-4 text-center">
                            <img src={member2}  alt="Team Member 1" className="w-24 h-24 object-cover rounded-full mx-auto"/>
                            <h3 className="mt-4 font-semibold">Monika</h3>
                            <p>Dyrektoruje, doradza, odradza, zaradza</p>
                        </div>
                        <div className="bg-white rounded-lg shadow p-4 text-center">
                            <img src={member3}  alt="Team Member 1" className="w-24 h-24 object-cover rounded-full mx-auto"/>
                            <h3 className="mt-4 font-semibold">Shanti</h3>
                            <p>Chodzi po klawiaturach, zbiera kapselki  </p>
                        </div>
                        <div className="bg-white rounded-lg shadow p-4 text-center">
                            <img src={member4} alt="Team Member 1" className="w-24 h-24 object-cover rounded-full mx-auto"/>
                            <h3 className="mt-4 font-semibold">Crazy</h3>
                            <p>Przeszkadza, hackuje, psuje, naprawia</p>
                        </div>
                        <div className="bg-white rounded-lg shadow p-4 text-center">
                            <img src={member5} alt="Team Member 1" className="w-24 h-24 object-cover rounded-full mx-auto"/>
                            <h3 className="mt-4 font-semibold">Czasu Upływ</h3>
                            <p>Ucieka, wywiera presje</p>
                        </div>
                        {/* Team Member Card 2 */}
                        {/* ... (powtórz dla pozostałych członków zespołu) ... */}
                    </div>
                </div>
                <div className="my-12 mx-auto sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-semibold text-center mb-10">Skontaktuj się z nami</h2>
                    <form className="max-w-md mx-auto bg-white rounded-lg shadow p-6">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Imię i nazwisko
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Twoje imię i nazwisko"/>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Twój email"/>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                Wiadomość
                            </label>
                            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Twoja wiadomość"></textarea>
                        </div>
                        <div className="flex items-center justify-center">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                Wyślij
                            </button>
                        </div>
                    </form>
                </div>


            </div>

        </div>
    );
}
export default WelcomeContent;