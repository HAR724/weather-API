

var img=document.getElementById("a")
var obj=new Date()
console.log(obj.getHours())
var a=obj.getHours()
var b=obj.getMinutes()
if(a>=18 || a<=5){
  img.src="photo-1533983272060-edb6f56af634.png"
  var api=async()=>{
    var res=await fetch("https://api.weatherapi.com/v1/current.json?key=3faa5dd8bb7e45f4939103903240601&q=india&aqi=no")
    result=await res.json()
    console.log(result)
    var celsius=parseInt(result.current.temp_c)
    
  function b(){
    return(`
    <form name="frm">
  <input type="text" name="search" placeholder="enter the city name" class="searchd">
  </form>
  <button onclick="fun2()" class="buttonsrch"><img src="./transparency.png" height="50px" width="25px"></button>
  <img src="${result.current.condition.icon}" class="iconimg">
  <h1 class="h1tempn">${celsius} </h1>
  <h1 class="tempcn">°c</h1>
  <h2 class="citynamen">${result.location.name}</h2>
  <h3 class="countryn">${result.location.country}</h3>
  <div class="countrybelown">
  <ul>
  <li>Pressure</li>
  <li>Uv Index</li>
  <li>Humidity</li>
  <li>Real Life</li>
  <li>Wind Speed</li>
  </ul>
  <ul>
  <li class="pressuren">${result.current.pressure_mb}mbar</li>
  <li class="uvn">${result.current.uv}</li>
  <li class="humidityn">${result.current.humidity}%</li>
  <li class="reallifen">${result.current.feelslike_c}°C</li>
  <li class="windspeedn">${result.current.wind_kph}km/h</li>
  </ul>
  



  </div>
  
  
 

  
  
  
  
  `)
  }
  document.getElementById("b").innerHTML=b()
                             
}
api()
function fun2(){
  if(document.frm.search.value!=""){
    img.src="photo-1533983272060-edb6f56af634.png"
 
    var api=async()=>{
      var res=await fetch("https://api.weatherapi.com/v1/current.json?key=3faa5dd8bb7e45f4939103903240601&q="+document.frm.search.value+"&aqi=no")
      result=await res.json()
      console.log(result)
      var celsius=parseInt(result.current.temp_c)
      
    function b(){
      return(`
      <form name="frm">
    <input type="text" name="search" placeholder="enter the city name" class="searchd">
    </form>
    <button onclick="fun2()" class="buttonsrch"><img src="./transparency.png" height="50px" width="25px"></button>
    <img src="${result.current.condition.icon}" class="iconimg">
    <h1 class="h1tempn">${celsius} </h1>
    <h1 class="tempcn"> °c</h1>
    <h2 class="citynamen">${result.location.name}</h2>
    <h3 class="countryn">${result.location.country}</h3>
    <div class="countrybelown">
    <ul>
    <li>Pressure</li>
    <li>Uv Index</li>
    <li>Humidity</li>
    <li>Real Life</li>
    <li>Wind Speed</li>
    </ul>
    <ul>
    <li class="pressuren">${result.current.pressure_mb}mbar</li>
    <li class="uvn">${result.current.uv}</li>
    <li class="humidityn">${result.current.humidity}%</li>
    <li class="reallifen">${result.current.feelslike_c}°C</li>
    <li class="windspeedn">${result.current.wind_kph}km/h</li>
    </ul>
    
  
  
  
    </div>
    
    
   
  
    
    
    
    
    `)
    }
    document.getElementById("b").innerHTML=b()
                               
    
    
   
   
    
   
  }
  api()
    
  }else{
    img.src="photo-1533983272060-edb6f56af634.png"
 
    var api=async()=>{
      var res=await fetch("https://api.weatherapi.com/v1/current.json?key=3faa5dd8bb7e45f4939103903240601&q=india&aqi=no")
      result=await res.json()
      console.log(result)
      var celsius=parseInt(result.current.temp_c)
      
    function b(){
      return(`
      <form name="frm">
    <input type="text" name="search" placeholder="enter the city name" class="searchd">
    </form>
    <button onclick="fun2()" class="buttonsrch"><img src="./transparency.png" height="50px" width="25px"></button>
    <img src="${result.current.condition.icon}" class="iconimg">
    <h1 class="h1tempn">${celsius} </h1>
    <h1 class="tempcn"> °c</h1>
    <h2 class="citynamen">${result.location.name}</h2>
    <h3 class="countryn">${result.location.country}</h3>
    <div class="countrybelown">
    <ul>
    <li>Pressure</li>
    <li>Uv Index</li>
    <li>Humidity</li>
    <li>Real Life</li>
    <li>Wind Speed</li>
    </ul>
    <ul>
    <li class="pressuren">${result.current.pressure_mb}mbar</li>
    <li class="uvn">${result.current.uv}</li>
    <li class="humidityn">${result.current.humidity}%</li>
    <li class="reallifen">${result.current.feelslike_c}°C</li>
    <li class="windspeedn">${result.current.wind_kph}km/h</li>
    </ul>
    
  
  
  
    </div>
    
    
   
  
    
    
    
    
    `)
    }
    document.getElementById("b").innerHTML=b()
                               
    
    
   
   
    
   
  }
  api()
  }
}



}else{
  img.src="1200px-Cloudy_Day_03.jpg"
 
  var api=async()=>{
    var res=await fetch("https://api.weatherapi.com/v1/current.json?key=3faa5dd8bb7e45f4939103903240601&q=india&aqi=no")
    result=await res.json()
    console.log(result)
    var celsius=parseInt(result.current.temp_c)
    
  function b(){
    return(`
    <form name="frm">
  <input type="text" name="search" placeholder="enter the city name" class="searchd">
  </form>
  <button onclick="fun()" class="buttonsrch"><img src="./transparency.png" height="50px" width="25px"></button>
  <img src="${result.current.condition.icon}" class="iconimg">
  <h1 class="h1temp">${celsius} </h1>
  <h1 class="tempc">°c</h1>
  <h2 class="cityname">${result.location.name}</h2>
  <h3 class="country">${result.location.country}</h3>
  <div class="countrybelow">
  <ul>
  <li>Pressure</li>
  <li>Uv Index</li>
  <li>Humidity</li>
  <li>Real Life</li>
  <li>Wind Speed</li>
  </ul>
  <ul>
  <li class="pressure">${result.current.pressure_mb}mbar</li>
  <li class="uv">${result.current.uv}</li>
  <li class="humidity">${result.current.humidity}%</li>
  <li class="reallife">${result.current.feelslike_c}°C</li>
  <li class="windspeed">${result.current.wind_kph}km/h</li>
  </ul>
  



  </div>
  
  
 

  
  
  
  
  `)
  }
  document.getElementById("b").innerHTML=b()
                             
  
  
 
 
  
 
}
api()
function fun(){
  if(document.frm.search.value!=""){
    img.src="1200px-Cloudy_Day_03.jpg"
 
    var api=async()=>{
      var res=await fetch("https://api.weatherapi.com/v1/current.json?key=3faa5dd8bb7e45f4939103903240601&q="+document.frm.search.value+"&aqi=no")
      result=await res.json()
      console.log(result)
      var celsius=parseInt(result.current.temp_c)
      
    function b(){
      return(`
      <form name="frm">
    <input type="text" name="search" placeholder="enter the city name" class="searchd">
    </form>
    <button onclick="fun()" class="buttonsrch"><img src="./transparency.png" height="50px" width="25px"></button>
    <img src="${result.current.condition.icon}" class="iconimg">
    <h1 class="h1temp">${celsius} </h1>
    <h1 class="tempc"> °c</h1>
    <h2 class="cityname">${result.location.name}</h2>
    <h3 class="country">${result.location.country}</h3>
    <div class="countrybelow">
    <ul>
    <li>Pressure</li>
    <li>Uv Index</li>
    <li>Humidity</li>
    <li>Real Life</li>
    <li>Wind Speed</li>
    </ul>
    <ul>
    <li class="pressure">${result.current.pressure_mb}mbar</li>
    <li class="uv">${result.current.uv}</li>
    <li class="humidity">${result.current.humidity}%</li>
    <li class="reallife">${result.current.feelslike_c}°C</li>
    <li class="windspeed">${result.current.wind_kph}km/h</li>
    </ul>
    
  
  
  
    </div>
    
    
   
  
    
    
    
    
    `)
    }
    document.getElementById("b").innerHTML=b()
                               
    
    
   
   
    
   
  }
  api()
    
  }else{
    img.src="1200px-Cloudy_Day_03.jpg"
 
    var api=async()=>{
      var res=await fetch("https://api.weatherapi.com/v1/current.json?key=3faa5dd8bb7e45f4939103903240601&q=india&aqi=no")
      result=await res.json()
      console.log(result)
      var celsius=parseInt(result.current.temp_c)
      
    function b(){
      return(`
      <form name="frm">
    <input type="text" name="search" placeholder="enter the city name" class="searchd">
    </form>
    <button onclick="fun()" class="buttonsrch"><img src="./transparency.png" height="50px" width="25px"></button>
    <img src="${result.current.condition.icon}" class="iconimg">
    <h1 class="h1temp">${celsius} </h1>
    <h1 class="tempc"> °c</h1>
    <h2 class="cityname">${result.location.name}</h2>
    <h3 class="country">${result.location.country}</h3>
    <div class="countrybelow">
    <ul>
    <li>Pressure</li>
    <li>Uv Index</li>
    <li>Humidity</li>
    <li>Real Life</li>
    <li>Wind Speed</li>
    </ul>
    <ul>
    <li class="pressure">${result.current.pressure_mb}mbar</li>
    <li class="uv">${result.current.uv}</li>
    <li class="humidity">${result.current.humidity}%</li>
    <li class="reallife">${result.current.feelslike_c}°C</li>
    <li class="windspeed">${result.current.wind_kph}km/h</li>
    </ul>
    
  
  
  
    </div>
    
    
   
  
    
    
    
    
    `)
    }
    document.getElementById("b").innerHTML=b()
                               
    
    
   
   
    
   
  }
  api()
  }
}


}









// let a=async()=>{
//     var res=await fetch("https://api.weatherapi.com/v1/current.json?key=3faa5dd8bb7e45f4939103903240601&q=india&aqi=no")
//     console.log(res)
//      result=await res.json()
//      console.log(result.current.cloud)
//     //  document.write(`
//     //  <diV>
//     // <img src="${result.current.condition.icon}">
   
   



//     //  </div>
     
     
     
     
     
//      `)
//    //  document.getElementById("row").innerHTML=totaldata.join('')
    
// }
// a()