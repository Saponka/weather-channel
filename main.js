/* VARIABLES */
let boton = document.querySelector("button");
let input = document.querySelector("input");
let img = document.querySelector("img");
//------------------------------------------------------
/* EVENTO */
boton.addEventListener("click", cargarCiudad)
//-------------------------------------------------------
function cargarCiudad(){
     let ciudad = input.value             
     document.querySelector(".container").style.visibility = "visible";
    $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + ciudad + "&appid=0b8e1496b093554453f4085521beca90&lang=es", function(data){
    document.querySelector("#ciudad").textContent=data.name;
    document.querySelector("#pais").textContent=data.sys.country;
    document.querySelector("#temperatura").innerHTML=celciusKelvin(data.main.temp) + "<sup>°C</sup>";
    document.querySelector("#tempMax").innerHTML=celciusKelvin(data.main.temp_max) ;
    document.querySelector("#tempMin").innerHTML=celciusKelvin(data.main.temp_min) ;
    document.querySelector("#humedad").innerHTML=data.main.humidity;
    img.setAttribute("src","http://openweathermap.org/img/w/"+data.weather[0]["icon"]+".png")        
    document.querySelector("#descripcion").textContent = data.weather[0].description
    input.value = null;     
})
    .fail(function () {
    if (input.value=="") { alert("Ingresa una Ciudad")}
     else{alert("Hey, no hemos encontrado el lugar que buscas, fijate que todo este escrito correctamente")
        input.value = null;
    }           
     })         
}   
// Convercion de kelvin a celcius 
function celciusKelvin(temp){
return Math.round( temp-273)
}









