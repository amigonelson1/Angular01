import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-contact-reactive',
  templateUrl: './contact-reactive.component.html',
  styleUrls: ['./contact-reactive.component.css']
})

export class ContactReactiveComponent {

  contactForm!: FormGroup;
  //myField = new FormControl();
  name!: string;
  departments: string[] = [];

  constructor(private readonly fb: FormBuilder,
    private readonly route: ActivatedRoute) {

  }

  // metodo para ingresar valores dentro del formulario
  onPathValue(): void {
    this.contactForm.patchValue({ name: 'Kakaroto' })
  }

  /*   metodo para setear los valores de un formulario, 
    pero a diferencia del anterior para este metodo es necesario 
    ingresar todos los campos, con alguno que falte dara error en consola */
  onSetValue(): void {
    this.contactForm.setValue({ comment: 'Bienvenidos a todos!!!' })
  }

  ngOnInit(): void {
    /* para el siguiente llamado ['datos'] vienen del app.routing.module */
    this.departments = this.route.snapshot.data['departments']
    this.route.queryParams.subscribe(
      (params: Params) => {
        this.name = params['name']
      }
    )
    this.contactForm = this.initForm();
    this.onPathValue();
    //this.onSetValue();
  }

  onSubmit(): void {
    console.log('Submit in form reactive', this.contactForm.value)
  }

  initForm(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      checkAdult: ['', [Validators.required]],
      department: [''],
      comment: ['', [Validators.required]],
    })
  }

}
