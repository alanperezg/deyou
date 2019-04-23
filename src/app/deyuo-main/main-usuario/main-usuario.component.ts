import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-main-usuario',
  templateUrl: './main-usuario.component.html',
  styleUrls: ['./main-usuario.component.css']
})
export class MainUsuarioComponent implements OnInit {
  id: number;
  MiPedidoImg: string = 'assets/img/boxIconBlue.png';
  CrearPedidoImg: string = 'assets/img/surveyIcon.png';
  GuiaPedidoImg: string = 'assets/img/locationIcon.png';
  MiCarritoImg: string = 'assets/img/shopIcon.png';
  SlideImg1: string ='https://lorempixel.com/900/500?r=4';
  SlideImg2: string ='https://lorempixel.com/900/500?r=5';
  SlideImg3: string ='https://lorempixel.com/900/500?r=6';

  constructor(private router: Router, private route: ActivatedRoute, configCarousel: NgbCarouselConfig) {
    configCarousel.interval = 3000;
    configCarousel.keyboard = true;
    configCarousel.showNavigationIndicators = false;
   }

  ngOnInit() {
    this.route.params.subscribe((params)=>{
      this.id = params.id;
    });
    console.log(this.id);
  }

}
