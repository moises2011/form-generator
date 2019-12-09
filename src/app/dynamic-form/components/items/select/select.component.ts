import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { AbstractControlField } from '../../../models/abstract-control-field';
import { ISelectValue } from '../../../models/icontrol';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectComponent extends AbstractControlField {
  constructor() {
    super();
  }
}
