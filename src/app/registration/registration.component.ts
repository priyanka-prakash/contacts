import { Component, OnInit } from '@angular/core';
import {  FormArray,Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { contactService} from '../services/contacts.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  data:any;
  constructor(private contactService:contactService,private formbuilder: FormBuilder) { 
  }


  profileForm = this.formbuilder.group({
    first_name: ['', Validators.required],
    last_name: [''],
    email:['', Validators.required],
    phone:['', Validators.minLength(4)], 
    skillsArray: this.formbuilder.array([ ])

    
    
  });

  arrayItems: {
    id: number;
    title: string;
  }[];


  ngOnInit(): void {
    this.arrayItems = [];
  }

  onSubmit() {
    console.log(this.profileForm.value);
    this.data = this.profileForm.value; 
  }


  get skillsArray() {
    return this.profileForm.get('skillsArray') as FormArray;
  }

  addItem(item) {
      this.arrayItems.push(item);
      this.skillsArray.push(this.formbuilder.control(''));
  }

  removeItem() {
      this.arrayItems.pop();
      this.skillsArray.removeAt(this.skillsArray.length - 1);
  }


}

