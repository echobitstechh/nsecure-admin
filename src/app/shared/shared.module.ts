import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullPageLoaderComponent } from './components/loaders/full-page-loader/full-page-loader.component';
import { ProgressBarLoaderComponent } from './components/loaders/progress-bar-loader/progress-bar-loader.component';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { ButtonWithLoaderComponent } from './components/button-with-loader/button-with-loader.component';
import { LottieModule } from 'ngx-lottie';
import { lottiePlayerFactory } from '../app.module';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    FullPageLoaderComponent,
    ProgressBarLoaderComponent,
    ButtonWithLoaderComponent,
  ],
  exports: [ButtonWithLoaderComponent, FullPageLoaderComponent],
  imports: [
    CommonModule,
    ProgressbarModule,
    LottieModule.forRoot({ player: lottiePlayerFactory }),
  ],
})
export class SharedModule {}
