import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { StartupPage } from "../pages"
import { Api } from "../../shared/api";

@Component({
  selector: 'settings_page',
  templateUrl: 'settings.page.html',
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private api : Api) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }
  logOff(){
    this.api.signoff();
    this.navCtrl.setRoot(StartupPage);
  }
}
