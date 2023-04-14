import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactReactiveComponent } from './contact-reactive.component';
import { WithoutSaveGuard } from '../guards/without-save.guard';
import { DataResolverService } from '../resolvers/data.resolver.service';

const routes: Routes = [
  {
    path: '',
    component: ContactReactiveComponent,
    canDeactivate: [WithoutSaveGuard], // para proteger el abandono de la ruta;
    resolve: { departments: DataResolverService } // Resuelve la ruta luego de obtener todos los datos;
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactReactiveRoutingModule { }
