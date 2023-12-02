
const getCountries = async () => {
    try {
        const res = await fetch("https://restcountries.com/v3/all")
        //console.log(res)
        if (!res.ok) {
            throw new Error("error", res.error)
        }
        const data = await res.json()

        return data
    } catch {
        (error) => {
            console.error("error obteniendo datos", error)
        }
    }
}
//incluyendo la bandera(flag[0]), la capital([0].capital[0]), la población(population), el lado de la carretera por el que se circula([1].car.side)
const cards = (data) => {
    console.log(data)
    data.sort((a, b) => a.name.common.localeCompare(b.name.common));//El resultado de la función localeCompare() es un valor numérico, que indica si la primera cadena es menor, igual o mayor que la segunda. En este caso, usamos un valor negativo para indicar que el primer elemento debe ir antes que el segundo, y un valor positivo para indicar que el segundo elemento debe ir antes que el primero
    console.log(data)//se podria hacer con tolowercase pero no salia


    data.forEach(paises => {
        const { common: nombrePais } = paises.name
        //console.log(nombrePais)
        const capital = paises.capital ? paises.capital[0]
            : "no tiene capital"
        //console.log(capital)
        const { population, car } = paises
        //(nombrePais, capital, population, car.side).toUpperCase()
        //console.log(nombrePais, capital, population, car.side)

        const bandera = paises.flags[0]
        //console.log(bandera)
        let countriesList = document.getElementById("countries-list")
        countriesList.innerHTML += `
        
        <li class="button">
        <img src="${bandera}" width= 200px alt="${nombrePais}" />
        <p>${nombrePais}</p>
        </li>`
        let button = document.querySelector(".button")//creo que son modales
        button.addEventListener("click",()=>{
            console.log("hola")
        })
        
    });

}
getCountries().then((data) => cards(data))















































/*let paises 
fetch("https://restcountries.com/v3/all")
.then((res)=>{
    if (!res.ok){throw new Error("error en la solicitud")}
    return res.json()
})
.then((data)=>{
    data.forEach(element => {
        console.log(element)
        
    });
   
})

*/
