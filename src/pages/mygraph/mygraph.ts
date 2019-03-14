import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController,NavParams} from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Chart } from 'chart.js';

/**
 * Generated class for the MygraphPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mygraph',
  templateUrl: 'mygraph.html',
})
export class MygraphPage {
  @ViewChild('lineCanvas') lineCanvas;
  posts:any;
  lineChart: any;
  constructor(public navCtrl: NavController,private http:Http,public navParams: NavParams) {
// setInterval(()=>{
//   this.ionViewDidLoad();
// },1000);
  // this.graphs();
  // this.sales();
  }
 ionViewDidLoad(){

    this.http.get('http://127.0.0.1:8002/wapp/rest/view_data').map(res => res.json()).subscribe(data => {

  this.posts=data;
  // console.log(this.posts);
    });
var person = [ {"sno": 1 , "val" : 2},{"sno": 2 , "val" : 4},{"sno": 3 , "val" : 6}] ;
var myperson = JSON.stringify(person);
// console.log(myperson);   
console.log(JSON.parse(myperson));
  
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {

      type: 'line',
      data: {
          labels:[1,2,3],
          datasets: [{
              data:[1,2,3],
              borderColor: "#f53d3d",
              fill: true,
              backgroundColor:"#f53d3d40"
          }],
  
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          }
      }
  
  });
  
  }
  



}
