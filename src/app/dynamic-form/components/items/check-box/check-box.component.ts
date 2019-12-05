import { Component } from '@angular/core';
import { AbstractControlField } from 'src/app/dynamic-form/models/abstract-control-field';

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
