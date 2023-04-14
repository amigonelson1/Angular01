import { Component } from '@angular/core';
import { City, DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  cities: City[] = [];
  title = 'reto01';
  selection!: City;
  criteria = '';

  constructor(private readonly dataSVc: DataService) {

  }

  ngOnInit(): void {
    this.dataSVc.getCities().subscribe(res => {
      this.cities = [...res];
      console.log(res, this.selection)
    })
  }

  addNewCity(city: string): void {
    this.dataSVc.addNewCity(city).subscribe(res => {
      this.cities.push(res)
    })
  }

  onCitySelected(city: City): void {
    //console.log('Select ->', city)
    this.selection = city;
  }

  onCityDelete(id: string): void {
    console.log('Click in button delete with id: ', id)
  }

  onClear(): void {
    this.selection = {
      _id: '',
      name: ''
    };
  }

}
