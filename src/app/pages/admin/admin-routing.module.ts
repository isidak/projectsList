import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './admin.component';

const routes: Routes = [
  {
    path: '', component: AdminComponent
    , children: [
      {path: 'users', loadChildren: () => import('./pages/users/users.module').then(m => m.UsersModule)},
      {path: 'cars', loadChildren: () => import('./pages/cars/cars.module').then(m => m.CarsModule)}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
