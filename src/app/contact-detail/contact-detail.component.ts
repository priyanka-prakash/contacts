import { Component, OnInit } from '@angular/core';
import { contactService } from '../services/contacts.service';
import { ActivatedRoute } from "@angular/router";
import { Contacts} from  '../contacts';


@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  contactDetail:Icontacts;

  id: number;
  constructor(private contactService:contactService, private activatedRoute:ActivatedRoute) { 
    
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => (this.id = parseInt(params['id'], 10))
    );
    this.getContactDetail(this.id);
  }

  getContactDetail(id){
      this.contactService.getContactDetail(id).subscribe((contactdetailData: any)=>{
        console.log("detail : ",contactdetailData.data);
        this.contactDetail= contactdetailData.data;
    })  
  }

}


export interface Icontacts{
  id: number;
  first_name:string;
  last_name: string;
  email: string;
  avatar: string;
}