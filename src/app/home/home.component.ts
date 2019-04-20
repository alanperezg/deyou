import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Title: string = 'Bienvenido';
  SRC: string = 'assets/img/sushi2.gif';
  //SRC: string = 'assets/img/SUSHI on Vimeo.mp4';

  constructor() { }

  ngOnInit() {
  }

}
