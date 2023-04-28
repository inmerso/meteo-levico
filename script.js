var weatherData = document.getElementById("weather_data");

function w_interpretation(code){
    switch (code) {
        case  0: return "Clear sky";
        case  1: return "Mainly clear";
        case  2: return "Partly cloudy"
        case  3: return "Overcast";
        case 45: return "Fog";
        case 48: return "Depositing rime fog";
        case 51: return "Drizzle: Light intensity";
        case 53: return "Drizzle: Moderate intensity";
        case 55: return "Drizzle: Dense intensity";
        case 56: return "Freezing Drizzle: Light intensity";
        case 57: return "Freezing Drizzle: Dense intensity";
        case 61: return "Rain: Slight intensity";
        case 63: return "Rain: Moderate intensity";
        case 65: return "Rain: Heavy intensity";
        case 66: return "Freezing Rain: Light intensity";
        case 67: return "Freezing Rain: Heavy intensity";
        case 71: return "Snow fall: Slight intensity";
        case 73: return "Snow fall: Moderate intensity";
        case 75: return "Snow fall: Heavy intensity";
        case 77: return "Snow grains";
        case 80: return "Rain showers: Slight";
        case 81: return "Rain showers: Moderate";
        case 82: return "Rain showers: Violent";
        case 85: return "Snow showers slight";
        case 86: return "Snow showers heavy";
        case 95: return "Thunderstorm: Slight or moderate";
        case 96: return "Thunderstorm: slight hail";
        case 99: return "Thunderstorm: heavy hail";
        default: return "unknown"
    }
}

function weather_data() {
    // var url = "https://api.open-meteo.com/v1/forecast?latitude=46.0&longitude=11.3&hourly=temperature_2m,precipitation_probability,precipitation&daily=precipitation_sum&current_weather=true&forecast_days=3&timezone=Europe%2FBerlin";
    var url = "https://api.open-meteo.com/v1/dwd-icon?latitude=46.0&longitude=11.3&current_weather=true&timezone=Europe%2FBerlin";
    
    fetch(url).then(function(response){
        if(response.ok){
            return response.json();
        }else{
            throw new Error(Error);
        }
    }).then(function(data){
        w_code_msg = w_interpretation(data.current_weather.weathercode);
        const html = `
            <p>
            <h2 class="text-danger text-center">
            temperature:${data.current_weather.temperature}°C<br>
            ${w_code_msg}<br>
            wind:${data.current_weather.winddirection}@${data.current_weather.windspeed}km/h
            </h2>
            `;
        document.getElementById("display_data").innerHTML = html;

        msg = "last update: " + data.current_weather.time
        document.getElementById("display_time").innerHTML = msg;
    }).catch(function(error){
        console.log(error);
    })
};


// weatherData.addEventListener('click',function(e){
//     e.preventDefault();
//     var url = "https://api.open-meteo.com/v1/forecast?latitude=46.0&longitude=11.3&hourly=temperature_2m,precipitation_probability,precipitation&daily=precipitation_sum&current_weather=true&forecast_days=3&timezone=Europe%2FBerlin";
    
//     fetch(url).then(function(response){
//         if(response.ok){
//             return response.json();
//         }else{
//             throw new Error(Error);
//         }
//     }).then(function(data){
//         w_code_msg = w_interpretation(data.current_weather.weathercode);
//         const html = `
//         <p>
//         <h2 class="text-danger text-center">
//         Temperature:${data.current_weather.temperature}°C<br>
//         ${w_code_msg}
//         </h2>
//         `;
//         document.getElementById("display_data").innerHTML = html;
//     }).catch(function(error){
//         console.log(error);
//     });
    
// });

