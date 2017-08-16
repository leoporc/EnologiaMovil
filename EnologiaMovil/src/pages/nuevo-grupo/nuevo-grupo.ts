import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ToastController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
//import { GrupoBarricasProvider } from '../../providers/grupo-barricas/grupo-barricas';

@IonicPage()
@Component({
  selector: 'page-nuevo-grupo',
  templateUrl: 'nuevo-grupo.html',
})
export class NuevoGrupoPage {

  barricas: string[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private barcodeScanner: BarcodeScanner,
              private toastCtrl: ToastController,
              private platform: Platform,
              //private _grupoBarricasProvider:GrupoBarricasProvider
            ) {
    this.initializeBarricas();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NuevoGrupoPage');
  }

  initializeBarricas() {

    this.barricas = [
      'LL391411235',
      'LL391411236',
      'LL391411232',
      'LL391411240'
    ];
  }

  scan(){

    console.log("Realizando scan");

    if(!this.platform.is('cordova')){
      setTimeout(()=>{
        this.barricas.push('LL391411239');

      }, 1500)

      return;
    }
    this.barcodeScanner.scan().then((barcodeData) => {
     // Success! Barcode data is here
     console.log("result:", barcodeData.text);
     console.log("format:", barcodeData.format);
     console.log("cancelled:", barcodeData.cancelled);

    }, (err) => {
        // An error occurred
        console.error("Error: ", err );
        this.mostrarError("Error: " + err);
    });
  }

  mostrarError( mensaje:string ){
    let toast = this.toastCtrl.create({
      message: mensaje,
      duration: 2500
    });
    toast.present();

  }

}
