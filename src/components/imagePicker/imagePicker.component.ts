import { Component, Input } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { ImageModal} from './imageModal.component'
@Component({
    templateUrl: 'imagePicker.component.html',
    selector: 'image-picker'
})
export class ImagePicker {
    @Input() image:string;
    private originalImage: string;
    private defaultImage: string;
    constructor(public modalCtrl: ModalController){
        this.originalImage = this.image;
        if(this.image == null || this.image == '') {
            this.image = this.defaultImage;
        }
    }

    openModal(img) {   
        let modal = this.modalCtrl.create(ImageModal, {image: this.image});
        modal.present();
        modal.onDidDismiss(image => {
            if(image){
                this.image = image;
            }
        })
    }
}