import { Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { IControlField } from "./icontrol-field";

export abstract class AbstractControlField implements OnInit{
  @Input() control: IControlField;
  @Input() fGroup: FormGroup;

  ngOnInit(): void {
    console.log(this.fGroup);
  }
}
