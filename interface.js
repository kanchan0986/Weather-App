class Interface{
    constructor(){
        this.container = document.getElementById('container');
        this.location = document.getElementById('location');
        this.forcast = document.getElementById('forcast');
        this.temp = document.getElementById('temp');
        this.img = document.getElementById('img');
        
        this.currentTime = document.getElementById('_currentTime');
        this.actualDetails = document.getElementById('_details');
        this.feelsLike = document.getElementById('_fl_val');
        this._Temperature = document.getElementById('_tmp_val');
        this.windSpeed = document.getElementById('_ws_val');
        this.humidity = document.getElementById('_rh_val');
        this.visibility = document.getElementById('_v_val');
        this.dewpoint = document.getElementById('_dp_val');

        this._time = document.getElementById('time');
        this._WeatherIcon = document.getElementById('weatherIcon');
        this._temprature = document.getElementById('temprature');
        this._details = document.getElementById('details');
        this.box2_1 = document.getElementById('box2_1');
        this.box2_2 = document.getElementById('box2_2');
        this.daily = document.querySelectorAll('.daily');        
        this.hourly = document.getElementById('hourly');
        this.today = document.getElementById('today');
        this.day1 = document.getElementById('day1');
        this.day2 = document.getElementById('day2');
        this.day3 = document.getElementById('day3');
        this.day4 = document.getElementById('day4');
        this.day5 = document.getElementById('day5');        
        this.box2_3 = document.getElementById('box2_3');
    }

    primaryData(data){
        
        let data1 = data.firstData[0];
        let data2 = data.secondData[0];
        let data3 = data.thirdData;
        let data4 = data.value2;

        
        let city = data.value;
        this.displayDate(data2.LocalObservationDateTime);
        
        this.box2_1.style.display = 'flex';
        this.box2_2.style.display = 'none';
        this.box2_3.style.display = 'none';

        
        this.daily[0].style.backgroundColor = '';
        this.daily[1].style.backgroundColor = 'rgb(190, 121, 71)';
        this.daily[2].style.backgroundColor = '';
        this.daily[3].style.backgroundColor = '';
        this.daily[4].style.backgroundColor = '';
        this.daily[5].style.backgroundColor = '';
        this.daily[6].style.backgroundColor = '';

        //////specifying day or night/////
        this.container.style.backgroundImage = `url(./Images/${data2.IsDayTime}.jpg)`;
        
        let output = '';
        data4.forEach(val => {  
            //////Iterate through the location list hiding location key/////
            output += `
                <li class="listItem">${val.LocalizedName}, ${val.AdministrativeArea.LocalizedName}, ${val.Country.LocalizedName}<span id="hide">${val.Key}</span><span id="hide1">${val.TimeZone.Name}</span></li>
                `;
                //////inserting the list items and hiding timezone///// 
                this.location.innerHTML = `
                <span id="location1">${data1.LocalizedName}, ${data1.AdministrativeArea.LocalizedName}, ${data1.Country.LocalizedName}</span><span id="location2">${data4[0].TimeZone.Name}</span>
                <div id="cityList"><i class="fa fa-chevron-circle-down" aria-hidden="true"></i>
                <ul id="list">${output}</ul>
                </div>
                `;                
            })        
        //////Applying interfaces and hiding city location/////
        this.forcast.textContent = `${(data2.WeatherText).toUpperCase()}`;
        this.temp.innerHTML = `${data2.Temperature.Metric.Value} &#8451; / ${data2.Temperature.Imperial.Value} &#8457`;
        this.img.setAttribute('src', `./Images/${data2.WeatherIcon}.png`)
        this.hourly.innerHTML = `Next 12Hour<span class="alwaysHidden">${city}</span>`;


        //////Applying interfaces and setting curent formatted time/////
        this.currentTime.textContent = `${Interface.showCurrentTime(data3.formatted)}`;
        this.actualDetails.innerHTML = `<a href="${data2.Link}" target="_blank">Details</a></span>`;
        this.feelsLike.innerHTML = `${data2.RealFeelTemperature.Metric.Value} &#8451 / ${data2.RealFeelTemperature.Imperial.Value} &#8457`;
        this._Temperature.innerHTML = `${data2.Temperature.Metric.Value} &#8451; / ${data2.Temperature.Imperial.Value} &#8457`;
        this.windSpeed.textContent = `${data2.Wind.Speed.Metric.Value} km/h`;
        this.humidity.textContent = `${data2.RelativeHumidity}`;
        this.visibility.textContent = `${data2.Visibility.Metric.Value} km`;
        this.dewpoint.innerHTML = `${data2.DewPoint.Metric.Value} &#8451 / ${data2.DewPoint.Imperial.Value} &#8457`;
        
        
    }
    
    
    secondaryData(newData, other, city, currTime){
        const data2 = newData[0];
        this.displayDate(data2.LocalObservationDateTime);
        //////swapping the interface contents/////
        this.box2_1.style.display = 'flex';
        this.box2_2.style.display = 'none';
        this.box2_3.style.display = 'none';
        
        //////Setting the hover state of the heading/////
        this.daily[0].style.backgroundColor = '';
        this.daily[1].style.backgroundColor = 'rgb(190, 121, 71)';
        this.daily[2].style.backgroundColor = '';
        this.daily[3].style.backgroundColor = '';
        this.daily[4].style.backgroundColor = '';
        this.daily[5].style.backgroundColor = '';
        this.daily[6].style.backgroundColor = '';
        
        
        this.container.style.backgroundImage = `url(./Images/${data2.IsDayTime}.jpg)`;            
        this.location.innerHTML = `<span id="location1">${other}</span><span id="location2">${currTime.zoneName}</span>`;      
        this.forcast.textContent = `${(data2.WeatherText).toUpperCase()}`;
        this.temp.innerHTML = `${data2.Temperature.Metric.Value} &#8451; / ${data2.Temperature.Imperial.Value} &#8457`;
        this.img.setAttribute('src', `./Images/${data2.WeatherIcon}.png`)
        this.hourly.innerHTML = `Next 12Hour<span class="alwaysHidden">${city}</span>`;
        
        this.currentTime.textContent = `${Interface.showCurrentTime(currTime.formatted)}`;
        this.actualDetails.innerHTML = `<a href="${data2.Link}" target="_blank">Details</a></span>`;
        this.feelsLike.innerHTML = `${data2.RealFeelTemperature.Metric.Value} &#8451 / ${data2.RealFeelTemperature.Imperial.Value} &#8457`;
        this._Temperature.innerHTML = `${data2.Temperature.Metric.Value} &#8451; / ${data2.Temperature.Imperial.Value} &#8457`;
        this.windSpeed.textContent = `${data2.Wind.Speed.Metric.Value} km/h`;
        this.humidity.textContent = `${data2.RelativeHumidity}`;
        this.visibility.textContent = `${data2.Visibility.Metric.Value} km`;
        this.dewpoint.innerHTML = `${data2.DewPoint.Metric.Value} &#8451 / ${data2.DewPoint.Imperial.Value} &#8457`;
            
    }


    thirdData(newData, other, city, dayTime){
        this.box2_1.style.display = 'none';
        this.box2_2.style.display = 'flex';
        this.box2_3.style.display = 'none';

        this.daily[0].style.backgroundColor = 'rgb(190, 121, 71)';
        this.daily[1].style.backgroundColor = '';
        this.daily[2].style.backgroundColor = '';
        this.daily[3].style.backgroundColor = '';
        this.daily[4].style.backgroundColor = '';
        this.daily[5].style.backgroundColor = '';
        this.daily[6].style.backgroundColor = '';
        
            let time = '',
                weatherIcon = '',
                temprature = '',
                details = '';
            newData.forEach(data2 => {
                time += `<div class="time">${Interface.convertTime(data2.DateTime)}</div>`;
                weatherIcon += `<div class="wIcon"><img src="./Images/${data2.WeatherIcon}.png" width="40px" height="22px"></div>`;
                temprature += `<div class="temp">${data2.Temperature.Value}&#8451</div>`;
                details += `<div><a href="${data2.Link}" target="_blank" class="details">Details</a></div>`;

                this._time.innerHTML = time;
                this._WeatherIcon.innerHTML = weatherIcon;                
                this._temprature.innerHTML = temprature;
                this._details.innerHTML = details;

            });

    }



    fourthData(newData){
        this.box2_1.style.display = 'none';
        this.box2_2.style.display = 'none';
        this.box2_3.style.display = 'flex';

        this.daily[0].style.backgroundColor = '';
        this.daily[1].style.backgroundColor = '';
        this.daily[2].style.backgroundColor = 'rgb(190, 121, 71)';
        this.daily[3].style.backgroundColor = '';
        this.daily[4].style.backgroundColor = '';
        this.daily[5].style.backgroundColor = '';
        this.daily[6].style.backgroundColor = '';

        let data2 = newData.DailyForecasts[0]         

        this.box2_3.innerHTML = this.forecastData(data2);

    }

    
    fifthData(newData){
        this.box2_1.style.display = 'none';
        this.box2_2.style.display = 'none';
        this.box2_3.style.display = 'flex';

        this.daily[0].style.backgroundColor = '';
        this.daily[1].style.backgroundColor = '';
        this.daily[2].style.backgroundColor = '';
        this.daily[3].style.backgroundColor = 'rgb(190, 121, 71)';
        this.daily[4].style.backgroundColor = '';
        this.daily[5].style.backgroundColor = '';
        this.daily[6].style.backgroundColor = '';

        let data2 = newData.DailyForecasts[1];           

        this.box2_3.innerHTML = this.forecastData(data2);

    }

    
    sixthData(newData){
        this.box2_1.style.display = 'none';
        this.box2_2.style.display = 'none';
        this.box2_3.style.display = 'flex';

        this.daily[0].style.backgroundColor = '';
        this.daily[1].style.backgroundColor = '';
        this.daily[2].style.backgroundColor = '';
        this.daily[3].style.backgroundColor = '';
        this.daily[4].style.backgroundColor = 'rgb(190, 121, 71)';
        this.daily[5].style.backgroundColor = '';
        this.daily[6].style.backgroundColor = '';

        let data2 = newData.DailyForecasts[2];           

        this.box2_3.innerHTML = this.forecastData(data2);

    }


    seventhData(newData){
        this.box2_1.style.display = 'none';
        this.box2_2.style.display = 'none';
        this.box2_3.style.display = 'flex';

        this.daily[0].style.backgroundColor = '';
        this.daily[1].style.backgroundColor = '';
        this.daily[2].style.backgroundColor = '';
        this.daily[3].style.backgroundColor = '';
        this.daily[4].style.backgroundColor = '';
        this.daily[5].style.backgroundColor = 'rgb(190, 121, 71)';
        this.daily[6].style.backgroundColor = '';

        let data2 = newData.DailyForecasts[3];           

        this.box2_3.innerHTML = this.forecastData(data2);

    }


    eighthData(newData){
        this.box2_1.style.display = 'none';
        this.box2_2.style.display = 'none';
        this.box2_3.style.display = 'flex';

        this.daily[0].style.backgroundColor = '';
        this.daily[1].style.backgroundColor = '';
        this.daily[2].style.backgroundColor = '';
        this.daily[3].style.backgroundColor = '';
        this.daily[4].style.backgroundColor = '';
        this.daily[5].style.backgroundColor = '';
        this.daily[6].style.backgroundColor = 'rgb(190, 121, 71)';

        let data2 = newData.DailyForecasts[4];           

        this.box2_3.innerHTML = this.forecastData(data2);

    }



    forecastData(data2){
        let output = `                
            <p id="topic" class="fullForecast">
            <div id="top1">
                <p id="Day" class="fullForecast">Day</p>
                <p id="Night" class="fullForecast">Night</p>
                <p id="Temprature" class="fullForecast">Temperature</p>
            </div>
        </p>
        <p id="day_nightIcons" class="fullForecast">
            <div id="top2">
                <div class="wIcon" id="Day_icon" class="fullForecast"><img src="./Images/${data2.Day.Icon}.png" width="40px" height="22px"></div>
                <div class="wIcon" id="Night_icon" class="fullForecast"><img src="./Images/${data2.Night.Icon}.png" width="40px" height="22px"></div>
                <p id="Temp_min" class="fullForecast">Minimum</p>
                <p id="Temp_max" class="fullForecast">Maximum</p>
            </div>
        </p>
        <p id="t_icons" class="fullForecast">
            <div id="top3">
                <p id="Day_cap" class="fullForecast">${data2.Day.IconPhrase}</p>
                <p id="Night_cap" class="fullForecast">${data2.Day.IconPhrase}</p>
                <p id="Temp1_val" class="fullForecast">${data2.Temperature.Minimum.Value}&#8451</p>
                <p id="Temp2_val" class="fullForecast">${data2.Temperature.Maximum.Value}&#8451</p>
            </div>
        </p>
        <p id="t_details" class="fullForecast">
            <div id="top4">
                <p id="Day_wind" class="fullForecast">Wind Speed: ${data2.Day.Wind.Speed.Value} km/h</p>
                <p id="Night_wind" class="fullForecast">Wind Speed: ${data2.Day.Wind.Speed.Value} km/h</p>
                <p id="complete_data" class="fullForecast"><a href="${data2.Link}" target="_blank" class="details">Details</a></p>
            </div>
        </p>            
            `;

            return output
    }



    
    
    displayDate(iso8601){
        const isoDate = iso8601;
        let ori = isoDate.slice(0, 10)       
        const today = new Date(ori);
        const equal = today.toDateString();

        let month = new Array();
        month[0] = 1;
        month[1] = 2;
        month[2] = 3;
        month[3] = 4;
        month[4] = 5;
        month[5] = 6;
        month[6] = 7;
        month[7] = 8;
        month[8] = 9;
        month[9] = 10;
        month[10] = 11;
        month[11] = 12;
        

        const day2 = new Date(equal);
              day2.setDate(day2.getDate()+1);
        const day3 = new Date(day2);
              day3.setDate(day3.getDate()+1);
        const day4 = new Date(day3);
              day4.setDate(day4.getDate()+1);
        const day5 = new Date(day4);
              day5.setDate(day5.getDate()+1);
        
        this.day1.textContent = `Today`;
        this.day2.textContent = `Tomorrow`;
        this.day3.textContent = `${day3.getDate()}/${month[day3.getMonth()]}/${day3.getFullYear()}`;
        this.day4.textContent = `${day4.getDate()}/${month[day4.getMonth()]}/${day4.getFullYear()}`;
        this.day5.textContent = `${day5.getDate()}/${month[day5.getMonth()]}/${day5.getFullYear()}`;
            
    }
    



    static convertTime (iso8601) {
        let hours   = parseInt(iso8601.slice(11, 13)),
            ampm    = 'am';      
        if (hours == 12) {
          ampm = 'pm';
        } else if (hours == 0) {
          hours = 12;
        } else if (hours > 12) {
          hours -= 12;
          ampm = 'pm';
        }      
        return hours + ' ' + ampm;
      }
      
    
    static showCurrentTime(formattedTime){
        const date = new Date(formattedTime);
        const time = date.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit'
        });

        return time
    }




}





