import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Form generator app';
  scheme = {
    bar: 'foo',
    fn: name => 'I\'m inside of scheme object :)'
  };

  showGreetings(greets: string) {
    console.log(greets);
  }
}
