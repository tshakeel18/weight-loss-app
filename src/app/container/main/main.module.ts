import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { SharedModule } from '@app/modules/shared/shared.module';
import { CHILD_ROUTES } from './routes';

const ROUTES = [{
  path: '',
  component: MainComponent,
  children: CHILD_ROUTES
}]

@NgModule({
  declarations: [
    MainComponent,
    MainLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    SharedModule
  ]
})
export class MainModule { }
