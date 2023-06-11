import { Component, OnInit } from '@angular/core';
import {  Router,ActivatedRoute,NavigationExtras } from "@angular/router";
import { BuscadorResponse } from '../../interfaces/buscadorResponse';
@Component({
  selector: 'app-resultado-busqueda',
  templateUrl: './resultado-busqueda.page.html',
  styleUrls: ['./resultado-busqueda.page.scss'],
})
export class ResultadoBusquedaPage implements OnInit {
  resultado:BuscadorResponse[]=[];
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {

    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.resultado = this.router.getCurrentNavigation().extras.state.resultado;
        console.log(this.resultado);
        
      }
    });
   }

  ngOnInit() {
  }
  mostrarDetalle(item){
    let navigationExtras: NavigationExtras = {
      state: {
        articulo_seleccionado: item,
      }
    };
    this.router.navigate(['/aranceles'], navigationExtras);

  }

}
