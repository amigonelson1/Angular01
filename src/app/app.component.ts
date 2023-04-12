import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cities= ['Madrid', 'Paris', 'Lima']
  name!: string;
  title = 'reto01';
}
