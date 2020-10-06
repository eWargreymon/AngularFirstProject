import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome World!';
  description = 'Welcome to our angular project. Start now!';

  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

}
