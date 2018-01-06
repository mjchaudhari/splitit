import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import _ from "lodash";
import { FormBuilder, FormControl, Validators, ValidationErrors } from "@angular/forms";

import { Api, Group, Profile, MembersModal } from "../../shared/resources";

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
  group : Group = new Group();
  form : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private api: Api,
    private formBuilder: FormBuilder, public modalCtrl: ModalController
  ) {
    if(navParams.get("g")){  
      this.group = navParams.get("g");  
    }

    this.form = formBuilder.group({
      name : [this.group.name, Validators.required],
      description: [this.group.description, Validators.required],
    })
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
  imageSelected (evt){
    console.log(evt.target.files);
    let file = evt.dataTransfer ? evt.dataTransfer.files[0] : evt.target.files[0];
    let reader = new FileReader();
    reader.onload = this.readFile.bind(this);
    reader.readAsDataURL(file);
  }
  readFile(e){
    this.group.thumbnail = e.target.result;
  }

  editMembers() {
    let modal = this.modalCtrl.create(MembersModal, {groupMembers: this.group.members});
    modal.present();
    modal.onDidDismiss(memberList => {
        if(memberList){
            //this.group.members = memberList;
            //add members
            var data = {
              groupId: this.group._id,
              members: _.map(memberList,'_id')
            };
            this.api.addGroupMembers(data)
            .subscribe(res => {
              console.log(res);
              if(res.isError){
                
              }
            })
              
        }
    });
  }
  save(){
    this.api.saveGroup(this.group)
    .subscribe((res)=>{
      //back
      this.navCtrl.pop();
    }, (err)=>{
      console.error(err);
    });
  }
}
