import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ToastController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@IonicPage()
@Component({
  selector: 'page-barricas',
  templateUrl: 'barricas.html',
})
export class BarricasPage {

  muestra:boolean = false;
  escanear:boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private platform: Platform,
              private barcodeScanner: BarcodeScanner,
              private toastCtrl: ToastController ) {

    this.scan();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BarricasPage');
  }

  scan(){

    console.log("Realizando scan");

    if(!this.platform.is('cordova')){
      setTimeout(()=>{
        this.muestra = true;
        this.escanear = true;
      }, 2500)
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
      duration: 3000
    });
    toast.present();

  }

  sacar_barrica(){
    this.muestra = false;
  }

}
