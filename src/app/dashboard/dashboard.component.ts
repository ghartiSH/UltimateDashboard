import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})


export class DashboardComponent implements OnInit {

  constructor() { }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = (ELEMENT_DATA);

  ngOnInit(): void {
    var chart3 = new Chart("chart3", {
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

  var pieChart = new Chart("pieChart", {
    type: 'pie',
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
     
     responsive:true,
     scales:{
       yAxes:[{
         display:false,
         gridLines:{
          display:false
         },
         ticks:{
           beginAtZero:true,
         },
       }],
       xAxes:[{
         display:false,
         gridLines:{
          display:false
         }
       }]
     }
   }
  });

  var smallDonut = new Chart("smallDonut", {
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
      display:false
    },
     responsive:true,
     scales:{
       yAxes:[{
         display:false,
         gridLines:{
           display:false
         },
         ticks:{
           beginAtZero:true,
         },
       }],
       xAxes:[{
         display:false
       }

       ]

     }
   }
  });

  }

 

}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},

];
