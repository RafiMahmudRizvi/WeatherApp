
import React, { useState, useEffect } from 'react'

import axios from 'axios'
import Main from './components/Main';
import Location from './components/Location';
import Date from './components/Date';
import Footer from './components/Footer';
import Images from './components/Images';





function App() {

  const [query, setQuery] = useState('Bangladesh');
  const [weather, setWeather] = useState({
    main:'',
    description:'',
    name:'',
    country:''      
  });
 useEffect(()=>{
   
   navigator.geolocation.getCurrentPosition((p)=>{
     const lat =p.coords.latitude
     const lon =p.coords.longitude

    const options = {
      method: 'GET',
      url: 'https://community-open-weather-map.p.rapidapi.com/weather',
      params: {
        lat: lat,
        lon: lon,
        units: 'metric',
        mode: 'json'
      },
      headers: {
        'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY
      }
    };
    
    axios.request(options).then(function (res) {
      setQuery(res.data.name);
      setWeather((p)=> ({...p, main: res.data.main,
        description: res.data.weather[0],
        name: res.data.name,
        country: res.data.sys.country
      }));
  
    }).catch(function (error) {
      console.error(error);
    });
   })
 },[])


function handelChange(e) {
  setQuery(e.target.value)
}

function handelPress(e) {
  if(e.key === 'Enter'){
  findWeather()

 }
}

function findWeather() {
  const options = {
    method: 'GET',
    url: 'https://community-open-weather-map.p.rapidapi.com/weather',
    params: {
      q: query,
      units: 'metric',
      mode: 'json'
    },
    headers: {
      'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY
    }
  };
  
  axios.request(options).then(function (res) {
    setWeather((p)=> ({...p, main: res.data.main,
      description: res.data.weather[0],
      name: res.data.name,
      country: res.data.sys.country
    }));

  }).catch(function (error) {
    console.error(error);
  });
}



  return (
    <div className="weather-container">

     <input 
      type="text" 
      value={query} 
      placeholder="Enter Country Name..." 
      onChange={(e)=>{handelChange(e)}}
      onKeyDown={(e)=> (handelPress(e))}

      />

      <div className="weather">
          <Images path={weather.description.main} />
          <Main temp = {weather.main.temp} desc={weather.description.main}/>
          <Location name={weather.name} country={weather.country}/>
          <Date />
          <Footer data={weather.main}/>
      </div>

    </div>
  );
}


export default App;
     
        

        
