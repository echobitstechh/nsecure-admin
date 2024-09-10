import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TworkerRoutingModule } from './tworker-management-routing.module';
import { TworkerPageComponent } from './tworker-page/tworker-page.component';



@NgModule({
  declarations: [TworkerPageComponent],
  imports: [
    CommonModule,TworkerRoutingModule
  ]
})
export class TworkerManagementModule { }
