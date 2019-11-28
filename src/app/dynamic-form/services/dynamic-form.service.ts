import { Injectable } from '@angular/core';
import { FormGroup, AbstractFormGroupDirective, FormBuilder, Form, FormControl } from '@angular/forms';
import { IControlField } from '../models/icontrol-field';

@Injectable()
export class DynamicFormService {

  constructor(
    private formBuilder: FormBuilder
  ) { }

  buildControl(model: IControlField[]): FormGroup {
    const formGroup = {};
    model.forEach((control: IControlField) => {
      formGroup[control.key] = new FormControl(control.value);
    });
    return new FormGroup(formGroup);
  }
}
