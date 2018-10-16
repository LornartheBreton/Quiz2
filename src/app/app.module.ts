import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LamparaPage } from '../pages/lampara/lampara';
import { SmartphonePage } from '../pages/smartphone/smartphone';
import { TvPage } from '../pages/tv/tv';
import { BocinaPage } from '../pages/bocina/bocina';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LamparaPage,
    SmartphonePage,
    TvPage,
    BocinaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LamparaPage,
    SmartphonePage,
    TvPage,
    BocinaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
