import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocalStoragePage } from './local-storage';

@NgModule({
  declarations: [
    LocalStoragePage,
  ],
  imports: [
    IonicPageModule.forChild(LocalStoragePage),
  ],
  exports: [
    LocalStoragePage
  ]
})
export class LocalStoragePageModule {}
