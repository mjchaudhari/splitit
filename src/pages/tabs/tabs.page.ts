import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GroupsPage, FriendsPage, SettingsPage, HomePage } from "../pages" 
//@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.page.html',
})
export class TabsPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  tabHome = HomePage;
  tabGroups = GroupsPage;
  tabSettings = SettingsPage;
  tabFriends = FriendsPage;
  ionViewDidLoad() {
    console.log('ionViewDidLoad Tabs');
  }

}
