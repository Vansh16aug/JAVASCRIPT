const API_KEY = "21bbb3ec6f233226bb940f2fc6363e41";

function renderWeatherInfo(data){
    let newPara = document.createElement("p");
    newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`;
    document.body.appendChild(newPara);
}

async function showWeather() {
    try{
        let city = "goa";
        const responce = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        const data = await responce.json();

        console.log("Weather data ->", data);

        renderWeatherInfo(data);
    }
    catch(err){
        console.log("Error found: ",err);
    }   
}


