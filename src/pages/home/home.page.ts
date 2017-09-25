import {Component} from "@angular/core"
import { MenuController } from 'ionic-angular';

import { GroupsPage, FriendsPage, SettingsPage } from '../pages'


@Component({
    selector: 'home_page',
    templateUrl: 'home.page.html'
})

export class HomePage{
    
    constructor( private Menu : MenuController){
        Menu.enable(true);
    }

    
}