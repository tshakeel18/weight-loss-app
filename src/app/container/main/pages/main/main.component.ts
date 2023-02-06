import { Component } from '@angular/core';
import { slideInAnimation } from '@app/modules/shared/animations/router-animations';
import { Align } from '@progress/kendo-angular-popup';
import { PopupAnimation } from '@progress/kendo-angular-popup';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [slideInAnimation]
})
export class MainComponent {
  public showMenuContent = false;
  public show = false;
  public anchorAlign: Align = { horizontal: 'center', vertical: 'bottom' };
  public popupAlign: Align = { horizontal: 'center', vertical: 'top' };
  public get animate(): boolean | PopupAnimation {
      return {
        type: 'expand',
        direction: 'down',
        duration: 250,

      };

    // return false;
  }

  public margin = { horizontal: 0, vertical: 30 };

  public onToggle(): void {
    console.log(this.show);

    this.show = !this.show;
  }

  // public toggleMenuButton(event: MouseEvent) {
  //   this.showMenuContent = true;
  //   event.stopPropagation();
  //   return false;
  // }
}
