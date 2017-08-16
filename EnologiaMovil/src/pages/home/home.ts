import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  //private internetStatus: boolean = false;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              //private platform: Platform,
              menuCtrl: MenuController) {
  }


    ionViewDidLoad() {
      console.log('ionViewDidLoad HomePage');
    }
}
