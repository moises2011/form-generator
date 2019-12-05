import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { AbstractControlField } from 'src/app/dynamic-form/models/abstract-control-field';
import { AbstractControl, FormArray, FormGroup } from '@angular/forms';
import { DynamicFormService } from 'src/app/dynamic-form/services/dynamic-form.service';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent extends AbstractControlField implements OnInit, OnChanges {
  constructor(
    private dynamicFormService: DynamicFormService
    ) {
    super();
  }

  ngOnInit() {
    console.log(this.control.key, '[ARRAY] > ', this.getFormGroup());
  }

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    console.log(this.control.key, '[ARRAY] > ', this.getFormGroup());
  }

  get items() {
    return this.fGroup.get(this.control.key) as FormArray;
  }

  addItem() {
    const control = this.dynamicFormService.buildControl(this.control.properties[0]);
    console.log(control);
    this.items.push(control);
    this.control.properties.push(this.control.properties[0]);
  }

  removeItem(idx: number) {
    this.items.removeAt(idx);
    this.control.properties.splice(idx-1, 1);
  }

  // overriding super class method
  getFGroup(idx: number): AbstractControl {
    return this.items.get(''+idx);
  }

}
