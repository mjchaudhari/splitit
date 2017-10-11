import { Component } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';
import _ from "lodash";
import { Api } from "../../shared/api";
import { GroupPage, AssetsPage} from "../pages";

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
  newGroup(){
    console.log("create group");
    this.navCtrl.push(GroupPage);
  }
  groupActions (groupId){
    var group = _.find(this.groups, function (g:any) {
      return g._id == groupId;      
    });
    let actionSheet = this.actions.create({
      title: group.name,
      buttons: [{
        text: "Edit",
        handler: ()=>{
          console.log("edit group ", group.name);
          this.navCtrl.push(GroupPage, {groupId: group._id});
        }
      },{
        text: "Quit"
      }]
    });
    actionSheet.present();
  }

  goToAssets (groupId){
    console.log("go to assets ", groupId);
    //this.navCtrl.push(AssetsPage, {groupId: groupId});
  }
}
