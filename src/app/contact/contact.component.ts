import { Component } from '@angular/core';
interface ContactForm {
  "name": string;
  "checkAdult": boolean;
  "department": string;
  "comment": string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent {

  model = {
    name: '',
    checkAdult: false,
    department: '',
    comment: ''
  }

  onSubmit(form: any): void {
    console.log('Submit in form with dates: ', form)
  }

}
