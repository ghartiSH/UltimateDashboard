import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-employeegrid',
  templateUrl: './employeegrid.component.html',
  styleUrls: ['./employeegrid.component.scss']
})
export class EmployeegridComponent implements OnInit {


  cols: number = 3;
  width: any;

  constructor() { }
 @HostListener('window:resize', ['$event'])
  ngOnInit(): void {
    this.width= window.innerWidth;
    if(this.width<=990){
      this.cols=1;
    }
    else{
      this.cols=3;
    }
  }

}
