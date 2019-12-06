import { Input, OnInit, Output, EventEmitter, OnChanges } from "@angular/core";
import { FormGroup, AbstractControl, ValidationErrors } from "@angular/forms";
import { IControl, IValidation } from "./icontrol";

export abstract class AbstractControlField implements OnChanges{
  @Input() control: IControl;
  @Input() fGroup: FormGroup;
  @Output() validationMessagesChange: EventEmitter<IValidation> = new EventEmitter<IValidation>();

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    console.log('Onchange', this.control.key);
  }

  get formControl(): FormGroup {
    return <FormGroup> this.fGroup.get(this.control.key);
  }

  get errors(): ValidationErrors  {
    const {errors, touched} = this.formControl;
    return (errors && touched) ? errors : null;
  }

  getFormGroup(): AbstractControl {
    return this.fGroup;
  }
}
