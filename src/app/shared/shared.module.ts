import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullPageLoaderComponent } from './components/loaders/full-page-loader/full-page-loader.component';
import { ProgressBarLoaderComponent } from './components/loaders/progress-bar-loader/progress-bar-loader.component';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { ButtonWithLoaderComponent } from './components/button-with-loader/button-with-loader.component';
import { LottieModule } from 'ngx-lottie';
import { lottiePlayerFactory } from '../app.module';
import { ButtonComponent } from './components/button/button.component';
import { NotificationToggleComponent } from './components/notification-toggle/notification-toggle.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { GenericTableComponent } from './components/generic-table/generic-table.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    FullPageLoaderComponent,
    ProgressBarLoaderComponent,
    ButtonWithLoaderComponent,
    ButtonComponent,
    NotificationToggleComponent,
    ConfirmDialogComponent,
    GenericTableComponent,
  ],
  exports: [
    ButtonWithLoaderComponent,
    FullPageLoaderComponent,
    ButtonComponent,
    NotificationToggleComponent,
    ConfirmDialogComponent,
    GenericTableComponent,
  ],
  imports: [
    CommonModule,
    ProgressbarModule,
    LottieModule.forRoot({ player: lottiePlayerFactory }),
  ],
})
export class SharedModule {}
