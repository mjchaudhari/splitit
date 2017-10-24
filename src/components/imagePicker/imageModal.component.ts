import { Component, ViewChild } from '@angular/core';
import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';

@Component({
    templateUrl:"imageModal.component.html",
    selector: "image-modal"
})
export class ImageModal{
    image:string;
    private originalImage: string;
    private defaultImage: string;
    constructor( public params: NavParams, public viewCtrl: ViewController){

        this.originalImage = this.params.get('image');
        if(this.image == null || this.image == ''){
            this.image = this.defaultImage;
        }
    }
    imageSelected(evt){
        console.log(evt.target.files);
        let file = evt.dataTransfer ? evt.dataTransfer.files[0] : evt.target.files[0];
        let reader = new FileReader();
        reader.onload = this.readFile.bind(this);
        reader.readAsDataURL(file);
    }
    reset(){
        this.image = this.originalImage;
    }
    readFile(e){
        this.image = e.target.result;
    }
    dismiss(){
        if(this.image){
            this.viewCtrl.dismiss(this.image);
        }
    }
    cancel(){
        this.image = null;
        this.viewCtrl.dismiss();
    }
    
}
