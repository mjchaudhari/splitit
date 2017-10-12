import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import _ from "lodash";
import { Api } from "../../shared/api";
import { AssetsPage} from "../pages";

/**
 * Generated class for the GroupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-group',
  templateUrl: 'group.page.html',
})
export class GroupPage {
  group = null;
  groupId = null;
  constructor(public navCtrl: NavController, public navParams: NavParams, private api: Api) {
    this.groupId = navParams.get("groupId");  
    if(this.groupId){
      this.getGroup(this.groupId);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroupPage');
  }
  getGroup (id: string){
    this.api.getGroup(id)
    .subscribe((data)=>{
      this.group = data[0];
    });
  }
}
