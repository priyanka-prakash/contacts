import { Component, OnInit } from '@angular/core';
import { contactService } from '../services/contacts.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
  providers:[contactService]
})
export class ContactListComponent implements OnInit {
  contactLists :any = [] ;
  slno = 0;
  constructor(private contactService:contactService) { 
    this.showData();
  }

  showData(){
    this.contactService.getContactListData().subscribe( contactlistData => {
      console.log(contactlistData);
      this.contactLists = contactlistData.data;
    });
  }

  getContact(id){
    console.log("id: ",id);
  }
  
  ngOnInit(): void {
  }

}
