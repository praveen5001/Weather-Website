const ApiKey="ac93fef84591788982968f8b0cb9f70f ";
        const ApiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

        const search = document.querySelector(".city_name input");
        const searchButton = document.querySelector(".city_name button");

        async function checkWeather(cityName){
            const response = await fetch(ApiUrl + cityName + `&appid=${ApiKey}`);
            var data = await response.json();

            console.log(data);
        document.querySelector(".city_name input").value="";

            let city = document.querySelector(".city");
            let temperature = document.querySelector(".temperature");
            let humidity = document.querySelector(".humidity");
            let wind = document.querySelector(".wind");

            if(data.name == undefined){
                window.alert("Please Enter Correct City Name");
                return; 
            }
            city.innerHTML = data.name;
            temperature.innerHTML = Math.round(data.main.temp) + "°C";
            humidity.innerHTML = data.main.humidity + "%";
            wind.innerHTML = data.wind.speed + " km/h";

            let weather_condition = data.weather[0].main.toLowerCase();
            let image_url = `${weather_condition}.png`;
            let weather_icon = document.querySelector(".weather_icon");
            weather_icon.onerror = function () {
                weather_icon.src="images/clear.png";
            }
            weather_icon.src= "images/"+image_url;
        
    }
        checkWeather("delhi");
        searchButton.addEventListener("click",()=>{
            checkWeather(search.value);
        })