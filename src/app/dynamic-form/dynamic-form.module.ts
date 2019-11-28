import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './components/dynamic-form.component';
import { DynamicFormDirective } from './directives/dynamic-form.directive';
import { DynamicFormService } from './services/dynamic-form.service';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextComponent } from './components/input-text/input-text.component';
import { CheckBoxComponent } from './components/check-box/check-box.component';
import { DynamicFieldDirective } from './directives/dynamic-field.directive';
import { SelectComponent } from './components/select/select.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    DynamicFormService
  ],
  declarations: [
    DynamicFormComponent,
    DynamicFormDirective,
    DynamicFieldDirective,
    InputTextComponent,
    CheckBoxComponent,
    SelectComponent
  ],
  exports: [
    DynamicFormComponent
  ]
})
export class DynamicFormModule { }
