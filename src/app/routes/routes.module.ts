import { NgModule } from '@angular/core';

import { routes } from './routes';
import { SharedModule } from '../shared/shared.module';
import { PagesModule } from './pages/pages.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forRoot(routes),
    PagesModule
  ],
  exports: [
    RouterModule
  ]
})
export class RoutesModule { }
