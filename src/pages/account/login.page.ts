import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from "../pages"
@Component({
  selector: 'login_page',
  templateUrl: 'login.page.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {
    
  }
  doLogin (){
    this.navCtrl.setRoot(HomePage);
  }
}
