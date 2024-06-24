import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-full-page-loader',
  templateUrl: './full-page-loader.component.html',
  styleUrls: ['./full-page-loader.component.css']
})
export class FullPageLoaderComponent {
  @Input() opacity = 1;

  @Input() customText: string | undefined | null;
  progress = 0;

  // ngOnInit(): void {
  //   this.simulateLoading();
  // }
  //
  // simulateLoading(): void {
  //   // Fill quickly to 75%
  //   interval(15) // Interval in milliseconds
  //     .pipe(
  //       takeWhile(() => this.progress < 75)
  //     )
  //     .subscribe(() => {
  //       this.progress += .5;
  //     });
  //
  //   // Load slowly to 100%
  //   interval(100) // Interval in milliseconds
  //     .pipe(
  //       takeWhile(() =>this.progress < 199)
  //     )
  //     .subscribe(() => {
  //       this.progress += .75;
  //     });
  // }
}
