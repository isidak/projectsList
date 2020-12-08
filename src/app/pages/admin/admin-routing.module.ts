import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './admin.component';

const routes: Routes = [
  {
    path: '', component: AdminComponent
    , children: [
      // {path: 'users', loadChildren: () => import('./pages/users/users.module').then(m => m.UsersModule)},
      {path: 'users', loadChildren: () => import('./users-lib.module').then(m => m.UsersLibModule)}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
