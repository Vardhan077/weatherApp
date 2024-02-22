import React, { useState } from 'react';
import './styles/App.css';
import { useWeatherData } from './hooks/useWeatherData';
import Header from './components/Header/Header';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import CurrentWeatherDescription from './components/CurrentWeatherDescription/CurrentWeatherDescription';
import Tabs from './components/UI/Tabs/Tabs';
import CurrentLocation from './components/CurrentLocation';

function App() {
    const [currentWeather, forecastWeather, handleOnSearchChange] = useWeatherData();
    const [locationData, setLocationData] = useState(null);

    return (
        <div className="container">
            <Header onSearchChange={handleOnSearchChange} />
            {currentWeather === null ? (
                <div className="">
                    <CurrentLocation setLocationData={setLocationData} />
                </div>

            ) : (<div className='smthng'>
                <CurrentWeather data={currentWeather} />
                <CurrentWeatherDescription data={currentWeather} />
            </div>)}
            {forecastWeather && <Tabs data={forecastWeather} />}
        </div>
    );
}

export default App;









// import React, { useState } from 'react';
// import './styles/App.css';
// import { useWeatherData } from './hooks/useWeatherData';
// import Header from './components/Header/Header';
// import CurrentWeather from './components/CurrentWeather/CurrentWeather';
// import CurrentWeatherDescription from './components/CurrentWeatherDescription/CurrentWeatherDescription';
// import Tabs from './components/UI/Tabs/Tabs';
// import CurrentLocation from './components/CurrentLocation';

// function App() {
//     const [currentWeather, forecastWeather, handleOnSearchChange] = useWeatherData();
//     const [locationData, setLocationData] = useState(null);
//     const [locationSelected, setLocationSelected] = useState(false);

//     const handleLocationSelect = () => {
//         setLocationSelected(true);
//     };

//     return (
//         <div className="container">
//             <Header onSearchChange={handleOnSearchChange} />
//             {!locationSelected && <CurrentLocation setLocationData={setLocationData} />}
//             {currentWeather !== null && (
//                 <div style={{ display: 'flex', gap: '50px' }}>
//                     <CurrentWeather data={currentWeather} />
//                     <CurrentWeatherDescription data={currentWeather} />
//                 </div>
//             )}
//             {locationData !== null && (
//                 <div>
//                     <CurrentWeather data={locationData.currentWeather} />
//                     <CurrentWeatherDescription data={locationData.currentWeather} />
//                 </div>
//             )}
//             {forecastWeather && <Tabs data={forecastWeather} />}
//         </div>
//     );
// }

// export default App;
