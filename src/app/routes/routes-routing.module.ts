import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: LayoutComponent,
  //   children: [
  //     { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  //     { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
  //   ]
  // },

  // Not lazy-loaded routes
  { path: 'login', component: LoginComponent },
  // { path: 'register', component: RegisterComponent },
  // { path: 'recover', component: RecoverComponent },
  // { path: 'lock', component: LockComponent },
  // { path: 'maintenance', component: MaintenanceComponent },
  // { path: '404', component: Error404Component },
  // { path: '500', component: Error500Component },

  // Not found
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
