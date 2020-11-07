import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'groccery-app';

  constructor()
  {
    console.log('app.componenet initiated.');
    debugger;

  }
}
