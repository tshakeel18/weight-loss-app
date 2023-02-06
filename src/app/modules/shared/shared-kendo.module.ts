import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { IconsModule } from '@progress/kendo-angular-icons';
import { ChartModule } from '@progress/kendo-angular-charts';
import { GaugesModule } from '@progress/kendo-angular-gauges';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { PopupModule } from '@progress/kendo-angular-popup';
import { LayoutModule, CardModule } from '@progress/kendo-angular-layout';
import { NavigationModule } from '@progress/kendo-angular-navigation';
import { RippleModule } from '@progress/kendo-angular-ripple';
import { ProgressBarModule } from '@progress/kendo-angular-progressbar';

const KENDO_MODULES = [
  ButtonsModule,
  IconsModule,
  GaugesModule,
  InputsModule,
  PopupModule,
  LayoutModule,
  NavigationModule,
  CardModule,
  RippleModule,
  ChartModule,
  ProgressBarModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...KENDO_MODULES
  ],
  exports: [...KENDO_MODULES]
})
export class SharedKendoModule { }
