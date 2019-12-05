import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, AbstractControl, AbstractControlDirective, FormArray } from '@angular/forms';
import { IControlField } from '../models/icontrol-field';
import { IControl } from '../models/icontrol';

@Injectable()
export class DynamicFormService {

  constructor(
    private formBuilder: FormBuilder
  ) { }

  buildControl(model: IControl): AbstractControl {
    const {properties, controlType} = model;
    if(controlType === 'group' && properties.length > 0) {
      const formGroup: FormGroup = new FormGroup({});
      properties.forEach((control: IControl) => {
        formGroup.registerControl(control.key, this.buildControl(control));
      });
      return formGroup;
    } else if(controlType === 'array' && properties.length > 0) {
      const formGroup: FormArray = new FormArray([]);
      properties.forEach((control: IControl) => {
        formGroup.push(this.buildControl(control));
      });
      return formGroup;
    }
    return new FormControl(model.value);
  }
}
