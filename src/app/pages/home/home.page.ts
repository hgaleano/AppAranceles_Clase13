import { Component,ViewChild  } from '@angular/core';
import { ArancelesService } from '../../services/aranceles.service';
import { AlertController,LoadingController  } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';
import { IonInfiniteScroll } from '@ionic/angular';
import { BuscadorV2Response } from '../../interfaces/BuscadorV2Response';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
username:string;
texto_busqueda:string;
inicial;
final;
resultado:BuscadorV2Response[]=[];
mostrar_boton:boolean=false;
  constructor(
    private serviceArancel:ArancelesService,
    public loadingController: LoadingController,
    private router: Router
    ) {

      this.inicial=1;
      this.final=10;
    this.username=localStorage.getItem('username');
    this.getUsuarios()

  }

  getUsuarios(){
      this.serviceArancel.getUsuarios().subscribe(
        data=>{
              console.log(data);
              
        });
  }
  Buscar(){
    console.log(this.texto_busqueda);

    this.loadingController.create({
      message: 'Aguarde por favor...',
    }).then((res)=>{
      res.present();
    this.serviceArancel.Buscador(this.texto_busqueda).subscribe(
      data=>{
            console.log(data);
            
            res.dismiss();

            let navigationExtras: NavigationExtras = {
              state: {
                resultado: data,
              }
            };
            this.router.navigate(['/resultado-busqueda'], navigationExtras);
       
      },  
      error=>{
        res.dismiss();
        console.log(error.error.message);

        
      }
      )
    });
  }

  BuscarV2(primeraCarga:boolean){
    console.log(this.texto_busqueda);
    if(primeraCarga==true)
    {
      this.mostrar_boton=true;
      this.resultado=[];
      this.infiniteScroll.disabled=false;
      this.inicial=1;
    }
   
    this.serviceArancel.BuscadorV2(this.texto_busqueda,this.inicial, this.final).subscribe(
      data=>{
            console.log(data);
            this.resultado.push(...data);
            this.infiniteScroll.complete();
            if(this.resultado.length >= parseInt(this.resultado[0].Cantidad))
            {
              this.infiniteScroll.disabled=true;
              this.mostrar_boton=false;
            }

            this.inicial+=10;
      },  
      error=>{
        console.log(error.error.message);
      }
      )
   
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
