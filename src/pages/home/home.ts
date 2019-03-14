import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  posts:any;
  constructor(public navCtrl: NavController,private http:Http) {
// setInterval(()=>{
//   this.sales();
// },1000);
  
this.sales();
  }
 
  sales(){
    this.http.get('http://127.0.0.1:8001/wapp/rest/view_last_data').map(res => res.json()).subscribe(data => {

  this.posts=data;

    });
    
  }
  }