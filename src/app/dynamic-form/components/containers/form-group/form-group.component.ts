import { Component, OnInit } from '@angular/core';
import { AbstractControlField } from 'src/app/dynamic-form/models/abstract-control-field';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss']
})
export class FormGroupComponent extends AbstractControlField implements OnInit {

  constructor() {
    super();
   }

  ngOnInit() {
    // console.log(this.control.key, '[GROUP] > ', this.getFormGroup());
  }

  // overriding super class method
  getFormGroup(): AbstractControl {
    return this.fGroup.get(this.control.key) || this.fGroup;
  }

}
