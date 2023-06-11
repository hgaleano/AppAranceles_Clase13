import { Component, OnInit } from '@angular/core';
import { ArancelesService } from '../../services/aranceles.service';
import { LoginResponse } from '../../interfaces/LoginResponse';
import { Route, Router } from '@angular/router';
import { AlertController,LoadingController  } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
user={email:'admin@gmail.com',password:'uaa-123'}; 
datos_usuario:LoginResponse;
  constructor(
    private serviceArancel:ArancelesService,
    private router:Router,
    public alertController: AlertController,
    public loadingController: LoadingController
    ) { }

  ngOnInit() {
  }

  
  async Alerta(msg:string) {
    const alert = await this.alertController.create({
      header: 'Atención',
      message: msg,
      buttons: ['Aceptar']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }

  validar(){ 
     this.loadingController.create({
      message: 'Aguarde por favor...',
    }).then((res)=>{
      res.present();
    this.serviceArancel.login(this.user.email,this.user.password).subscribe(
      data=>{
            //console.log(data);
            res.dismiss();
          this.datos_usuario=data;
          console.log(this.datos_usuario.data.nombre);

          localStorage.setItem("username",this.datos_usuario.data.nombre);
          localStorage.setItem("token",this.datos_usuario.data.token);

          this.router.navigateByUrl('/home');
          
      },  
      error=>{
        res.dismiss();
        console.log(error.error.message);
         this.Alerta(error.error.message);
        
      }
      )
    });
  }


  
}
