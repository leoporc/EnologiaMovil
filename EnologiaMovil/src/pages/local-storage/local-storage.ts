import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LocalStoragePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-local-storage',
  templateUrl: 'local-storage.html',
})
export class LocalStoragePage {

valor:any=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocalStoragePage');
    for (let i = 0; i < localStorage.length; i++) {
       //console.log(localStorage.key(i));
       this.valor.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
       console.log(this.valor);
      //  this.idMovimiento = this.navParams.get("idMovimiento");
      //  this.idDetalle = this.navParams.get("idDetalle");
      //  this.codigoOrden = this.navParams.get("codigoOrden");


  }
}
  volver(){
        this.navCtrl.pop();
        console.log("Vuelta pagina");
  }

}
