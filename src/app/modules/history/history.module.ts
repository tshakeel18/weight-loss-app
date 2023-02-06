import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryComponent } from './pages/history/history.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const ROUTES = [{path: '', component: HistoryComponent}]

@NgModule({
  declarations: [
    HistoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    SharedModule
  ]
})
export class HistoryModule { }
