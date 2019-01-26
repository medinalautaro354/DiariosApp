import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DiariosService } from '../../services/diarios.service';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

/**
 * Generated class for the WebPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl();
  }
} 
@IonicPage()
@Component({
  selector: 'page-web',
  templateUrl: 'web.html',
})
export class WebPage {

  diario = {};
  id: null;
  url: null;
  constructor(public navCtrl: NavController, public navParams: NavParams, public diariosService : DiariosService) {
    this.id = navParams.get('id');
    this.diario = diariosService.getDiario(this.id);
    
   
  }
  
  public obtenerUrl(){
    return this.url;
  }
  ionViewDidLoad() {
   
  }

  

 
}
