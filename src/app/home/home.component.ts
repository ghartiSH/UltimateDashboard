import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
    
    var myChart = new Chart("myChart", {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug','Sep','Oct','Nov','Dec'],
        datasets: [{
            label: 'Site A',
            data: [12, 19, 3, 5, 2, 3,8, 5, 6, 7 ,4, 3],
            backgroundColor: "red",
            borderColor:'red',
            borderWidth: 1
        },
        {
          label: 'Site B',
          data: [8, 7, 4, 7, 14, 8,2,9,1,5,7,3],
          backgroundColor:'blue',
          borderColor: 'blue',
          borderWidth: 1
      }]
    },
   options:{
     responsive:true,
     scales:{
       yAxes:[{
         ticks:{
           beginAtZero:true,
         },
       }]
     }
   }
});

var myDoughnut = new Chart("myDoughnut", {
  type: 'doughnut',
  data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      datasets: [{
          data: [12, 19, 3, 5, 2],
          backgroundColor:[
            'red', 'yellow', 'blue', 'green', 'pink'
          ],
          borderColor:[
            'red', 'yellow', 'blue', 'green', 'pink'
          ],
          borderWidth: 1
      },
    ]
  },
 options:{
   legend:{
    position:'bottom'
   },
   responsive:true,
   scales:{
     yAxes:[{
       display:false,
       ticks:{
         beginAtZero:true,
       },
     }],
     xAxes:[{
       display:false
     }]
   }
 }
});
var myLine = new Chart("myLine", {
  type: 'line',
  data: {
      labels: ['red','blue', 'yellow', 'green', 'pink'],
      datasets: [{
        label:'Red',
          data: [12, 19, 3, 5, 2],
          borderColor:'red',
          borderWidth: 1
      },
      {
        label:'blue',
          data: [4,8,1,3,7],
          borderColor:'blue',
          borderWidth: 1
      },
    ]
  },
  
 options:{
   responsive:true,
   scales:{
     yAxes:[{
       ticks:{
         beginAtZero:true,
       },
     }]
   }
 }
});

var smallBar = new Chart("smallBar", {
  type: 'bar',
  data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug','Sep','Oct','Nov','Dec' ,'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug','Sep','Oct','Nov','Dec'],
      datasets: [
      {
        label: 'Site B',
        data: [8, 7, 4, 7, 14, 8,2,9,1,5,7,3,8, 7, 4, 7, 14, 8,2,9,1,5,7,3],
        backgroundColor:'blue',
        borderColor: 'blue',
        borderWidth: 1
    }]
  },
 options:{
   responsive:true,
   scales:{
     yAxes:[{
       display:false,
       ticks:{
         beginAtZero:true,
       },
     }],
     xAxes:[{
       display:false
     }]
   }
 }
});

var bigGraph = new Chart("bigGraph", {
  type: 'line',
  data: {
      labels: ['red','blue', 'yellow', 'green', 'pink'],
      datasets: [{
        label:'Green',
          data: [12, 19, 3, 5, 2],
          borderColor:'green',
          backgroundColor:'green',
          borderWidth: 1
      },
      {
        label:'blue',
          data: [4,8,1,3,7],
          borderColor:'blue',
          backgroundColor:'blue',
          borderWidth: 1
      },
      {
        label:'red',
          data: [8,7,12,15,13],
          borderColor:'red',
          backgroundColor:'red',
          borderWidth: 1
      },
    ]
  },
  
 options:{
   responsive:true,
   scales:{
     yAxes:[{
       ticks:{
         beginAtZero:true,
       },
     }]
   }
 }
});
}
  }

