class WeatherData{
    constructor(){
        this.apikey = 'JmOpzCCKrupaANLa2xTGH73ZG3pBiAbx';
        this.apikey1 = '0MFQDOO9G5MQ';

    }

    async get(city){
        const firstRequest = await fetch(`https://dataservice.accuweather.com/locations/v1/search?apikey=${this.apikey}&q=${city}&details=true`);
        const firstData = await firstRequest.json();
        const value = firstData[0].Key;
        const value1 = firstData[0].TimeZone.Name;
        const value2 = firstData;
        const secondRequest = await fetch(`https://dataservice.accuweather.com/currentconditions/v1/${value}?apikey=${this.apikey}&details=true`);
        const secondData = await secondRequest.json();
        const thirdRequest = await fetch(`https://api.timezonedb.com/v2.1/get-time-zone?key=${this.apikey1}&format=json&by=zone&zone=${value1}`);
        const thirdData = await thirdRequest.json();       

        return{
            firstData,
            secondData,
            value,
            value2,
            thirdData
        }
    }


    async exact(city){
        const thirdRequest = await fetch(`https://dataservice.accuweather.com/currentconditions/v1/${city}?apikey=${this.apikey}&details=true`);
        const thirdData = await thirdRequest.json();

        return thirdData
    }
    
    
    async next12Hours(city){
        const fourthRequest = await fetch(`https://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${city}?apikey=${this.apikey}&details=true&metric=true`);
        const fourthData = await fourthRequest.json();

        return fourthData
    }


    async next5Days(city){
        const fifthRequest = await fetch(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${city}?apikey=${this.apikey}&details=true&metric=true`);
        const fifthData = await fifthRequest.json();

        return fifthData
    }


    async time(timeZone){
        const request = await fetch(`https://api.timezonedb.com/v2.1/get-time-zone?key=${this.apikey1}&format=json&by=zone&zone=${timeZone}`);
        const response = await request.json();
        return response
    }

}