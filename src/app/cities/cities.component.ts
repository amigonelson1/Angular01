import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { City } from '../services/data.service';

@Component({
  selector: 'app-cities',
  template: `
    <ul class="list-group">
      <li class="list-group-item mt-1" (click)="onCitySelected(city)"
        [ngClass]="{'active': city._id === selection?._id}">
        {{city.name | titlecase}}
          <button class="btn btn-danger float-end" type="button"
          (click)="onCityDelete(city._id)">
            Delete
          </button>
      </li>
    </ul>    
      `,
  styleUrls: ['./cities.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CitiesComponent {
  @Input() city!: City;
  @Input() selection!: City;

  /* cada @output debe crear una nueva instancia de EventEmitter y ser importada de 
  @angular/core e ir asociado dentro de la funcion con .emit para poder ser enviada la info */
  @Output() citySelectedEvent = new EventEmitter<City>
  @Output() cityDeleteEvent = new EventEmitter<string>

  onCitySelected(city: City): void {
    //emit
    this.citySelectedEvent.emit(city);
  }

  onCityDelete(id: string): void {
    this.cityDeleteEvent.emit(id);
  }

}
