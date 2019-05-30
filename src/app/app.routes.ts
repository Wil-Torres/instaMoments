//  RUTAS PRINCIPALES
import { RouterModule, Routes } from '@angular/router'
import { PortafolioComponent } from './pages/portafolio/portafolio.component';

// componentes para rutas principales

const appRoutes: Routes = [
    // ruta principal
    {path: 'portafolios/:id', component: PortafolioComponent},
    
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, {useHash: true});