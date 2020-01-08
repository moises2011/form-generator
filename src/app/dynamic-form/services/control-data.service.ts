import { Injectable } from '@angular/core';
import { DynamicForm } from '../models/icontrol';

@Injectable()
export class ControlDataService {

  constructor() { }

  getCityByCountry(country: string): DynamicForm.ISelectValue[] {
    const cityByCountry = {
      col: [{
        'label': 'Cartagena',
        'value': 'ctg'
      }],
      mex: [{
        'label': 'Jalisco',
        'value': 'jal'
      }]
    };
    return cityByCountry[country];
  }
}
