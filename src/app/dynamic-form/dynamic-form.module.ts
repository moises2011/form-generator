import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './components/dynamic-form.component';
import { DynamicFormService } from './services/dynamic-form.service';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextComponent } from './components/items/input-text/input-text.component';
import { CheckBoxComponent } from './components/items/check-box/check-box.component';
import { DynamicFieldDirective } from './directives/dynamic-field.directive';
import { SelectComponent } from './components/items/select/select.component';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { MessageErrorComponent } from './components/items/message-error/message-error.component';
import { FormGroupComponent } from './components/containers/form-group/form-group.component';
import { FormArrayComponent } from './components/containers/form-array/form-array.component';

export let options: Partial<IConfig> | (() => Partial<IConfig>);
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(options)
  ],
  providers: [
    DynamicFormService
  ],
  declarations: [
    DynamicFormComponent,
    DynamicFieldDirective,
    InputTextComponent,
    CheckBoxComponent,
    SelectComponent,
    MessageErrorComponent,
    FormGroupComponent,
    FormArrayComponent
  ],
  exports: [
    DynamicFormComponent
  ],
  entryComponents: [
    InputTextComponent,
    CheckBoxComponent,
    SelectComponent,
    FormGroupComponent,
    FormArrayComponent,
    MessageErrorComponent
  ]
})
export class DynamicFormModule { }
