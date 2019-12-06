import { Component, Input, OnInit } from '@angular/core';
import { IValidation } from '../../../models/icontrol';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-message-error',
  templateUrl: './message-error.component.html',
  styleUrls: ['./message-error.component.css']
})
export class MessageErrorComponent {
  @Input() fControl: FormControl;
  @Input() validations: IValidation[];
  constructor() {}

  get hasError() {
    console.log(this.fControl.errors);
    return this.fControl && this.fControl.errors && this.fControl.dirty && this.fControl.touched;
  }

  getMessageError(token: any) {
    return this.validations.filter((validation: IValidation) => validation.validation === token);
  }
}
