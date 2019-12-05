import { Component, OnInit, Output, EventEmitter, Input, TemplateRef } from '@angular/core';
import { FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { DynamicFormService } from '../services/dynamic-form.service';
import { IControl, ISelectValue } from '../models/icontrol';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  @Input() headerTemplate: TemplateRef<any>;
  @Input() footerTemplate: TemplateRef<any>;
  @Output() public changes: EventEmitter<any> = new EventEmitter();
  public enumOptions: { [k:string]: ISelectValue[] } = {
    country: [
      {value: 'col', label:'Colombia'},
      {value: 'bra', label:'Brasil'},
      {value: 'mex', label:'Mexico'}
    ]
  };
  public control: IControl = {
    key: 'personal_info',
    label: 'Personal info',
    controlType: 'group',
    properties: [{
      key: 'email',
      label: 'Email address',
      placeholder: 'test@test.com',
      type: 'text',
      controlType: 'inputText',
      order: 1,
      validations: [
        {
          validation: Validators.email,
          activated: true,
          message: 'Is not an email.',
          async: false,
          type: 'email'
        }
      ]
    }, {
      key: 'psw',
      label: 'Password',
      placeholder: '*********',
      type: 'password',
      controlType: 'inputText',
      order: 2
    }, {
      key: 'birthday',
      label: 'Birthday',
      inputMask: 'd0/M0/0000',
      type: 'text',
      controlType: 'inputText',
      order: 2
    }, {
      key: 'remember',
      label: 'Remember me',
      type: 'checkbox',
      controlType: 'checkbox',
      order: 3
    }, {
      key: 'country',
      label: 'Country',
      type: 'select',
      placeholder: 'Select a country',
      controlType: 'select',
      enumOptions: this.enumOptions.country,
      order: 4
    }, {
      key: 'mother',
      label: 'mother',
      controlType: 'group',
      order: 7,
      properties: [{
        key: 'mother_first_name',
        label: 'mother > first name',
        controlType: 'inputText',
        type: 'text',
        order: 2
      }, {
        key: 'mother_last_name',
        label: 'mother > last name',
        controlType: 'inputText',
        type: 'text',
        order: 2
      }, {
        key: 'mother_address',
        label: 'mother > address',
        controlType: 'group',
        order: 3,
        properties: [{
          key: 'mother_adress_street',
          label: 'mother > address > street',
          controlType: 'inputText',
          type: 'text',
          order: 1
        }, {
          key: 'mother_adress_house',
          label: 'mother > address > house',
          controlType: 'inputText',
          type: 'text',
          order: 2
        }, {
          key: 'mother_adress_floor',
          label: 'mother > address > florr',
          controlType: 'inputText',
          type: 'text',
          order: 3
        }]
      }]
    }, {
      key: 'references',
      label: 'references',
      controlType: 'array',
      order: 8,
      properties: [ {
        key: 'personal',
        label: 'references > personal',
        controlType: 'group',
        order: 7,
        properties: [{
          key: 'ref_personal_first_name',
          label: 'references > personal > first name',
          controlType: 'inputText',
          type: 'text',
          order: 2
        }, {
          key: 'ref_personal_last_name',
          label: 'references > personal > last name',
          controlType: 'inputText',
          type: 'text',
          order: 2
        }]
      }]
    },
    ]
  }

  group: any;
  constructor(
    private dynamicFormService: DynamicFormService
  ) { }

  ngOnInit() {
    this.group = this.dynamicFormService.buildControl(this.control);
    this.group.valueChanges
    .subscribe(value => {
      //this.onChange(value);
      this.changes.emit(value);
      //this._ref.detectChanges();
    });
  }

  getGroup() {
    return this.group;
  }

}
