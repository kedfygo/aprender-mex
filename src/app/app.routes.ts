import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TemaComponent } from './components/tema/tema.component';
import { MantenimientoComponent } from './components/mantenimiento/mantenimiento.component';
import { AgregarComponent } from './components/mantenimiento/agregar.component';



const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'tema', component: TemaComponent },
    { path: 'tema/:id', component: TemaComponent },
    { path: 'mantenimiento', component: MantenimientoComponent },
    { path: 'agregar', component: AgregarComponent },
    { path: 'agregar/:id', component: AgregarComponent },
    { path: 'agregar/:categoria/:id', component: AgregarComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
