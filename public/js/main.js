const cityName=document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');

const city_name=document.getElementById('city_name');

const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');

const datahide=document.querySelector('.middle_layer');

const getInfo = async(event) =>{
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal === '')
    {
        city_name.innerText=`Please write city name before search...`;
        datahide.classList.add('data_hide');
    }
    else{
        try{
            let url=`http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=dd0aaf58fba01e63ee9ccb70da5a50c1`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData=[data];
            city_name.innerText=`${arrData[0].name} , ${arrData[0].sys.country}`;
            temp_real_val.innerText=`${arrData[0].main.temp}`;
            const tempmood=arrData[0].weather[0].main;
            if(tempmood==="Clear")
            {
                temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'?</i>";
            }
            else if(tempmood === "Clouds")
            {
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #828698;'?</i>";
            }
            else if(tempmood==="Rain")
            {
                temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color: #828698;'?</i>";
            }
            else
            {
                temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'?</i>";
            }
            datahide.classList.remove('data_hide');
            // console.log(data);
        }
        catch{
            city_name.innerText=`Please Write City Name Properly...`;
            datahide.classList.add('data_hide');
        }
    }

}
submitBtn.addEventListener('click',getInfo);