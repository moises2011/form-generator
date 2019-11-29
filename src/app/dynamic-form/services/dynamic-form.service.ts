import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { IControlField } from '../models/icontrol-field';
import { IControl } from '../models/icontrol';

@Injectable()
export class DynamicFormService {

  constructor(
    private formBuilder: FormBuilder
  ) { }

  buildControl(model: IControl[]): FormGroup {
    const formGroup = {};
    model.forEach((control: IControl) => {
      formGroup[control.key] = new FormControl(control.value);
    });
    return new FormGroup(formGroup);
  }
}
