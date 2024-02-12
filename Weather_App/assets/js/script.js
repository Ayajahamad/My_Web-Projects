let api = "https://api.openweathermap.org/data/2.5/weather?units=metric&"
let code = "3951ba7b625400cef40215a9cd21cc93"

let city = document.querySelector(".search input")
let img = document.querySelector(".weather-img")
let icon = document.querySelector('.icon')
let h4 = document.querySelector('.h4')

async function weatherFind(){
    const response = await fetch(`${api}` + `q=${city.value}` + `&appid=${code}`)
    const data = await response.json()

    let temp = document.querySelector(".temprechure")
    let cuntry = document.querySelector(".cuntry")
    let windspeed = document.querySelector(".windspeed")
    let humidity = document.querySelector(".humidity")

    if(response.status == 404 || response.status == 400){
        h4.style.display = "block"
        temp.innerHTML = ""
        cuntry.innerHTML = ""
        windspeed.innerHTML = ""
        humidity.innerHTML = ""
        img.src = "/"
    }
    else{
        h4.style.display = "none"

        temp.innerHTML = `${data.main.temp}°C`
        cuntry.innerHTML = data.name
        windspeed.innerHTML = `${data.wind.speed}km/h`
        humidity.innerHTML = `${data.main.humidity}%`

   
        switch (true) {
            case data.weather[0].main == "Clouds":
                img.src = "assets/images/clouds.png"
                break;
            case data.weather[0].main == "Clear":
                img.src = "assets/images/clear.png"
                break;
            case data.weather[0].main == "Rain":
                img.src = "assets/images/rain.png"
                break;
            case data.weather[0].main == "Drizzle":
                img.src = "assets/images/drizzle.png"
                break;
            case data.weather[0].main == "Mist":
                img.src = "assets/images/mist.png"
                break;
            case data.weather[0].main == "Snow":
                img.src = "assets/images/snow.png"
                break;
            default:    
                img.src = "assets/images/drizzle.png" 
                break;
        }
    }
   }

icon.addEventListener('click',()=>{
    weatherFind()
})