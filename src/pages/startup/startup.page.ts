import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../account/login.page';
@Component({
  selector: 'startup_page',
  templateUrl: 'startup.page.html'
})
export class StartupPage {

  constructor(public navCtrl: NavController) {
    
  }
  goToLogin() {
    this.navCtrl.setRoot(LoginPage);
    console.log("Login clicked");
  }
}
