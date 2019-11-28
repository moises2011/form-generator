import { Injectable } from '@angular/core';

@Injectable()
export class ControlFieldService {

  constructor() { }

  sendGreetings(subject: string) {
    return `Hi ${subject}! I'm the Controlfield service.`;
  }
}
