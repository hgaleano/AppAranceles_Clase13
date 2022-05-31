import { Component } from '@angular/core';
import { ArancelesService } from '../../services/aranceles.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
username:string;
texto_busqueda:string;
  constructor(private serviceArancel:ArancelesService) {
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
    
  }

}
