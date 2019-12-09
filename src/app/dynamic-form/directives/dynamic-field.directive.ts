import { Directive, Input, OnInit, ViewContainerRef, ComponentFactoryResolver, Output, OnDestroy, ComponentRef, ElementRef, OnChanges } from '@angular/core';
import { InputTextComponent } from '../components/items/input-text/input-text.component';
import { SelectComponent } from '../components/items/select/select.component';
import { CheckBoxComponent } from '../components/items/check-box/check-box.component';
import { AbstractControlField } from '../models/abstract-control-field';
import { Subscription } from 'rxjs';
import { FormGroupComponent } from '../components/containers/form-group/form-group.component';
import { FormArrayComponent } from '../components/containers/form-array/form-array.component';
import { MessageErrorComponent } from '../components/items/message-error/message-error.component';

const componentMapper = {
  group: FormGroupComponent,
  array: FormArrayComponent,
  inputText: InputTextComponent,
  select: SelectComponent,
  checkbox: CheckBoxComponent,
  message: MessageErrorComponent
};

@Directive({
  selector: '[dynamicFormControl]'
})
export class DynamicFieldDirective extends AbstractControlField implements OnInit, OnChanges, OnDestroy{
  private componentRef: AbstractControlField;
  private subscription: Subscription;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
    ) {
    super();
  }

  ngOnInit(): void {
    this.createComponent();
  }

  private createComponent(): void {
    const inputType = componentMapper[this.control.controlType];
    const factory = this.resolver.resolveComponentFactory(inputType);
    this.componentRef = (<AbstractControlField>this.container.createComponent(factory).instance);
    this.componentRef.control = this.control;
    this.componentRef.fGroup = this.fGroup;
    this.componentRef.validationMessagesChange = this.validationMessagesChange;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
