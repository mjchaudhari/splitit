import {Component} from "@angular/core"
import { MenuController } from 'ionic-angular';

@Component({
    selector: 'home_page',
    templateUrl: 'home.page.html'
})

export class HomePage{
    
    constructor( public Menu : MenuController){
        Menu.enable(true);
    }

    
}