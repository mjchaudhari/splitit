import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { App } from './app.component';
import { StartupPage, LoginPage, TabsPage, HomePage, GroupsPage, FriendsPage, SettingsPage, } from '../pages/pages';


@NgModule({
  declarations: [
    App,
    StartupPage,
    LoginPage,
    TabsPage,
    HomePage,
    GroupsPage,
    FriendsPage, SettingsPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(App)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    App,
    StartupPage,
    LoginPage,
    TabsPage,
    HomePage,
    GroupsPage,FriendsPage, SettingsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
