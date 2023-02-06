import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public seriesData = [{value:20,color: '#c1fe4d'}, {value: 40,color: '#c1fe4d'}, {value: 45, color: '#bdb3ff'},{value: 30,color: '#bdb3ff'}, {value:50 ,color: '#c1fe4d'}];
  public categories: string[] = ["Mon", "Tue", "Wed", "Thu", "Fri"];
}
