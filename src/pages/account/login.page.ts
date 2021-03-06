import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { TabsPage, SignupPage } from "../pages"
import { Api } from "../../shared/api";

@Component({
  selector: 'login_page',
  templateUrl: 'login.page.html'
})
export class LoginPage {

  loginModel = {
    userName : "",
    secret : ""
  }
  constructor(public navCtrl: NavController, private api: Api, public toast: ToastController) {
    
  }
  doLogin (){
    this.api.authenticate(this.loginModel)
    .subscribe((res)=>{
      if(res.isError){
        //Show message
        let t = this.toast.create({
          "message": "Invalid credentials."
          , "duration": 3000
        });

        t.present();
      }
      else {
        //handle error
        this.navCtrl.setRoot(TabsPage);
      }
    });
    
  }

  signUp () {
    this.navCtrl.setRoot(SignupPage);
  }
}
