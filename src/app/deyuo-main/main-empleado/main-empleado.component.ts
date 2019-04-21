import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-empleado',
  templateUrl: './main-empleado.component.html',
  styleUrls: ['./main-empleado.component.css']
})
export class MainEmpleadoComponent implements OnInit {
  id: number;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params)=>{
      this.id = params.id;
    });
    console.log(this.id);
  }

}
