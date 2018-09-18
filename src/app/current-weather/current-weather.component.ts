import { Component, OnInit } from '@angular/core';
import { ICurrentWeather } from '../interfaces';

import { WeatherService } from '../weather/weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css'] ,
})
export class CurrentWeatherComponent implements OnInit {

  current: ICurrentWeather;

  constructor(private weatherservice: WeatherService) {
    /* this.current = {
      city: 'Bethdesda',
      country: 'US',
      date: new Date(),
      image: 'assets/img/sunny.png',
      temperature: 72,
      description: 'sunny',
    } as ICurrentWeather; */

  }

  ngOnInit() {
    this.weatherservice.getCurrentWeather('sheffield', 'uk').subscribe((data) => this.current = data);
  }

}
