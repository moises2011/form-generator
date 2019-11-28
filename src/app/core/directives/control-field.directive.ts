import { Directive, ElementRef, HostListener, Input, Output, EventEmitter } from '@angular/core';
import { ControlFieldService } from '../services/control-field.service';

@Directive({
  selector: '[appControlField]'
})
export class ControlFieldDirective {
  @Input() name: string;
  @Input() scheme: any;
  @Output() greet = new EventEmitter();
  constructor(
    private elementRef: ElementRef,
    private service: ControlFieldService
    ) {}

  @HostListener('click') mouseOver() {
    console.log('My name is', this.name, this.scheme.fn());
    const text = this.service.sendGreetings(this.name);
    this.greet.emit(text);
  }

}
