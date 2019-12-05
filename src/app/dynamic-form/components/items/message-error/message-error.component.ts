import { Component, Input, OnInit } from '@angular/core';
import { IValidation } from '../../../models/icontrol';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-message-error',
  templateUrl: './message-error.component.html',
  styleUrls: ['./message-error.component.css']
})
export class MessageErrorComponent{
  @Input() control: FormControl;
  validation: IValidation;
  constructor() {}

  get hasError() {
    return this.control && this.control.hasError(this.validation.type) && this.control.dirty && this.control.touched;
  }
}
