import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import { LibrosComponent } from './libros/libros.component';
import { AutoresComponent } from './autores/autores.component';
import { HttpClientModule } from '@angular/common/http' 
import { TableModule } from 'primeng/table';
import { CardModule} from 'primeng/card';
import { DialogModule} from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { MessagesModule } from 'primeng/messages';
import { FormularioLibroComponent } from './libros/formulario-libros/formulario-libros.component';
import { ConfirmationService } from 'primeng/api';
import {  ConfirmDialogModule } from 'primeng/confirmdialog';
import { DropdownModule } from 'primeng/dropdown';
import { LoginComponent } from './login/login.component';
import { MainAppComponent } from './main-app/main-app.component';
@NgModule({
  declarations: [
    AppComponent,
    LibrosComponent,
    AutoresComponent,
    FormularioLibroComponent,
    LoginComponent,
    MainAppComponent
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    MenubarModule,
    HttpClientModule,
    TableModule,

    CardModule,
    DialogModule,
    BrowserAnimationsModule,
    InputTextModule,
    InputNumberModule,
    FormsModule,
    MessagesModule,
    ConfirmDialogModule,
    DropdownModule
  
  ],
  providers: [ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }