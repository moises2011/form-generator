import { Component } from '@angular/core';
import { AbstractControlField } from '../../models/abstract-control-field';

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.css']
})
export class CheckBoxComponent extends AbstractControlField{
  constructor() {
    super();
  }
}
