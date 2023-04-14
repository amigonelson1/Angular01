import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { City } from '../services/data.service';

@Component({
  selector: 'app-form-new-item',
  templateUrl: './form-new-item.component.html',
  styleUrls: ['./form-new-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormNewItemComponent {

  @Input() className = 'btn-primary';
  @Input() label!: string;
  @Input() selection!: City;

  @Output() newItemEvent = new EventEmitter<string>();

  onAddNewItem(item: string): void {
    this.newItemEvent.emit(item);
  }

  counterRender(): boolean{
    //console.log('Render form');
    return true;
  }

}
