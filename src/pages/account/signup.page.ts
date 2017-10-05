import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { LoginPage } from "../pages"
import { Api } from "../../shared/api";

@Component({
  selector: 'signup_page',
  templateUrl: 'signup.page.html'
})
export class SignupPage {

  model = {
    firstName : "",
    lastName : "",
    userName: ""
  }
  constructor(public navCtrl: NavController, private api: Api, public toast: ToastController) {
    
  }
  create (){
    this.api.createProfile(this.model)
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
        this.navCtrl.setRoot(LoginPage);
      }
    });
    
  }
}
