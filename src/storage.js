class Storage{
    constructor(){
        this.city;
        this.defaultCity = 'New York';
    }

getLocation(){
    if(localStorage.getItem('city') === null){
        this.city = this.defaultCity;
    }else{
        this.city = localStorage.getItem('city');
    }

    return this.city
}

setLocation(city){
    localStorage.setItem('city', city)
}

}