import { Input, Output, EventEmitter, OnInit, ChangeDetectorRef, OnDestroy } from "@angular/core";
import { FormGroup, AbstractControl, ValidationErrors, FormControl } from "@angular/forms";
import { DynamicForm } from "./icontrol";
import { from, Subscription } from "rxjs";

export abstract class AbstractControlField implements OnInit, OnDestroy{

  protected parentControl?: FormControl;
  protected subscriptions: Subscription[] = [];
  @Input() public control: DynamicForm.IControl;
  @Input() public fGroup: FormGroup;
  @Output() public validationMessagesChange: EventEmitter<DynamicForm.IValidation> = new EventEmitter<DynamicForm.IValidation>();

  ngOnInit(): void {
    this.setParentControl();
    if(!this.parentControl) return;
    this.subscriptions.push(
      from(this.parentControl.valueChanges)
        .subscribe(newValue => this.parentValueChanged(newValue))
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.map(subscription => subscription.unsubscribe());
  }

  protected parentValueChanged(newValue: string): void {}

  protected setParentControl(): void {
    const { parentControlKey } = this.control;
    this.parentControl = <FormControl>this.fGroup.get(parentControlKey);
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
