import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity-tile',
  templateUrl: './activity-tile.component.html',
  styleUrls: ['./activity-tile.component.scss']
})
export class ActivityTileComponent {
  @Input() public description?: string;
  @Input() public value?: number;
  @Input() public image?: string;
  constructor() { }

  public getColor(): string {
    return 'green';
  }
}
