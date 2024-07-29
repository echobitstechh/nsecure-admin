import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import {SidebarComponent} from "./sidebar/sidebar.component";
import {HeaderComponent} from "./header/header.component";
import {HomeComponent} from "./home/home.component";
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    HomeComponent
  ],
  exports: [
    SidebarComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule, SharedModule
  ]
})
export class LayoutModule { }
