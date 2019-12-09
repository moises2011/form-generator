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
    return <FormGroup>this.fGroup.get(this.control.key);
  }

  get formGroup(): AbstractControl {
    return this.fGroup;
  }

  get errors(): ValidationErrors {
    const { errors, touched } = this.formControl;
    return (errors && touched) ? errors : null;
  }

  /*public changeData($event: any) {
    if (!$event) {
      return;
    }
    $event.preventDefault();
    $event.stopPropagation();
    const value = $event.target.value;
    console.log(value);
    this.setOnChange(value);
  }

  private setOnChange(value: string) {
    if (this.control.onChange) {
      this.control.onChange(
        value,
        this.schema,
        this.group,
        this.control
      );
      const { validationMessages } = this.dynamicFormService.setValidators(
        this.schema.properties,
        this.group,
      );
      this.validationMessagesChange.emit({
        ...this.validationMessages,
        ...validationMessages
      });
    }
  }*/
}
