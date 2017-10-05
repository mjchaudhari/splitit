import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Response } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { App } from './app.component';
import { StartupPage, LoginPage, TabsPage, HomePage, GroupsPage, FriendsPage, SettingsPage, SignupPage} from '../pages/pages';
import { Api } from "../shared/api";

@NgModule({
  declarations: [
    App,
    StartupPage,
    LoginPage,
    TabsPage,
    HomePage,
    GroupsPage,
    FriendsPage, SettingsPage, SignupPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(App),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    App,
    StartupPage,
    LoginPage,
    TabsPage,
    HomePage,
    GroupsPage,FriendsPage, SettingsPage, SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    , Api
  ]
})
export class AppModule {}
