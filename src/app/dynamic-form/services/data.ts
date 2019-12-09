import { ISelectValue, IControl } from "../models/icontrol";
import { Validators } from "@angular/forms";

export const enumOptions: { [k: string]: ISelectValue[] } = {
  country: [
    { value: 'col', label: 'Colombia' },
    { value: 'bra', label: 'Brasil' },
    { value: 'mex', label: 'Mexico' }
  ],
  documentType: [
    { value: 'cc', label: 'Id' },
    { value: 'pas', label: 'Passport' },
    { value: 'oth', label: 'Other' }
  ]
};
export const control: IControl = {
  key: 'personal_info',
  label: 'Personal info',
  controlType: 'group',
  properties: [{
    key: 'email',
    label: 'Email address',
    placeholder: 'test@test.com',
    type: 'text',
    controlType: 'inputText',
    order: 1,
    validations: [
      {
        validation: 'required',
        activated: true,
        message: 'The field is required.',
        async: false,
        type: 'email'
      }
    ]
  }, {
    key: 'psw',
    label: 'Password',
    placeholder: '*********',
    type: 'password',
    controlType: 'inputText',
    order: 2,
    validations: [
      {
        validation: 'required',
        activated: true,
        async: false,
        type: 'email'
      }
    ]
  }, {
    key: 'birthday',
    label: 'Birthday',
    inputMask: 'd0/M0/0000',
    type: 'text',
    controlType: 'inputText',
    order: 2
  }, {
    key: 'remember',
    label: 'Remember me',
    type: 'checkbox',
    controlType: 'checkbox',
    order: 3
  }, {
    key: 'rating',
    label: 'star rating',
    controlType: 'starRating',
    order: 5
  }, {
    key: 'country',
    label: 'Country',
    type: 'select',
    placeholder: 'Select a country',
    controlType: 'select',
    enumOptions: 'country',
    order: 4
  }, {
    key: 'city',
    label: 'city',
    type: 'select',
    placeholder: 'Select a city',
    controlType: 'select',
    enumOptions: 'city',
    parentControlKey: 'country',
    order: 5
  }, {
    key: 'mother',
    label: 'mother',
    controlType: 'group',
    order: 7,
    properties: [{
      key: 'mother_first_name',
      label: 'mother > first name',
      controlType: 'inputText',
      type: 'text',
      order: 2
    }, {
      key: 'mother_last_name',
      label: 'mother > last name',
      controlType: 'inputText',
      type: 'text',
      order: 2
    }, {
      key: 'mother_address',
      label: 'mother > address',
      controlType: 'group',
      order: 3,
      properties: [{
        key: 'mother_adress_street',
        label: 'mother > address > street',
        controlType: 'inputText',
        type: 'text',
        order: 1
      }, {
        key: 'mother_adress_house',
        label: 'mother > address > house',
        controlType: 'inputText',
        type: 'text',
        order: 2
      }, {
        key: 'mother_adress_floor',
        label: 'mother > address > florr',
        controlType: 'inputText',
        type: 'text',
        order: 3
      }]
    }]
  }, {
    key: 'references',
    label: 'references',
    controlType: 'array',
    order: 8,
    properties: [{
      key: 'personal',
      label: 'references > personal',
      controlType: 'group',
      order: 7,
      properties: [{
        key: 'ref_personal_name',
        label: 'references > personal > name',
        controlType: 'inputText',
        type: 'text',
        order: 2
      }, {
        key: 'ref_personal_id',
        label: 'references > personal > id',
        controlType: 'select',
        enumOptions: 'documentType',
        order: 2
      }, {
        key: 'ref_personal_phone',
        label: 'references > personal > phone',
        controlType: 'inputText',
        type: 'text',
        order: 2
      }, {
        key: 'ref_personal_age',
        label: 'references > personal > age',
        controlType: 'inputText',
        type: 'text',
        order: 2
      }]
    }]
  },
  ]
}
