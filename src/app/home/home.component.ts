import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../services/interaction.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  

  ngOnInit(): void {
  }

  onCustomerGenerated(data:any){
    console.log(data);
  }

  /** Component Interaction  using service */

  constructor(private InteractionService:InteractionService ) { }
  greetStudent(){
    this.InteractionService.sendMessage("Good Morning!");
  }

  appreciateStudent(){
    this.InteractionService.sendMessage('Well Done!');
  }

}
