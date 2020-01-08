import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AbstractControlField } from '../../../models/abstract-control-field';
import { DynamicForm } from 'src/app/dynamic-form/models/icontrol';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputTextComponent extends AbstractControlField {
  control: DynamicForm.IInputControl;
  constructor() {
    super();
  }
}
