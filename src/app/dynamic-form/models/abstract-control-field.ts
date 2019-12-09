import { Input, Output, EventEmitter, OnChanges, OnInit } from "@angular/core";
import { FormGroup, AbstractControl, ValidationErrors, FormControl } from "@angular/forms";
import { IControl, IValidation } from "./icontrol";
import { from } from "rxjs";

export abstract class AbstractControlField implements OnInit, OnChanges{
  parentControl?: FormControl;
  @Input() control: IControl;
  @Input() fGroup: FormGroup;
  @Output() validationMessagesChange: EventEmitter<IValidation> = new EventEmitter<IValidation>();

  ngOnInit(): void {
    this.setParentControl();
    if(this.parentControl) {
      from(this.parentControl.valueChanges).subscribe((val: any)=> {
        console.log('new parent value:', val);
      });
    }
  }

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    console.debug('Onchange', this.control.key);
  }

  get formControl(): FormGroup {
    return <FormGroup>this.fGroup.get(this.control.key);
  }

  get formGroup(): AbstractControl {
    return this.fGroup;
  }

  private setParentControl(): void {
    const { parentControlKey } = this.control;
    this.parentControl = <FormControl>this.fGroup.get(parentControlKey);
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
