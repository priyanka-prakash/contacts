import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cust-generator',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() customerGenerated = new EventEmitter<any>();
  customer:string;
  OnClick(event){
    const id = Math.random().toString(36).slice(2,11).toUpperCase();
    // this.customerGenerated.emit('Done!');
    this.customerGenerated.emit({id:id,name:this.customer});

  }
}
