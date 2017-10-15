import { Component, ViewChild } from '@angular/core';

@Component({
    templateUrl: 'imagePicker.component.html',
    selector: 'image-picker'
})
export class imagePicker{
    image:string;
    private originalImage: string;
    
    constructor(){
        this.originalImage = this.image;
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
}