import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DiariosService } from '../../services/diarios.service';
import { WebPage } from '../web/web';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  diarios = {};
  constructor(public navCtrl: NavController, public diariosService : DiariosService) {
    this.diarios = diariosService.getDiarios();

  }

  public goToWeb(id){
    this.navCtrl.push(WebPage, {id:id});
  }
  
  
}
