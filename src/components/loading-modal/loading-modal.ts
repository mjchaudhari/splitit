import { Component, Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';

/**
 * Generated class for the LoadingModalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'loading-modal',
  template: ''
})
//THIS COMPONENT IS NOT YET FUNCTIONAL
@Injectable()
export class LoadingModal {

  text: string;
  loader: any;
  constructor( private loading: LoadingController) {
    this.text = '';
    this.create();
  }
    
  create(){
    this.loader = this.loading.create({
      spinner: 'hide',
      enableBackdropDismiss: true,
      content: `
      <img class="cp-logo-small rotating" src="./assets/img/cp.png" alt="">
      `
    });
  }

  show(text?:string){
    if(text == null){
      text = "loading...";
    }
    this.loader.present();
    this.text = text;
  }
 
  hide(){
    this.loader.dismiss();
  }

}
