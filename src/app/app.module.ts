import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Response } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { App } from './app.component';
import { StartupPage, LoginPage, TabsPage, HomePage, GroupsPage, FriendsPage, SettingsPage, SignupPage, GroupPage, AssetsPage} from '../pages/pages';
import { Api } from "../shared/api";
import { ImagePicker, ImageModal } from "../components/components";
import { Pro } from '@ionic/pro';
@NgModule({
  declarations: [
    App
    , StartupPage
    , LoginPage
    , SignupPage
    , TabsPage
    , HomePage
    , GroupsPage, GroupPage
    , FriendsPage, SettingsPage
    , AssetsPage

    //Components
     , ImagePicker
    , ImageModal
    
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
    SignupPage,
    TabsPage,
    HomePage,
    GroupsPage, GroupPage,
    FriendsPage, SettingsPage,
    AssetsPage,
    ImageModal
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: MyErrorHandler},
    , Api
  ]
})
const IonicPro = Pro.init('APP_ID', {
  appVersion: "APP_VERSION"
});

export class MyErrorHandler implements ErrorHandler {
  handleError(err: any): void {
    IonicPro.monitoring.handleNewError(err);
  }
}
export class AppModule {}
