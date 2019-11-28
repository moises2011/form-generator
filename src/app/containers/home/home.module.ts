import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { DynamicFormModule } from 'src/app/dynamic-form/dynamic-form.module';

@NgModule({
  imports: [
    CommonModule,
    DynamicFormModule
  ],
  declarations: [HomeComponent],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
