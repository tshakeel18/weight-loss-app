import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedKendoModule } from './shared-kendo.module';
import { ActivityTileComponent } from './components/activity-tile/activity-tile.component';
import { MenuPopupComponent } from './components/menu-popup/menu-popup.component';
import { SmoothHeightAnimDirective } from './directives/smooth-height.directive';
import { PopupComponent } from './components/popup/popup.component';
import { PopupContentComponent } from './components/popup-content/popup-content.component';

const COMPONENTS= [ActivityTileComponent, MenuPopupComponent, PopupComponent, PopupContentComponent];
const DIRECTIVES = [SmoothHeightAnimDirective]
@NgModule({
  declarations: [...COMPONENTS, ...DIRECTIVES],
  imports: [
    CommonModule,
    SharedKendoModule
  ],
  exports: [SharedKendoModule, ...COMPONENTS, ...DIRECTIVES]
})
export class SharedModule { }
