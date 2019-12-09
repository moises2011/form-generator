import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AbstractControlField } from 'src/app/dynamic-form/models/abstract-control-field';

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckBoxComponent extends AbstractControlField{
  constructor() {
    super();
  }
}
