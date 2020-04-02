import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../services/interaction.service';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private InteractionService:InteractionService) { }

  ngOnInit(): void {
    this.InteractionService.teacherMessage$
      .subscribe(
        message => {

          if(message == "Good Morning!"){ alert("Good Morning Teacher");}
          else if(message == "Well Done!"){
            alert("Thank You Teacher!");
          }
        }
      );
  }



}
