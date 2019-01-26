import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WebPage } from './web';
import { DiariosService } from '../../services/diarios.service';



@NgModule({
  declarations: [
    WebPage,
    DiariosService,
  ],
  imports: [
    IonicPageModule.forChild(WebPage),
  ],
})
export class WebPageModule {}
