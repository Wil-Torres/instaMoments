import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent implements OnInit {

  galerias: any[] = [
    {
      id: 1,
      title: 'BODAS',
      subtitle: 'Juntos para toda la vida',
      imgUrl: '../../../assets/images/portafolio/bodas/IMG_0113.jpg',
      gallery: []
    },
    {
      id: 2,
      title: 'LA FAMILIA',
      subtitle: 'Momentos inolvidables',
      imgUrl: '../../../assets/images/portafolio/familia/San Juan del Obispo (27).jpg',
      gallery: []
    }
    ,
    {
      id: 3,
      title: 'EMBARAZO',
      subtitle: 'Esperando su llegada',
      imgUrl: '../../../assets/images/portafolio/embarazo/IMG_20180810_132509.jpg',
      gallery: []
    },
    {
      id: 4,
      title: 'NIÑOS',
      subtitle: 'Verlos Jugar, Crecer',
      imgUrl: '../../../assets/images/portafolio/ninos/Sobris-08.jpg',
      gallery: []
    },
    {
      id: 5,
      title: 'QUINCE AÑOS',
      subtitle: 'Comienzo de una nueva etapa',
      imgUrl: '../../../assets/images/portafolio/quince/_MG_4402.JPG',
      gallery: []
    },
    {
      id: 6,
      title: 'RETRATOS',
      subtitle: 'Se quien tú eres',
      imgUrl: '../../../assets/images/portafolio/retratos/Retrato-6.jpg',
      gallery: []
    }
  ]

  constructor(private router: Router) { }

  ngOnInit() {
  }

  irPortafolio(id) {
    this.router.navigate(['/portafolios/',id]);

  }

}
