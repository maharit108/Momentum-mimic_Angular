import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {
  time:string
  greet:string
  constructor() {
    this.time = moment().format('LT')
    this.greet = this.timeFormat()
   }

  ngOnInit(): void {
    this.updateTime
  }

  ngOnDestroy() {
    clearInterval(this.updateTime);
  }

  updateTime = setInterval(() => {
    this.time = moment().format('LT')
    this.greet = this.timeFormat()
  }, 2000)

  timeFormat() {
    const ampm = this.time.split(' ')
    const timeHr = ampm[0].split(':')
    let timeGreet = ''
    if (ampm[1] === 'AM') {
      timeGreet = 'Good Morning! '
    } else {
      if (parseInt(timeHr[0]) < 6) {
        timeGreet = 'Good Afternoon! '
      } else {
        timeGreet = 'Good Evening! '
      }
    }
    return timeGreet
  }
}
