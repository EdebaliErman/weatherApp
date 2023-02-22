

const mapDOM = document.getElementById("map")
const btn = document.getElementById("btn")

btn.onclick = function () {
    getData(mapDOM.value)
}

function getData(name) {
    const API = "0535dc19d503fbb3b58568fe2fa8da4d"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API}&units=metric&lang=tr`
    fetch(url)
        .then(res => res.json())
        .then(res => {
            const {
                name,
                sys: { country },
                main: { temp, feels_like },
                weather: [{ description, icon }] } = res;
            const city = document.getElementById("city")
            const celvin = document.getElementById("celvin")
            const weatherTime = document.getElementById("weatherTime")
            const nowHot = document.getElementById("nowHot")


            city.innerHTML = `${name} ${country}`
            celvin.innerHTML = `${temp} °C`

            weatherTime.innerHTML = `${feels_like} °C`
            nowHot.innerHTML = `${description} `

        },

        )
        .catch(err => console.log(err))



}
