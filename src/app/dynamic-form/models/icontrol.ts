import { ValidatorFn, AsyncValidatorFn, FormControl } from "@angular/forms";

export type ControlFieldType = 'select' | 'inputText' | 'checkbox';
export type ControlType = 'array' | 'group' | ControlFieldType;
export type ControlValue = number | string | boolean;
export interface IControl {
  key: string;
  label: string;
  value?: ControlValue;
  formControl?: FormControl;
  placeholder?: string;
  controlType: ControlType;
  validations?: IValidation[];
  inputMask?: string;
  enumOptions?: ISelectValue[];
  order?: number;
  type?: string;
  properties?: IControl[];
};
export interface ISelectValue {
  value: ControlValue;
  label: string;
};

export interface IValidation {
  validation: string;
  message: string;
  type: string;
  activated: boolean;
  async?: boolean;
}
