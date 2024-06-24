import { Component, Input, OnInit } from '@angular/core';
import { interval, takeWhile } from 'rxjs';

@Component({
  selector: 'progress-bar-loader',
  templateUrl: './progress-bar-loader.component.html',
  styleUrls: ['./progress-bar-loader.component.css']
})
export class ProgressBarLoaderComponent implements OnInit {
  progress = 0;
  @Input() customText: string | undefined | null = 'Loading...';

  ngOnInit(): void {
    this.simulateLoading();
  }

  simulateLoading(): void {
    // Fill quickly to 75%
    interval(15) // Emit values every 15 milliseconds
      .pipe(
        takeWhile((value) => {
          void value;
          return this.progress < 75;
        })
      )
      .subscribe(() => {
        this.progress += 0.5; // Increment progress by 0.5
      });

    // Load slowly to 95%
    interval(100) // Emit values every 100 milliseconds
      .pipe(
        takeWhile((value) => {
          void value;
          return this.progress < 95;
        })
      )
      .subscribe(() => {
        this.progress += 0.75; // Increment progress by 0.75
      });
  }
}
