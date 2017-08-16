import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConexionPage } from './conexion';

@NgModule({
  declarations: [
    ConexionPage,
  ],
  imports: [
    IonicPageModule.forChild(ConexionPage),
  ],
  exports: [
    ConexionPage
  ]
})
export class ConexionPageModule {}
