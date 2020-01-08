import { FormControl, ControlValueAccessor } from "@angular/forms";
export namespace DynamicForm {
  export type ControlFieldType = 'select' | 'inputText' | 'checkbox' | 'starRating';
  export type ControlType = 'array' | 'group' | ControlFieldType;
  export type ControlValue = number | string | boolean;
  export type Control = ISelectControl | ICheckControl | IInputControl | IStarControl;
  export type EnumOptions = { [k: string]: ISelectValue[] };
  export interface IControl {
    key: string;
    label: string;
    value?: ControlValue;
    formControl?: FormControl;
    controlType: ControlType;
    validations?: IValidation[];
    inputMask?: string;
    order?: number;
    type?: string;
    properties?: Control[];
    parentControlKey?: string;
  };

  export interface ISelectControl extends IControl {
    enumOptions?: ISelectValue[] | string;
    multiple?: boolean;
  }
  export interface ICheckControl extends IControl {
  }
  export interface IInputControl extends IControl {
    placeholder?: string;
  }
  export interface IStarControl extends IControl {
  }

  export interface ISelectValue {
    value: ControlValue;
    label: string;
  };

  export interface IValidation {
    validation: string;
    message?: string;
    type: string;
    activated: boolean;
    async?: boolean;
  }
  export interface IControlField extends ControlValueAccessor {

  };
}
