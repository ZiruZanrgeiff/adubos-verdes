import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  {path: '', component: DashboardComponent}
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DashboardComponent],
  exports: [
    RouterModule
  ]
})
export class DashboardModule { }
