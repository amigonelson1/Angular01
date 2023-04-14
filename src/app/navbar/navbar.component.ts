import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {

  constructor(private readonly router: Router) { }

  goToReactive(): void {
    /*     la siguiente es otra opcion para navegar y agregar un query param o parametro de busqueda
        (['Ruta que deseo ir'],{ queryParams : {'atributo': 'valor'}}), quedaria: ruta?atributo=valor */
    this.router.navigate(['contact-reactive'], { queryParams: { name: 'JAmaris' } })
  }
  goToTemplate(): void {
    /*  De la siguiente forma pasamos la: ruta/un valor adicional */
    this.router.navigate(['contact-template', '508'])
  }

}
