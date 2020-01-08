import { Injectable } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, FormArray, ValidatorFn, Validators } from '@angular/forms';
import { DynamicForm } from '../models/icontrol';
import { control, enumOptions } from '../mock/data';

@Injectable()
export class DynamicFormService {

  buildControl(model: DynamicForm.Control, enumOptions: DynamicForm.EnumOptions): AbstractControl {
    const {properties, controlType} = model;
    if(controlType === 'group' && properties.length > 0) {
      const formGroup: FormGroup = new FormGroup({});
      properties.forEach((control: DynamicForm.IControl) => {
        formGroup.registerControl(control.key, this.buildControl(control, enumOptions));
      });
      return formGroup;
    } else if(controlType === 'array' && properties.length > 0) {
      const formGroup: FormArray = new FormArray([]);
      properties.forEach((control: DynamicForm.IControl) => {
        formGroup.push(this.buildControl(control, enumOptions));
      });
      return formGroup;
    }
    if(model.controlType === 'select') {
      model = this.setEnumOptions(model, enumOptions);
    }
    return new FormControl(model.value, {
      validators: [Validators.required],
      asyncValidators: [],
      updateOn: 'blur'
    });
  }

  setEnumOptions(model: DynamicForm.ISelectControl, enumOptions: DynamicForm.EnumOptions) {
    if(model.enumOptions) {
      const nameList = <string>model.enumOptions;
      model.enumOptions = enumOptions[nameList];
    }
    return model;
  }

  buildValidations(validators: DynamicForm.IValidation[] = []): ValidatorFn[] {
    return validators.map((validator: DynamicForm.IValidation) => {
      return Validators.min(5);
    });
  }

  getDataForm(): Promise<{control: DynamicForm.Control, enumOptions: DynamicForm.EnumOptions }> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          control,
          enumOptions
        });
      }, 1000);
    });
  }
}
