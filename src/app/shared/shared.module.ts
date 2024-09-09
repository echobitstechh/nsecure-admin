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
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AccountActionModalComponent } from './components/account-action-modal/account-action-modal.component';
import { MatDialogModule } from '@angular/material/dialog';

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
    AccountActionModalComponent,
  ],
  exports: [
    ButtonWithLoaderComponent,
    FullPageLoaderComponent,
    ButtonComponent,
    NotificationToggleComponent,
    ConfirmDialogComponent,
    GenericTableComponent,
    AccountActionModalComponent,
  ],
  imports: [
    CommonModule,
    ProgressbarModule,
    FormsModule,
    RouterModule,
    MatDialogModule,
    LottieModule.forRoot({ player: lottiePlayerFactory }),
  ],
})
export class SharedModule {}
