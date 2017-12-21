import { NgModule } from '@angular/core';

import { RoutesRoutingModule } from './routes-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PagesModule } from './pages/pages.module';

@NgModule({
  imports: [
    SharedModule,
    RoutesRoutingModule,
    PagesModule
  ],
  exports: [
    RoutesRoutingModule
  ]
})
export class RoutesModule { }
