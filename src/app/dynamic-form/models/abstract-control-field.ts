import { Input, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, AbstractControl } from "@angular/forms";
import { IControl, IValidation } from "./icontrol";

export abstract class AbstractControlField{
  @Input() control: IControl;
  @Input() fGroup: FormGroup;
  @Output() validationMessagesChange: EventEmitter<IValidation> = new EventEmitter<IValidation>();

  getFormGroup(): AbstractControl {
    return this.fGroup;
  }
}
