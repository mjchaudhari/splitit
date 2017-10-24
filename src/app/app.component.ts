import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StartupPage, LoginPage, TabsPage, HomePage, GroupsPage, FriendsPage, GroupPage } from '../pages/pages';

@Component({
  templateUrl: 'app.html',
  
})
export class App {
  //rootPage = StartupPage;
  rootPage = GroupPage;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

