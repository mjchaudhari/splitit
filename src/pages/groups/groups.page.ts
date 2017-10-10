import { Component } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';
import _ from "lodash";
import { Api } from "../../shared/api";

@Component({
  selector: 'groups_page',
  templateUrl: 'groups.page.html'
})
export class GroupsPage {
  groups = [];
  constructor(public navCtrl: NavController, private api: Api, private actions: ActionSheetController) {
    this.getGroups();
  }
  getGroups (){
    this.api.getGroups()
    .subscribe((g)=>{
      this.groups = g;
    });
  }
  groupActions (groupId){
    var group = _.find(this.groups, function (g:any) {
      return g._id == groupId;      
    })
    let actionSheet = this.actions.create({
      title: group.name,
      buttons: [{
        text: "Edit",
        handler: ()=>{

        }
      },{
        text: "Quit"
      }]
    });
    actionSheet.present();
  }
}
