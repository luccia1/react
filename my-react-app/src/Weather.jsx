import { useState } from 'react'

import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Weather(){
    let[city,setCity]=useState("");
    let searchinput=document.getElementById("search-input");
    let searchbtn=document.getElementById("search-btn");
    let cityelement=document.getElementById("city");
    let humidity=document.getElementById("humidity");
    let windSpeed=document.getElementById("wind-speed");
    let description=document.getElementById("description");
    let timeelement=document.getElementById("time");

function handleResponse(response){

}



    let apiKey="3d19633teeafa6c79049ab3o334f7b44";
    let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey} `;
    axios.get(apiUrl) .then(handleResponse);


    function submitCity(){
        event.preventDefault();
        let searchinput=document.getElementById("search-input");
        let cityelement=document.getElementById("city");
        cityelement.textContent=searchinput.value;
        searchCity(searchInput.value);




    }
   function addCity(){
    event.target.value();
   }
    return(
        <>
        <div className="logo">
        <img src="{require(`./logo.png`)}" alt="" />
        </div>
      
        <div className="weather-app">
            <header>
             <form className="search-form">
        
          <input type="text"  placeholder="enter a city"  id="search-input" className="search-input" onclick={addCity} />
        
          <button className="search-btn" id="search-btn " onclick={submitCity}>Search</button>
        
      </form>
      </header>
      <main>

      <div className="weather-data container">
      <div className="row">
        <div className="col-md-6">

            <h1 className="weather-city" id="city">San francisco</h1>
            <p className="weather-details">
                <span id="time">Saturday 11:12 </span>
                <span id="description">few clouds</span> <br />
            Humidity : <strong id="humidity">68%</strong> wind : <strong id="wind-speed">3.13km/h</strong></p>
            </div>
             <div className="weather-container col-md-6 col-lg-6 col-sm-8">
             <div className="weather-icon"><i class="fa-solid fa-cloud-sun"></i></div> 
                <div className="weather-temp">23</div>
                <div className="weather-unit">℃</div>

             </div>
               
             
  
        </div>
        </div>
        </main>

       
     
      <footer>
       
      <p> This project ws coded by <a href="https://github.com/luccia1">Lucy Esther</a> is
         <a href="https://github.com/luccia1/weather"> Github</a> open-sourced on Github
        <a href="https://app.netlify.com/teams/luccia1/overview">hosted on Netlify</a> </p> 
      </footer>
        </div>
        </>
    );

}
export default Weather;