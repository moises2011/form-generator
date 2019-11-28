import { Directive, Input, OnInit } from '@angular/core';
import { IControlField } from '../models/icontrol-field';
import { FormGroup } from '@angular/forms';
import { AbstractControlField } from '../models/abstract-control-field';

@Directive({
  selector: '[appDynamicField]'
})
export class DynamicFieldDirective implements OnInit{
  ngOnInit(): void {
  }

}
