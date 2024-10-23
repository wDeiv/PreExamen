import { Routes } from '@angular/router';
import { ProductoComponent } from './producto/producto.component';
import { ClienteComponent } from './cliente/cliente.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path:'',
        component: HomeComponent,
        title: 'Home'
    },
    {
        path:'producto',
        component: ProductoComponent,
        title:'prod'
    },
    {
        path:'cliente',
        component: ClienteComponent,
        title:'cliente'
    },
    {
        path:'**',
        redirectTo:'',
        pathMatch:'full'
    }
];
