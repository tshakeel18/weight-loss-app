import { Component } from '@angular/core';
import { Route, Router, Routes } from '@angular/router';
import { BottomNavigationSelectEvent } from '@progress/kendo-angular-navigation';
import { CHILD_ROUTES } from '../../routes';

export interface CustomRoute extends Route {
  text?: string;
  icon?: string;
  selected?: boolean;
}

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {
  public items: CustomRoute[] = [];

  constructor(private router: Router) {
    this.items = this.mapItems(CHILD_ROUTES);
    console.log(this.items);
    // this.items[0].selected = true;
  }

  public onSelect(ev: BottomNavigationSelectEvent): void {
    console.log(ev.item.path);

    this.router.navigate([ev.item.path]);
  }

  public mapItems(routes: CustomRoute[]): CustomRoute[] {
    console.log(routes);

    return routes.map((item) => {
      return {
        text: item.text,
        icon: item.icon,
        path: item.path ? item.path : "",
      };
    });
  }

}
