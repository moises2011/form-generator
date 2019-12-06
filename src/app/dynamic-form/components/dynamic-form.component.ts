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
  public enumOptions: { [k:string]: ISelectValue[] };
  public control: IControl;
  public loading: boolean;

  group: any;
  constructor(
    private dynamicFormService: DynamicFormService
  ) { }

  async ngOnInit() {
    this.loading = true;
    const { control, enumOptions } = await this.dynamicFormService.getDataForm();
    this.control = control;
    this.enumOptions = enumOptions;
    this.group = this.dynamicFormService.buildControl(this.control);
    this.group.valueChanges
    .subscribe(value => {
      this.changes.emit(value);
    });
    this.loading = false;
  }

  getGroup() {
    return this.group;
  }

}
