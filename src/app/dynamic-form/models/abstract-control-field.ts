import { Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { IControl } from "./icontrol";

export abstract class AbstractControlField implements OnInit{
  @Input() control: IControl;
  @Input() fGroup: FormGroup;

  ngOnInit(): void {
    console.log(this.fGroup);
  }
}
