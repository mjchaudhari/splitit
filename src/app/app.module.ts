import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Response } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { App } from './app.component';
import { StartupPage, LoginPage, TabsPage, HomePage, GroupsPage, FriendsPage, SettingsPage, SignupPage, GroupPage, AssetsPage} from '../pages/pages';
import { Api } from "../shared/api";
import { ComponentsModule} from "../components/components.module"
//import { ImagePicker, ImageModal, LoadingModal } from "../components/components";
import { Pro } from '@ionic/pro';
import { Component } from '@angular/core/src/metadata/directives';

const IonicPro = Pro.init('325f4712', {
  appVersion: "0.0"
});

@NgModule({
  declarations: [
    App
    //, ComponentsModule
    , StartupPage
    , LoginPage
    , SignupPage
    , TabsPage
    , HomePage
    , GroupsPage, GroupPage
    , FriendsPage, SettingsPage
    , AssetsPage

    //Components
    //  , ImagePicker
    // , ImageModal
    // ,LoadingModal
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(App),
    HttpModule,
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    App,
    //ComponentsModule,
    StartupPage,
    LoginPage,
    SignupPage,
    TabsPage,
    HomePage,
    GroupsPage, GroupPage,
    FriendsPage, SettingsPage,
    AssetsPage,
    //ImageModal,
    //LoadingModal
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    , Api
  ]
})



export class AppModule {}
