import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // showDetail(){
  //   this.contactService.getContactListData().subscribe( contactlistData => {
  //     console.log(contactlistData);
  //     this.contactLists = contactlistData.data;
  //   });
  // }

}
