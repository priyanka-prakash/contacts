import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { contactService} from '../services/contacts.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  data:any;
  constructor(private contactService:contactService) { 
  }

  ngOnInit(): void {
   
  }

  profileForm = new FormGroup({
    // firstName: new FormControl(''),
    // lastName: new FormControl(''),
    name : new FormControl(''),
    year : new FormControl(''),
    color:new FormControl(''),
    pantone_value:new FormControl('')

  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
    this.data = this.profileForm.value; 
    this.contactService.register(this.data).subscribe((res:any)=>{
      console.log("res",res);
    })
  }


}
