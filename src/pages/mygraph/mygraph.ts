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
  arrayList:any;
  constructor(public navCtrl: NavController,private http:Http,public navParams: NavParams) {
setInterval(()=>{
//   this.sales();
this.ionViewDidLoad();
},1000);
  // this.graphs();
  // this.sales();

  }

 ionViewDidLoad(){

    this.http.get('http://127.0.0.1:8001/wapp/rest/view_last_5_data').map(res => res.json()).subscribe(data => {

  this.posts=data;
//   console.log(this.posts[0].sno);
  let sno =this.posts.map(person => person.sno); 
  let val =this.posts.map(person => person.val); 
//   console.log(sno); 


    // });


    this.lineChart = new Chart(this.lineCanvas.nativeElement, {

      type: 'line',
      data: {
          labels:sno,
          datasets: [{
              data:val,
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
  
  
});


}


}
