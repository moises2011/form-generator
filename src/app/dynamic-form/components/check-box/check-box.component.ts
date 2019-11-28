import { Component, OnInit, Input } from '@angular/core';
import { IControlField } from '../../models/icontrol-field';
import { FormGroup } from '@angular/forms';
import { AbstractControlField } from '../../models/abstract-control-field';

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.css']
})
export class CheckBoxComponent extends AbstractControlField implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {
  }

}
