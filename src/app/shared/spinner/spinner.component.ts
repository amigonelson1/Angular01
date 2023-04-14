import { Component } from '@angular/core';
import { SpinnerService } from './spinner.service';

@Component({
  selector: 'app-spinner',
  template: `
  <div class="overlay" *ngIf="isLoading$ | async">
  <!-- <div class="overlay" *ngIf="true"> -->
    <div class="lds-ellipsis">
    <div></div><div></div><div></div><div></div>
    </div>
  </div>
  `,
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent {
  isLoading$ = this.spinerSvc.isLoading$;

  //los contructures inyectan los servicios
  constructor(private readonly spinerSvc: SpinnerService) {

  }

}
