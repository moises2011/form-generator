import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, AbstractControl, AbstractControlDirective, FormArray, ValidatorFn, AsyncValidatorFn, Validators } from '@angular/forms';
import { IControlField } from '../models/icontrol-field';
import { IControl, ISelectValue, IValidation } from '../models/icontrol';
import { control, enumOptions } from './data';

@Injectable()
export class DynamicFormService {

  constructor(
    private formBuilder: FormBuilder
  ) { }

  buildControl(model: IControl, enumOptions: { [k: string]: ISelectValue[] }): AbstractControl {
    const {properties, controlType} = model;
    if(controlType === 'group' && properties.length > 0) {
      const formGroup: FormGroup = new FormGroup({});
      properties.forEach((control: IControl) => {
        formGroup.registerControl(control.key, this.buildControl(control, enumOptions));
      });
      return formGroup;
    } else if(controlType === 'array' && properties.length > 0) {
      const formGroup: FormArray = new FormArray([]);
      properties.forEach((control: IControl) => {
        formGroup.push(this.buildControl(control, enumOptions));
      });
      return formGroup;
    }
    if(model.enumOptions) {
      const nameList = <string>model.enumOptions;
      model.enumOptions = enumOptions[nameList];
    }
    return new FormControl(model.value, {
      validators: [Validators.required],
      asyncValidators: [],
      updateOn: 'blur'
    });
  }

  buildValidations(validators: IValidation[] = []): ValidatorFn[] {
    return validators.map((validator: IValidation) => {
      return Validators.min(5);
    });
  }

  getDataForm(): Promise<{control: IControl, enumOptions: { [k:string]: ISelectValue[] } }> {
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
