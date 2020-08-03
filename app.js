const weatherData = new WeatherData();
const interface = new Interface();
const storage = new Storage();
const modalBackground = document.getElementById('modalBackground');
let changeLocation = document.getElementById('changeLocation');
const word = document.getElementById('location');

///////////// Get data from local storage and apply to the interface////////////

weatherData.get(storage.getLocation())
.then(data => interface.primaryData(data))
.catch(error => console.log(error))


////////////////// open modal////////////////

if(changeLocation){
    changeLocation.addEventListener('click', function(){
        modalBackground.style.display = 'block';    
    })    
}



modalBackground.addEventListener('click', function(e){
    if(e.target.id === 'close' || e.target.id === 'modalBackground'){
        modalBackground.style.display = 'none';
    }    
})

///////////// get input from the modal, set the input to the local storage and apply to interface////////////

document.getElementById('saveChanges').addEventListener('click', function(){
    const city = document.getElementById('city').value;
    storage.setLocation(city);
    
    if(city !== ''){
        weatherData.get(city)
    .then(data => {
        interface.primaryData(data);        
    })
    .catch(error => console.log(error));
    }
    
    modalBackground.style.display = 'none';
    document.getElementById('city').value = '';

})

///////////// Select data from list ////////////


word.addEventListener('click', function(e){
    if(e.target.className === 'fa fa-chevron-circle-down'){
      if(list.style.display === 'flex'){
          list.style.display = 'none'
          document.querySelector('.fa').style.transform = 'rotate(0deg)'
        }else{
            list.style.display = 'flex';
            document.querySelector('.fa').style.transform = 'rotate(180deg)'
      }
    }
})

///////////// Send the data from list to fetch the info and apply to the interface////////////

word.addEventListener('click', function(e){

    const city = e.target.children[0].textContent;
    const timeZone = e.target.children[1].textContent;
    const cityName = e.target.innerText;

    weatherData.time(timeZone)
    .then(currTime => {

        weatherData.exact(city)
        .then(data => interface.secondaryData(data, cityName, city, currTime))
        .catch(error => console.log(error))

    })
    .catch(error => console.log(error))
    
    

})


///////////// fetch 12hr data and apply to the interface////////////


document.getElementById('hourly').addEventListener('click', function(e){

    const city = e.target.children[0].innerHTML;
    const cityName = e.target.parentElement.previousElementSibling.children[0].children[0].innerText;
    const dayTime = e.target.parentElement.parentElement.style.backgroungImage;
    
    
    weatherData.next12Hours(city)
    .then(data => interface.thirdData(data, cityName, city, dayTime))
    .catch(error => console.log(error))
    
})


///////////// Set the data as a default summary and apply to the interface////////////


document.getElementById('today').addEventListener('click', function(e){
    const city = e.target.previousElementSibling.children[0].innerHTML;
    const cityName = e.target.parentElement.previousElementSibling.children[0].children[0].innerText;
    const timeZone = e.target.parentElement.previousElementSibling.children[0].children[1].innerText;
    
    weatherData.time(timeZone)
    .then(currTime => {

    weatherData.exact(city)
        .then(data => interface.secondaryData(data, cityName, city, currTime))
        .catch(error => console.log(error))

    })
    .catch(error => console.log(error))
    
})


///////////// Get Today's data and apply to the interface////////////


document.getElementById('day1').addEventListener('click', function(e){
    const city = e.target.previousElementSibling.previousElementSibling.children[0].innerHTML;    
    weatherData.next5Days(city)
    .then(data => interface.fourthData(data))
    .catch(error => console.log(error))
    
})


///////////// Get Tomorrow's data and apply to the interface////////////


document.getElementById('day2').addEventListener('click', function(e){
    const city = e.target.previousElementSibling.previousElementSibling.previousElementSibling.children[0].innerHTML;    
    weatherData.next5Days(city)
    .then(data => interface.fifthData(data))
    .catch(error => console.log(error))
    
})


///////////// Get Third day's data and apply to the interface////////////


document.getElementById('day3').addEventListener('click', function(e){
    const city = e.target.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.children[0].innerHTML;    
    weatherData.next5Days(city)
    .then(data => interface.sixthData(data))
    .catch(error => console.log(error))
    
})


///////////// Get Fourth day's data and apply to the interface////////////



document.getElementById('day4').addEventListener('click', function(e){
    const city = e.target.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.children[0].innerHTML;    
    weatherData.next5Days(city)
    .then(data => interface.seventhData(data))
    .catch(error => console.log(error))
    
})


///////////// Get Fifth day's data and apply to the interface////////////



document.getElementById('day5').addEventListener('click', function(e){
    const city = e.target.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.children[0].innerHTML;    
    weatherData.next5Days(city)
    .then(data => interface.eighthData(data))
    .catch(error => console.log(error))
    
})







