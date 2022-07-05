import { Component, OnInit } from '@angular/core';
import {  Router,ActivatedRoute,NavigationExtras } from "@angular/router";
import { ArancelesResponse } from '../../interfaces/arancelesResponse';
import { ArancelesService } from '../../services/aranceles.service';
import { BuscadorResponse } from '../../interfaces/buscadorResponse';
@Component({
  selector: 'app-aranceles',
  templateUrl: './aranceles.page.html',
  styleUrls: ['./aranceles.page.scss'],
})
export class ArancelesPage implements OnInit {
  articulo_seleccionado:BuscadorResponse;
  aranceles:ArancelesResponse[]=[];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private serviceArancel:ArancelesService,
  ) { 
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.articulo_seleccionado = this.router.getCurrentNavigation().extras.state.articulo_seleccionado;
        console.log(this.articulo_seleccionado);
        

        this.serviceArancel.getAranceles(this.articulo_seleccionado.id).subscribe(
          data=>{
                console.log(data);
                this.aranceles=data;
          },  
          error=>{
            console.log(error.error.message);
          
          }
          )
      }
    });

  }

  ngOnInit() {
  }

}
