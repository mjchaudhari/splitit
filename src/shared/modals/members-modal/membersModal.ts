import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { Api, Profile} from "../../resources"
import _ from "lodash";

@Component({
    templateUrl:"membersModal.html",
    selector: "members-modal"
})

export class MembersModal{
    groupMembers: Array<Profile> = [];
    newMembers: Array<Profile> = [];
    members: Array<Profile> = [];
    searchTerm: string;

    constructor( public params: NavParams, public viewCtrl: ViewController, private api: Api){
        this.groupMembers = this.params.get('groupMembers');
        if(this.groupMembers == null) {
            this.groupMembers = [];
        }
    }
    onInput($event){
        console.log("search term");
        this.api.getUsers(this.searchTerm)
        .subscribe((data)=>{
            this.members = data;
            _.forEach(this.members, (m)=>{
                var exist = _.findIndex(this.groupMembers, {_id : m._id});
                if(exist >= 0){
                    m.status = "exist";
                };
                var added = _.findIndex(this.newMembers, {_id : m._id});
                if(added >= 0){
                    m.status = "added";
                }
            });
          });
    }
    add(newMember){
        //Add member in added list
        this.newMembers.push(newMember);

        var idx = _.findIndex(this.members, {_id : newMember._id});
        if(idx >= 0){
            this.members[idx].status = "added";
        }
    }
    remove(member){
        //Add member in added list
        var idx = _.findIndex(this.newMembers, {_id : member._id});
        this.newMembers.splice(idx,1);

        idx = _.findIndex(this.members, {_id : member._id});
        if(idx >= 0){
            this.members[idx].status = undefined;
        }
    }
    onCancel($event){
        
    }
    dismiss(){
        this.viewCtrl.dismiss(this.newMembers);
    }
    cancel(){
        this.viewCtrl.dismiss();
    }
    
}
