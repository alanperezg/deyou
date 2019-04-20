import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Acceso } from '../../models/acceso';
import { GlobalService } from '../../global.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  acceso: Acceso;
  hide:boolean = true;
  SRC: string = 'assets/img/sushi.gif';
  constructor(private router: Router, private route: ActivatedRoute, private globalService: GlobalService) { }
  
  ngOnInit() {
  }

  access(formulario: NgForm) {
    this.acceso = Object.assign({},
      this.globalService.validarAcceso(formulario.controls.usuario.value,
        formulario.controls.contrasena.value));
    console.log(this.acceso);
    if(this.globalService.getStatusLog()){
      this.router.navigate(['/contacto'],{relativeTo: this.route});
    }
    formulario.reset();
  }
}
