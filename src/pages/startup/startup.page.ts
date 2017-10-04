import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage, TabsPage } from '../pages';
import { Api } from "../../shared/api";
@Component({
  selector: 'startup_page',
  templateUrl: 'startup.page.html'
})
export class StartupPage {

  constructor(public navCtrl: NavController, private api: Api) {

  }
  goToLogin() {
    this.api.isTokenValid()
      .subscribe((resp) => {
        console.log(resp);
        if (resp.isError) {
          this.navCtrl.setRoot(LoginPage);
        } else {
          this.navCtrl.setRoot(TabsPage);
        }
      }, () => {
        this.navCtrl.setRoot(LoginPage);
      });

    console.log("Login clicked");
  }
}
