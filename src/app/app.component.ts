import { Component } from '@angular/core';
import { A } from './model/A';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  a: A = new A();
}
