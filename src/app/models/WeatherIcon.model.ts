export class WeatherIcon {
  private clear:string = '☀';
  private rain:string = '️🌧';
  private storm:string = '⛈';
  private snow:string = '🌨';
  private mist:string = '🌫';
  private clouds:string = '☁';
  getWeatherIcon = (climate:string) => {
    let weatherIcon:string = ''
    if (climate === 'Clear') {
      weatherIcon = this.clear
    } else if (climate === 'Rain' || climate === 'Drizzle') {
      weatherIcon = this.rain
    } else if (climate === 'Thunderstorm') {
      weatherIcon = this.storm
    } else if (climate === 'Snow') {
      weatherIcon = this.snow
    } else if (climate === 'Clouds') {
      weatherIcon = this.clouds
    } else {
      weatherIcon = this.mist
    }
    return weatherIcon
  }
}