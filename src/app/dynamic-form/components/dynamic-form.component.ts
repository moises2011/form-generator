import { Component, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IControlField } from '../models/icontrol-field';
import { DynamicFormService } from '../services/dynamic-form.service';
import { Observable, Subscription, of } from 'rxjs';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  @Output() public changes: EventEmitter = new EventEmitter();

  public controls: IControlField[] = [
    {
      key: 'email',
      label: 'Email address',
      type: 'text',
      controlType: 'inputText',
      value: 'email@email.com',
      order: 1
    },{
      key: 'psw',
      label: 'Password',
      type: 'password',
      controlType: 'inputText',
      order: 2
    },{
      key: 'remember',
      label: 'Remember me',
      type: 'password',
      controlType: 'checkbox',
      order: 3
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
    console.log( this.changes)
  }

}
