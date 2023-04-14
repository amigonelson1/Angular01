import { Component, ViewChild } from '@angular/core';
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

  constructor(private readonly dataSvc: DataService) {

  }

  ngOnInit(): void {
    this.dataSvc.selectedCity$.subscribe((city: City) => this.selection = city)

    this.dataSvc.getCities().subscribe(res => {
      this.cities = [...res];
      console.log(res, this.selection)
    })
  }

  addNewCity(city: string): void {
    this.dataSvc.addNewCity(city).subscribe(res => {
      this.cities.push(res)
    })
  }

  onCitySelected(city: City): void {
    //this.selection = city;
    this.dataSvc.setCity(city);
  }

  onCityDelete(id: string): void {
    if (confirm('Are you sure?')) {
      this.dataSvc.deleteCity(id).subscribe(() => {
        const tempArr = this.cities.filter(city => city._id !== id);
        this.cities = [...tempArr];
        this.onClear();
      })
    }
  }

  onUpdateCity(city: City): void {
    this.dataSvc.updateCity(city).subscribe(() => {
      const tempArr = this.cities.filter(item => item._id !== city._id);
      this.cities = [...tempArr, city];
      this.onClear();
    })
  }

  onClear(): void {
    this.selection = {
      _id: '',
      name: ''
    };
  }

}
