import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MygraphPage } from './mygraph';

@NgModule({
  declarations: [
    MygraphPage,
  ],
  imports: [
    IonicPageModule.forChild(MygraphPage),
  ],
})
export class MygraphPageModule {}
