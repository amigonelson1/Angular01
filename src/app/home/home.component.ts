import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  cities = ['Madrid', 'Paris', 'Lima', 'Barcelona']
  name!: string;
  title = 'reto01';
  selection!: string;
  criteria = '';

  ngOnInit(): void {
    //console.log('OnInit ->');
  }

  onCityClicked(city: string): void {
    //console.log('Select ->', city)
    this.selection = city;
  }

  onClearSelection(): void {
    this.selection = '';
  }

  addNewCity(city: string): void {
    this.cities.push(city);
  }

}
