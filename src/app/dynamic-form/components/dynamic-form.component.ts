import { Component, OnInit, Output, EventEmitter, Input, TemplateRef, ViewEncapsulation } from '@angular/core';
import { DynamicFormService } from '../services/dynamic-form.service';
import { DynamicForm } from '../models/icontrol';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DynamicFormComponent implements OnInit {
  @Input() headerTemplate: TemplateRef<any>;
  @Input() footerTemplate: TemplateRef<any>;
  @Output() public changes: EventEmitter<any> = new EventEmitter();
  public enumOptions: DynamicForm.EnumOptions;
  public control: DynamicForm.Control;
  public loading: boolean;
  valueRating = 0;
  group: any;
  constructor(
    private dynamicFormService: DynamicFormService
  ) { }

  async ngOnInit() {
    this.loading = true;
    const { control, enumOptions } = await this.dynamicFormService.getDataForm();
    this.control = control;
    this.enumOptions = enumOptions;
    this.group = this.dynamicFormService.buildControl(this.control, enumOptions);
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
