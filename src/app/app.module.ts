import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app-router.module';

import { AppComponent } from './app.component';
import { VentasModule } from './ventas/ventas.module';
import {SharedModule} from './shared/shared.module';

//primeNg
//import {ButtonModule} from 'primeng/button';
//import {CardModule} from 'primeng/card';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    SharedModule,
    VentasModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
