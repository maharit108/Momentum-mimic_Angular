import { Component, OnInit } from '@angular/core';
import { ApiCallsService } from '../../../services/api/api-calls.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quote: string
  author: string

  constructor(private apiService: ApiCallsService) {
    this.quote = '',
    this.author = ''
   }

  ngOnInit(): void {
    this.apiService.getQuotes().subscribe(q=> {
      let n:number = this.randomNumber(q.length)
      this.quote = q[n].text
      this.author = q[n].author
    })
  }

  randomNumber(max:number) {
    return Math.floor(Math.random()*max)
  }


}
