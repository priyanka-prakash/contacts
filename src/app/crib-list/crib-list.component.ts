import { Component, OnInit } from '@angular/core';
import { contactService } from '../services/contacts.service';

@Component({
  selector: 'app-crib-list',
  templateUrl: './crib-list.component.html',
  styleUrls: ['./crib-list.component.css']
})
export class CribListComponent implements OnInit {
  contactLists : any;
  constructor(private contactService:contactService) { }

  ngOnInit(): void {
    this.contactList();
  }

  contactList(){
    this.contactService.getContactListData().subscribe((contactlistData: any)=>{
      
      this.contactLists = contactlistData.data;
    })  
  }

 

}
