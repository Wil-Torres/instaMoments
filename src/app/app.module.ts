import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { GaleriaComponent } from './pages/galeria/galeria.component';
import { CommonModule } from '@angular/common';
import { APP_ROUTES } from './app.routes';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';

@NgModule({
  declarations: [
    AppComponent,
    GaleriaComponent,
    PortafolioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    APP_ROUTES,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
