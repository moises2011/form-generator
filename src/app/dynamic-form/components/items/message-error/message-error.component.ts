import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { IValidation } from '../../../models/icontrol';
import { ValidationErrors } from '@angular/forms';
import { defaultErrorMessages } from './messages';

@Component({
  selector: 'app-message-error',
  templateUrl: './message-error.component.html',
  styleUrls: ['./message-error.component.scss']
})
export class MessageErrorComponent implements OnInit {
  @Input() errors: ValidationErrors | null;
  @Input() validations: IValidation[] = [];
  errorMessages = defaultErrorMessages;
  constructor() {}

  get arrayErrors() {
    return Object.keys(this.errors);
  }

  ngOnInit(): void {
    this.validations.forEach((validator: IValidation) => {
      const {validation, message} = validator;
      if(message) {
        this.errorMessages[validation] = message;
      }
    });
  }
}
