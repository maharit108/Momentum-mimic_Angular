import { ApiCallsService } from './../../../services/api/api-calls.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-land',
  templateUrl: './main-land.component.html',
  styleUrls: ['./main-land.component.css']
})
export class MainLandComponent implements OnInit {
  imgUrl:string = ''
  constructor(private apiService: ApiCallsService) { }

  ngOnInit(): void {
    this.apiService.getImg().subscribe(img => {
      this.imgUrl = img.urls.regular
    })
  }

}
