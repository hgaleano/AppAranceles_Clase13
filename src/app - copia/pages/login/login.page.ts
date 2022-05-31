import { Component, OnInit } from '@angular/core';
import { ArancelesService } from '../../services/aranceles.service';
import { LoginResponse } from '../../interfaces/LoginResponse';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
user={email:null,password:null}; 
datos_usuario:LoginResponse;
  constructor(
    private serviceArancel:ArancelesService,
    private router:Router
    ) { }

  ngOnInit() {
  }

  validar(){    
    this.serviceArancel.login(this.user.email,this.user.password).subscribe(
      data=>{
            //console.log(data);
          this.datos_usuario=data;
          console.log(this.datos_usuario.data.nombre);

          localStorage.setItem("username",this.datos_usuario.data.nombre);
          localStorage.setItem("token",this.datos_usuario.data.token);

          this.router.navigateByUrl('/home');
          
      });
  }

}
