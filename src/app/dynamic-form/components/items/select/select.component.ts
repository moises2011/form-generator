import { Component, Input } from '@angular/core';
import { AbstractControlField } from '../../../models/abstract-control-field';
import { ISelectValue } from '../../../models/icontrol';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent extends AbstractControlField {
  constructor() {
    super();
  }
}
