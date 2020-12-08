import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from './users.component';
import {ListComponent} from './components/lists/list/list.component';
import {EditFormComponent} from './components/forms/edit-form/edit.component';
import {CreateComponent} from './components/create-user/create.component';
import {EditListComponent} from './components/lists/edit-list/edit-list.component';
import {AuthGuard} from './guards/auth.guard';

const routes: Routes = [
  {
    path: '', component: UsersComponent, children: [
      {path: 'newuser', component: CreateComponent, canActivate: [AuthGuard]},
      {path: 'list', component: ListComponent},
      {path: 'editlist', component: EditListComponent, canActivate: [AuthGuard]},
      {path: 'edit-forms/:id', component: EditFormComponent, canActivate: [AuthGuard]},
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {
}
