import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from './users.component';
import {ListComponent} from './components/list/list.component';
import {EditFormComponent} from './components/edit/edit.component';
import {CreateComponent} from './components/create/create.component';

const routes: Routes = [
  {
    path: '', component: UsersComponent, children: [
      {path: 'newuser', component: CreateComponent},
      {path: 'list', component: ListComponent},
      {path: 'edit/:id', component: EditFormComponent},
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {
}
