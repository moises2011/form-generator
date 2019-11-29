import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicFormService } from '../services/dynamic-form.service';
import { IControl, ISelectValue } from '../models/icontrol';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  @Output() public changes: EventEmitter<any> = new EventEmitter();
  public enumOptions: { [k:string]: ISelectValue[] } = {
    country: [
      {value: 'col', label:'Colombia'},
      {value: 'bra', label:'Brasil'},
      {value: 'mex', label:'Mexico'}
    ]
  };
  public controls: IControl[] = [
    {
      key: 'email',
      label: 'Email address',
      placeholder: 'test@test.com',
      type: 'text',
      controlType: 'inputText',
      order: 1
    },{
      key: 'psw',
      label: 'Password',
      placeholder: '*********',
      type: 'password',
      controlType: 'inputText',
      order: 2
    },{
      key: 'birthday',
      label: 'Birthday',
      inputMask: 'd0/M0/0000',
      type: 'text',
      controlType: 'inputText',
      order: 2
    },{
      key: 'remember',
      label: 'Remember me',
      type: 'checkbox',
      controlType: 'checkbox',
      order: 3
    },{
      key: 'country',
      label: 'Country',
      type: 'select',
      placeholder: 'Select a country',
      controlType: 'select',
      enumOptions: this.enumOptions.country,
      order: 4
    }
  ];
  group: FormGroup;
  constructor(
    private dynamicFormService: DynamicFormService
  ) { }

  ngOnInit() {
    this.group = this.dynamicFormService.buildControl(this.controls);
    this.group.valueChanges
    .subscribe(value => {
      //this.onChange(value);
      this.changes.emit(value);
      //this._ref.detectChanges();
    });
  }

}
