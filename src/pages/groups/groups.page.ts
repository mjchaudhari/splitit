import { Component } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';
import {LoadingModal} from "../../components/components"
import _ from "lodash";
import { Api } from "../../shared/api";
import { GroupPage, AssetsPage} from "../pages";
import { importExpr } from '@angular/compiler/src/output/output_ast';


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
    // var loader = this.loader.create({
    //   spinner: 'hide',
    //   content: `
    //   <img class="cp-logo-small rotating" src="./assets/img/cp.png" alt="">
    //   `
    // });
    //this.loader.show();
    this.api.getGroups()
    .subscribe((g)=>{
      this.groups = g;
      //this.loader.hide();
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
