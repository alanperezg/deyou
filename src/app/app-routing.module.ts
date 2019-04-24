import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './deyuo-main/login/login.component';
import { ContactoComponent } from './deyuo-main/contacto/contacto.component';
import { MenuComponent } from './deyuo-main/menu/menu.component';
import { MainEmpleadoComponent } from './deyuo-main/main-empleado/main-empleado.component';
import { MainUsuarioComponent } from './deyuo-main/main-usuario/main-usuario.component';
import { DeyuoMainComponent } from './deyuo-main/deyuo-main.component';
import { MicarritoMainComponent } from './deyuo-main/micarrito-main/micarrito-main.component';
import { PromoMainComponent } from './deyuo-main/promo-main/promo-main.component';

const routes: Routes = [
  {path:'', redirectTo:'/home',pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'contacto', component:ContactoComponent},
  {path:'empleado/:id', component:MainEmpleadoComponent},
  {path:'usuario/:id', component:MainUsuarioComponent},
  {path:'menu',component:MenuComponent},
  {path:'micarrito', component:MicarritoMainComponent},
  {path:'promociones',component:PromoMainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
