import React, {Component} from 'react';

import Titles from './Components/Titles.js';
import Form from './Components/Form';
import Weather from './Components/Weather';

const API_KEY = '0b3d350296e3aad5a32764f4a2617a55';
const country ="pakistan";

class WeatherWidget extends React.Component{

    constructor(props){
        super(props);
        this.state={
            temperature: undefined,
            city: undefined,
            country: undefined,
            humidity: undefined,
            description: undefined,
            error: ''
        }
    }
    
    getWeather= async (e)=>{
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;

        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
        const data = await api_call.json();

        if(city && country)
        {
            console.log(data);

            this.setState({
                temperature: data.main.temp,
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                error: ''
            })  
        }
        else{
            this.setState({
                error: 'Please enter any values'
            })
        }
    }

    render()
    {
        return(

            <div>
                <Titles />
                <Form getWeather={this.getWeather} />
                <Weather 
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    error={this.state.error}
                    description={this.state.description}
                    />
                </div>
                
            /*
            <div>
              <div className="wrapper">
                <div className="main">
                  <div className="container">
                    <div className="row">
                      </div>
                  </div>
                 </div>
              </div>

            </div>
            */
        );
    }
}



export default WeatherWidget;