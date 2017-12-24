import { Component } from '@angular/core';

/**
 * Generated class for the LoadingModalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'loading-modal',
  templateUrl: 'loading-modal.html'
})
//THIS COMPONENT IS NOT YET FUNCTIONAL
export class LoadingModal {

  text: string;
  isBusy: boolean;
  constructor() {
    console.log('Hello LoadingModalComponent Component');
    this.text = 'Loading';
    this.isBusy = false;
  }
 
  show(){
    this.isBusy = true;
  }
 
  hide(){
    this.isBusy = false;
  }

}
