import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DynamicForm } from '../../../models/icontrol';
import { ValidationErrors } from '@angular/forms';
import { defaultErrorMessages } from './messages';

@Component({
  selector: 'app-message-error',
  templateUrl: './message-error.component.html',
  styleUrls: ['./message-error.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageErrorComponent implements OnInit {
  @Input() errors: ValidationErrors | null;
  @Input() validations: DynamicForm.IValidation[] = [];
  errorMessages = defaultErrorMessages;
  constructor() {}

  get arrayErrors() {
    return Object.keys(this.errors);
  }

  ngOnInit(): void {
    this.validations.forEach((validator: DynamicForm.IValidation) => {
      const {validation, message} = validator;
      if(message) {
        this.errorMessages[validation] = message;
      }
    });
  }
}
