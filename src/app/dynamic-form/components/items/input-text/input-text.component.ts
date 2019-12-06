import { Component } from '@angular/core';
import { AbstractControlField } from '../../../models/abstract-control-field';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent extends AbstractControlField {
  constructor() {
    super();
  }
}
