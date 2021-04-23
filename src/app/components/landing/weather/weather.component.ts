import { ApiCallsService } from './../../../services/api/api-calls.service';
import { WeatherIcon } from '../../../models/WeatherIcon.model';
import { GeoOption } from '../../../models/GeoOptions';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  cityName:string | null = '';
  lat:number | undefined;
  lon:number | undefined;
  temp:string = '';
  climate:string = '';
  weatherIcon:string = '';

  geoOption: GeoOption = {
    enableHighAccuracy: false,
    timeout: 20000,
    maximumAge: 10000,
  };
  icon = new WeatherIcon();
  

  constructor(private apiService: ApiCallsService) { }

  ngOnInit(): void {
    this.getLocation()
    this.weatherIcon = this.icon.getWeatherIcon(this.climate)
  }

  getLocation = () => {
    if(navigator.geolocation) {
      navigator.permissions
        .query({ name: 'geolocation' })
        .then((res) => {
          if(res.state === 'granted') {
            navigator.geolocation.getCurrentPosition(this.geoGranted, this.geoError, this.geoOption)
          } else if (res.state === 'prompt') {
            navigator.geolocation.getCurrentPosition(this.geoGranted, this.geoError, this.geoOption)
          } else if (res.state === 'denied') {
            console.log('Location Permission Denied')
            this.locationDenied()
        }
        })
    } else {
      console.log('geoLocation feature not available')
      this.locationDenied()
    }
  }

  // geoLocation Error
  geoError = (err: any) => {
    console.log('Error:', err)
    this.locationDenied()
  }

  // if geoLocation is not available or permission denied
  locationDenied = () => {
    let cityInput = prompt('Could not access geoLocation \n Enter the city you are in: ', 'Chicago')
    this.cityName = cityInput
    this.apiService.weatherByCity(this.cityName).subscribe(res => {
      this.climate = res.weather[0].main
      this.temp = res.main.temp
      this.weatherIcon = this.icon.getWeatherIcon(this.climate)
    })
  }

  // permission to get geoLocation granted
  geoGranted = (loc: { coords: { latitude: number; longitude: number; }; }) => {
    // Change state to current latitude and longitude
    this.lat = Math.floor(loc.coords.latitude)
    this.lon = Math.floor(loc.coords.longitude)
    console.log('asa', this.lat, this.lon)
    let temp = {
      lat: this.lat,
      lon: this.lon
    }
    // get weather data API call
    this.apiService.weatherByLat(temp).subscribe(res => {
      this.temp = res.main.temp
      this.climate = res.weather[0].main
      this.weatherIcon = this.icon.getWeatherIcon(this.climate)
    })
    // get cityName
    this.apiService.getCity(temp).subscribe(res => {
      this.cityName = res.address.city
    })
    }

}
