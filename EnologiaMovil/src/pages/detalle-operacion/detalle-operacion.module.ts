import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalleOperacionPage } from './detalle-operacion';

@NgModule({
  declarations: [
    DetalleOperacionPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalleOperacionPage),
  ],
  exports: [
    DetalleOperacionPage
  ]
})
export class DetalleOperacionPageModule {}
