import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AbstractControlField } from 'src/app/dynamic-form/models/abstract-control-field';
import { DynamicForm } from 'src/app/dynamic-form/models/icontrol';

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckBoxComponent extends AbstractControlField{
  control: DynamicForm.ICheckControl;
  constructor() {
    super();
  }
}
