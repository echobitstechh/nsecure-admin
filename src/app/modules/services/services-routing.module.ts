import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "../authentication/login/login.component";
import {ServicesComponent} from "./services/services.component";
import {AddServiceComponent} from "./add-service/add-service.component";

const routes: Routes = [
  {
    path: '',
    component: ServicesComponent,
    pathMatch: 'full',
    data: {
      isExtranet: false
    }
  },
  {
    path: 'add-service',
    component: AddServiceComponent,
    pathMatch: 'full',
    data: {
      isExtranet: false
    }
  },
  {
    path: 'add-service/:id',
    component: AddServiceComponent,
    data: {
      isExtranet: false
    }
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
