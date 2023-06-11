import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { LoginResponse } from '../interfaces/LoginResponse';
import { BuscadorResponse } from '../interfaces/buscadorResponse';
import { ArancelesResponse } from '../interfaces/arancelesResponse';
import { BuscadorV2Response } from '../interfaces/BuscadorV2Response';

@Injectable({
  providedIn: 'root'
})
export class ArancelesService {

  constructor(private http:HttpClient) { }

  login(email:string,password:string){
      var formData= new FormData();
      formData.append('email',email);
      formData.append('password',password);
      var url='https://www.hostcatedral.com/api/appAranceles/public/login';

       return this.http.post<LoginResponse>(url,formData);
  }

  getUsuarios(){
    var url='https://www.hostcatedral.com/api/appAranceles/public/users';
    let options = {
      headers:{
        'Authorization':'Bearer ' + localStorage.getItem('token')
      }
    };

    return this.http.get(url,options);
  }

  Buscador(texto:string){
    var url='https://www.hostcatedral.com/api/appAranceles/public/buscar_arancel/' + texto;
    let options = {
      headers:{
        'Authorization':'Bearer ' + localStorage.getItem('token')
      }
    };

    return this.http.get<BuscadorResponse[]>(url,options);
  }

  BuscadorV2(texto:string, fila_inicial,cantidad_fila){
    var url='https://www.hostcatedral.com/api/appAranceles/public/buscar_arancel_v2/'+texto+'/'+fila_inicial+'/' + cantidad_fila;
    let options = {
      headers:{
        'Authorization':'Bearer ' + localStorage.getItem('token')
      }
    };

    return this.http.get<BuscadorV2Response[]>(url,options);
  }


  getAranceles(id:string){
    var url='https://www.hostcatedral.com/api/appAranceles/public/aranceles/' + id;
    let options = {
      headers:{
        'Authorization':'Bearer ' + localStorage.getItem('token')
      }
    };

    return this.http.get<ArancelesResponse[]>(url,options);
  }
}
