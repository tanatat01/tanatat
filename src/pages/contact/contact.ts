import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  //items = ["Tanatat","Theiy","Sumare","Tanawid","Tanapong"];

 items = [
    {"name": "Tanatat","tel" : "0810060000","avatar" :"aaa.png" },
    {"name": "Theiy","tel" : "0820000006","avatar" :"aaa.png" },
    {"name": "Sumare","tel" : "0838020000","avatar" :"aaa.png" },
    {"name": "Tanawid","tel" : "0840060000","avatar" :"aaa.png" },
    {"name": "Tanapong","tel" : "0850240000","avatar" :"aaa.png" },
 ];
  itemSelected(item : string){
    console.log("itemSelected Item : ",item);
  }
  constructor(public navCtrl: NavController) {

  }

}
