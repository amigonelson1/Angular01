import { Component } from '@angular/core';
import { City, DataService } from '../services/data.service';
import { CitiesComponent } from '../cities/cities.component';

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
    this.selection = city;
  }

  onCityDelete(id: string): void {
    if (confirm('Are you sure?')) {
      this.dataSVc.deleteCity(id).subscribe(() => {
        const tempArr = this.cities.filter(city => city._id !== id);
        this.cities = [...tempArr];
        this.onClear();
      })
    }
  }

  onUpdateCity(city: City): void {
    this.dataSVc.updateCity(city).subscribe(() => {
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
