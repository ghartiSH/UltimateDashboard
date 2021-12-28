import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var analChart = new Chart("analChart", {
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
        
          },
          {
            label: 'Site C',
            data: [8, 7, 4, 7, 14, 8,2,9,1,5,7,3],
            backgroundColor:'yellow',
            borderColor: 'yellow',
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
  var chart1 = new Chart("chart1", {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
            label: 'Site A',
            data: [12, 19, 3, 5, 2,],
            backgroundColor: "red",
            borderColor:'red',
            borderWidth: 1
        },
        {
          label: 'Site B',
          data: [8, 7, 4, 7, 14, ],
          backgroundColor:'blue',
          borderColor: 'blue',
          borderWidth: 1
      
        },
        {
          label: 'Site C',
          data: [8, 7, 4, 7, 14,],
          backgroundColor:'yellow',
          borderColor: 'yellow',
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

var chart2 = new Chart("chart2", {
  type: 'horizontalBar',
  data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      datasets: [{
          label: 'Site A',
          data: [12, 19, 3, 5, 18,],
          backgroundColor: ['red', 'yellow','blue','green','pink'],
            
          borderColor:['red', 'yellow','blue','green','pink'],
          borderWidth: 1
      }, 
    ]
  },
 options:{
   legend:{
     display:false
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
       display:false,
     }]
   }
 }
});

var bigLine = new Chart("bigLine", {
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
  }

}
