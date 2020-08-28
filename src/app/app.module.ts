import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { EmpeladosComponent } from './components/empleados/empelados/empelados.component';
import { EmpeladosListComponent } from './components/empleados/empelados-list/empelados-list.component';
import { TelefonosListComponent } from './components/telefonos/telefonos-list/telefonos-list.component';
import { TelefonosFormComponent } from './components/telefonos/telefonos-form/telefonos-form.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpeladosComponent,
    EmpeladosListComponent,
    TelefonosListComponent,
    TelefonosFormComponent
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
