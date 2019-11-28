export type ControlFieldType = 'select' | 'inputText' | 'checkbox';
export type ControlType = 'ARRAY' | 'GROUP' | ControlFieldType;
export type ControlValue = number | string | boolean;
export interface IControlField {
  key: string;
  label: string;
  type: string;
  value?: ControlValue;
  controlType: ControlFieldType;
  order: number;
};
