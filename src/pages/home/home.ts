import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BocinaPage } from '../bocina/bocina';
import { TvPage } from '../tv/tv';
import { LamparaPage } from '../lampara/lampara';
import { SmartphonePage } from '../smartphone/smartphone';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  bocina=BocinaPage;
  tv=TvPage;
  lampara=LamparaPage;
  phone=SmartphonePage;
  constructor(public navCtrl: NavController) {

  }
  changePage(value: number){
    switch (value){
      case 1:
        this.navCtrl.push(this.bocina);
      break;
      case 2:
        this.navCtrl.push(this.tv);
      break;
      case 3:
        this.navCtrl.push(this.lampara);
      break;  
      case 4:
        this.navCtrl.push(this.phone);
      break;
    }
  }

}
