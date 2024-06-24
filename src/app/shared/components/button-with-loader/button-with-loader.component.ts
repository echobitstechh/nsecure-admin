import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';

/**
 * This component provides a button with a loading indicator. The button can be in two states: idle and processing. When the button is in the idle state, the text of the button is Proceed. When the button is in the processing state, the text of the button is Processing.
 *
 * The component has the following properties:
 *
 * isProcessing: This property indicates whether the button is in the processing state. The default value is false.
 * classText: This property specifies the CSS class of the button. The default value is btn btn-primary w-100 py-2 my-3.
 * idleStateText: This property specifies the text of the button when it is in the idle state. The default value is Proceed.
 * workingStateText: This property specifies the text of the button when it is in the processing state. The default value is Processing.
 * buttonClick: This property is an output event that is emitted when the button is clicked.
 * successEvent: This property is an output event that is emitted when the processing is successful.
 * errorEvent: This property is an output event that is emitted when the processing fails.
 * subscription: This property is an input property that specifies an Observable that is used to handle the processing of the button.
 * The following methods are available on the component:
 *
 * emitOnClickEvent(): This method emits the buttonClick event and sets the isProcessing property to true.
 * Usage
 * To use the ButtonWithLoaderComponent, you can import it into your Angular project and add it to your template. For example:
 *
 * <app-button-with-loader
 * isProcessing="true"
 * classText="btn btn-primary w-100 py-2 my-3"
 * idleStateText="Proceed"
 * workingStateText="Processing"
 * Click me
 * </app-button-with-loader>
 *
 * or
 *
 * <app-button-with-loader
 *   (errorEvent)="doError($event)"
 *   (successEvent)="doSuccess($event)"
 *   [subscription]="myObservable"
 * >
 * </app-button-with-loader>
 *
 * When the user clicks the button, the buttonClick event will be emitted and the isProcessing property will be set to true. The successEvent or errorEvent event will be emitted depending on the result of the processing.
 *
 */

@Component({
  selector: 'app-button-with-loader',
  templateUrl: './button-with-loader.component.html',
  styleUrls: ['./button-with-loader.component.css']
})
export class ButtonWithLoaderComponent<T> {
  /**
   * @author George David
   * georgequin19@gmail.com
   */

  @Input()
  isProcessing = false;

  @Input()
  classText = 'btn btn-primary w-100 py-2 my-3';

  @Input()
  idleStateText = 'Proceed';

  @Input()
  workingStateText = 'Processing';

  @Output()
  buttonClick: EventEmitter<unknown> = new EventEmitter<unknown>();

  @Output()
  successEvent: EventEmitter<T> = new EventEmitter<T>();

  @Output()
  errorEvent: EventEmitter<unknown> = new EventEmitter<unknown>();

  @Input()
  subscription: Observable<T> | undefined;

  @Input()
  icon: string = '';

  @Input()
  buttonType = 'button';

  emitOnClickEvent(): void {
    this.buttonClick.emit();

    if (this.subscription !== undefined) {
      this.isProcessing = true;
      this.subscription
        .subscribe({
          next: (value: T) => {
            this.successEvent.emit(value);
          },
          error: (error: unknown) => {
            this.errorEvent.emit(error);
          }
        })
        .add(() => {
          this.isProcessing = false;
        });
    }
  }
}
