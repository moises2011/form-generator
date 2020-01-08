import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { AbstractControlField } from '../../../models/abstract-control-field';
import { ControlDataService } from 'src/app/dynamic-form/services/control-data.service';
import { DynamicForm } from 'src/app/dynamic-form/models/icontrol';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectComponent extends AbstractControlField {
  control: DynamicForm.ISelectControl;
  constructor(
    protected cd: ChangeDetectorRef,
    protected externalData: ControlDataService) {
    super();
  }

  parentValueChanged(newValue: string) {
    console.debug('parent change value', newValue);
    this.control.enumOptions = this.externalData['getCityByCountry'](newValue);
    this.cd.detectChanges();
  }
}
