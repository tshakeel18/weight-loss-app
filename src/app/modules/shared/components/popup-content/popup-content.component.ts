import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { LineCap } from '@progress/kendo-angular-gauges';

@Component({
  selector: 'app-popup-content',
  templateUrl: './popup-content.component.html',
  styleUrls: ['./popup-content.component.scss']
})
export class PopupContentComponent implements OnInit {
  @Output() close = new EventEmitter();
  public showLabels = true;
  public showTicks = true;
  public reverse = false;
  public autoCorrect = true;
  public value = 30;
  public listItems: Array<string> = ["round", "butt"];

  public startAngle = 0;
  public endAngle = 180;
  public rangeSize = 12;

  public rangeLineCap: LineCap = "round";

  public rangePlaceholderColor = "rgba(228, 228, 228, 1)";
  public ticksColor = "rgba(0, 128,0, 1)";
  public labelsColor = "rgba(0, 0, 255, 1)";

  constructor() { }

  ngOnInit(): void {
  }

}
