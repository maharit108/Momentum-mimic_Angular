import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http'
import { environment } from '../../../environments/environment'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ApiCallsService {
  
  constructor(private http:HttpClient) { }

  //unsplash API
  getImg():Observable<any> {
    const unsplashAPI:string = `https://api.unsplash.com/photos/random?client_id=${environment.image}&orientation=landscape&query=dark-background`
    return this.http.get<any>(unsplashAPI, httpOptions)
  }

  //quotes API
  getQuotes():Observable<any> {
    const quotesAPI:string = 'https://type.fit/api/quotes'
    return this.http.get<any>(quotesAPI, httpOptions)
  }

  // weather by city
  weatherByCity(cityName:any):Observable<any> {
    const weatherCityAPI:string = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${environment.weather}`
    return this.http.get<any>(weatherCityAPI)
  }

  // weather by coordinates
  weatherByLat(temp:any):Observable<any> {
    const weatherLatAPI:string = `https://api.openweathermap.org/data/2.5/weather?lat=${temp.lat}&lon=${temp.lon}&units=imperial&appid=${environment.weather}`
    return this.http.get<any>(weatherLatAPI)
  }

  // get city name from coordinates
  getCity(temp:any):Observable<any> {
   const getCityAPI:string = `https://us1.locationiq.com/v1/reverse.php?key=${environment.LOC}&lat=${temp.lat}&lon=${temp.long}&format=json`
    return this.http.get<any>(getCityAPI)
  }
}
