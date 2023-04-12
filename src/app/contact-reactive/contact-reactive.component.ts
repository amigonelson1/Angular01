import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-reactive',
  templateUrl: './contact-reactive.component.html',
  styleUrls: ['./contact-reactive.component.css']
})

export class ContactReactiveComponent {

  contactForm!: FormGroup;
  //myField = new FormControl();

  constructor(private readonly fb: FormBuilder) {

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
