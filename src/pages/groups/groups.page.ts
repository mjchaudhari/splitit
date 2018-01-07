import { Component } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';
import {LoadingModal} from "../../components/components"
import _ from "lodash";
import { Api } from "../../shared/api";
import { GroupPage} from "../pages";


@Component({
  selector: 'groups_page',
  templateUrl: 'groups.page.html'
})
export class GroupsPage {
  groups = [];
  constructor(public navCtrl: NavController, private api: Api, private actions: ActionSheetController, private loader : LoadingModal) {
    
  }
  ionViewWillEnter() {
    this.getGroups();
  }
  getGroups (){
    this.loader.show();
    this.api.getGroups()
    .subscribe((g)=>{
      this.groups = g;
      this.loader.hide();
    });
  }

  newGroup(){
    console.log("create group");
    this.navCtrl.push(GroupPage, {g: {}});
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
          // this.api.getGroup(group._id)
          // .subscribe((data)=>{
          //   this.navCtrl.push(GroupPage, {g: group});  
          // });
          this.navCtrl.push(GroupPage, {g: group});  
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
