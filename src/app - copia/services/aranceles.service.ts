import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { LoginResponse } from '../interfaces/LoginResponse';

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
}
