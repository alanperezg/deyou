import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-usuario',
  templateUrl: './main-usuario.component.html',
  styleUrls: ['./main-usuario.component.css']
})
export class MainUsuarioComponent implements OnInit {
  id: number;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params)=>{
      this.id = params.id;
    });
    console.log(this.id);
  }

}
