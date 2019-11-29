export type ControlFieldType = 'select' | 'inputText' | 'checkbox';
export type ControlType = 'ARRAY' | 'GROUP' | ControlFieldType;
export type ControlValue = number | string | boolean;
export interface IControl {
  key: string;
  label: string;
  inputMask?: string;
  placeholder?: string;
  type: string;
  value?: ControlValue;
  controlType: ControlFieldType;
  enumOptions?: ISelectValue[];
  order: number;
};
export interface ISelectValue {
  value: ControlValue;
  label: string;
};
