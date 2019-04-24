import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeyuoMainComponent } from './deyuo-main/deyuo-main.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, MatMenuModule, MatMenuItem, MatListModule } from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MenuComponent } from './deyuo-main/menu/menu.component';
import { ContactoComponent } from './deyuo-main/contacto/contacto.component';
import { LoginComponent } from './deyuo-main/login/login.component';
import { MainUsuarioComponent } from './deyuo-main/main-usuario/main-usuario.component';
import { MainEmpleadoComponent } from './deyuo-main/main-empleado/main-empleado.component';
import { PromoMainComponent } from './deyuo-main/promo-main/promo-main.component';
import { MicarritoMainComponent } from './deyuo-main/micarrito-main/micarrito-main.component';


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
    MainEmpleadoComponent,
    PromoMainComponent,
    MicarritoMainComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,  
    NgbModule,
    AppRoutingModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatSidenavModule,
    FormsModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
