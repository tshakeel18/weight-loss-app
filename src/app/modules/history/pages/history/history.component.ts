import { Component } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent {

  public seriesData = [{value:20,color: '#c1fe4d'}, {value: 40,color: '#c1fe4d'}, {value: 45, color: '#bdb3ff'},{value: 30,color: '#bdb3ff'}, {value:50 ,color: '#c1fe4d'}];
  public categories: string[] = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  public getColor(value: number): string {
    if (value < 50) {
      return "#ff0000";
    } else if (value < 80) {
      return "#ffff00";
    } else {
      return "#00ff00";
    }
  }

}
