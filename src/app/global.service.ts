import { Injectable } from '@angular/core';
import { Acceso } from './models/acceso';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class GlobalService{
    constructor() { }
    private lastId = 1;
    cambioStatusLog = new Subject<boolean>();
    private statusLog: boolean = false;
    private usuarios: Acceso[] = [
        new Acceso(this.lastId++, 'admin', 'admin', 1),
        new Acceso(this.lastId++, 'guest', '123', 2)
    ];

    private notificarStatusLog(){
      this.cambioStatusLog.next(this.getStatusLog());
    }

    getStatusLog(): boolean{
      return this.statusLog;
    }

    getAccesos(): Acceso[]{
      return this.usuarios.slice();
    }
    validarAcceso(usuario: string, contrasenia: string): Acceso{
      let User : Acceso;
      const Index = this.usuarios.findIndex(user => user.usuario == usuario && user.contrasena == contrasenia);

      if(Index >= 0){
        User = Object.assign({}, this.usuarios[Index]);
        this.statusLog = true;
        this.notificarStatusLog();
        return User;
      }
      this.statusLog = false;
      this.notificarStatusLog();
      return User;
    }
}
