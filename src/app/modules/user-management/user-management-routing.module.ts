import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "../authentication/login/login.component";
import {UsersComponent} from "./users/users.component";
import {AddUserComponent} from "./add-user/add-user.component";

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    pathMatch: 'full',
    data: {
      isExtranet: false
    }
  },
  {
    path: 'add-user',
    component: AddUserComponent,
    pathMatch: 'full',
    data: {
      isExtranet: false
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }
