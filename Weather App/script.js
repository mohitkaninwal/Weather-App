document.addEventListener("DOMContentLoaded",()=>{
const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f9ecff08d9msh3e3994155a9e38dp129734jsn6e35a0e94f71',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const searchBox=document.querySelector("#search-city");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(`${url}city=${city}`, options);

	
	var result = await response.json();
	console.log(result);

    document.querySelector(".city").innerHTML=searchBox.value;
    document.querySelector(".wind").innerHTML=result.wind_speed +" Km/h";
   document.querySelector(".temp").innerHTML=result.temp + "°c";
   document.querySelector(".humidity").innerHTML=result.humidity +" %";

   if(result.cloud_pct>=90){
	weatherIcon.src="images/clouds.png";
   }
  else if(result.cloud_pct<=10){
	weatherIcon.src="images/clear.png";
   }
   else if(result.cloud_pct<90 || result.cloud_pct>=70){
	weatherIcon.src="images/rain.png";
   }
   else if( result.cloud_pct<70||result.cloud_pct>50){
	weatherIcon.src="images/drizzle.png";
   }

   document.querySelector(".weather").style.display="block";
   
}
searchBtn.addEventListener("click" , ()=>{
    checkWeather(searchBox.value);
});
});

