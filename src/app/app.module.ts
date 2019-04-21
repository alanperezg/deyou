import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeyuoMainComponent } from './deyuo-main/deyuo-main.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule } from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MenuComponent } from './deyuo-main/menu/menu.component';
import { ContactoComponent } from './deyuo-main/contacto/contacto.component';
import { LoginComponent } from './deyuo-main/login/login.component';
import { MainUsuarioComponent } from './deyuo-main/main-usuario/main-usuario.component';
import { MainEmpleadoComponent } from './deyuo-main/main-empleado/main-empleado.component';

@NgModule({
  declarations: [
    AppComponent,
    DeyuoMainComponent,
    HeaderComponent,
    HomeComponent,
    MenuComponent,
    ContactoComponent,
    LoginComponent,
    MainUsuarioComponent,
    MainEmpleadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatSidenavModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
