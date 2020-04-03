import { Component, OnInit } from '@angular/core';
import { contactService } from '../services/contacts.service';
import { elementAt } from 'rxjs/operators';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
  providers:[contactService,TestService]
})
export class ContactListComponent implements OnInit {
  contactLists:any;
  slno = 0;
  constructor(private contactService:contactService, private testService:TestService) { 
    this.contactList();
  }

  contactList(){
    this.contactService.getContactListData().subscribe((contactlistData: any)=>{
     
      contactlistData.data.forEach(element => {
        
        if(element.first_name == "George" || element.first_name == "Charles" ){
          element.gender = "male";
        }else{
          element.gender = "female";
        }
        
      });
      this.contactLists = contactlistData.data;
    })  
  }
  
  ngOnInit(): void {
  }


  /** Interceptor */

  fetch(){
    this.testService.fetch().
      subscribe(data => console.log(data));
  }

}

