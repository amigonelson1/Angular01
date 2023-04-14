import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
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
  id!: string;

  constructor(private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id']; // 'id' debe ser el mismo nombre de '/:id'
    })
  }

  model = {
    name: '',
    checkAdult: false,
    department: '',
    comment: ''
  }

  onSubmit(form: NgForm): void {
    console.log('Submit in form with dates: ', form)
  }

}
