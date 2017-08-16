import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-detalle-operacion',
  templateUrl: 'detalle-operacion.html',
})
export class DetalleOperacionPage {

  operacion:string = "trasiego";
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalleOperacionPage');
  }

}
