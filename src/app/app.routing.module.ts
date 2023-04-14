import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { UserComponent } from "./users/user/user.component";
import { ListComponent } from "./users/list/list.component";
import { DetailsComponent } from "./users/details/details.component";
import { PermissionsGuard } from "./guards/permissions.guard";

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    /* El siguiente componente sera cargado solo cuando sea solicitado al momento de cargar la app */
    {
        path: 'contact-reactive',
        loadChildren: () => import('./contact-reactive/contact-reactive.module').then(m => m.ContactReactiveModule)
    },
    {
        path: 'contact-template/:id', component: ContactComponent, // el /:id es para poder agregarle a las ritas ids para personalizar;
    },
    { path: 'home', component: HomeComponent },
    {
        path: 'users', component: UserComponent, canActivate: [PermissionsGuard], // con canActive protegemos la ruta para evitar ingreso
        children: [
            { path: 'list', component: ListComponent },
            { path: 'details', component: DetailsComponent },]
    },
    { path: '**', component: PagenotfoundComponent },

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }