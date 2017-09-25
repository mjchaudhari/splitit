import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { GroupsPage, FriendsPage, SettingsPage, HomePage } from "../pages" 
//@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.page.html',
})
export class TabsPage {
  //@ViewChild(Nav) nav : Nav;
  //rootPage = GroupsPage
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
