import { Component, OnInit } from '@angular/core';
import {  FormArray, FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

 

  constructor(private fb:FormBuilder) { }

 
  ngOnInit(): void {}

  userprofileForm = this.fb.group({
    firstname : ['',Validators.required],
    lastname: [''],
    address: this.fb.group({
      address1:[''],
      address2:[''],
      state:[''],
      zip:['']
    }),
    mobiles:this.fb.array([
      this.fb.control('')
    ])
  });

 

  onSubmit(){
    console.warn(this.userprofileForm.value);
    var firstname = this.userprofileForm.controls['firstname'].value;
    var lastname = this.userprofileForm.get('lastname').value;
    var address1 = this.userprofileForm.get(['address','address1']).value;
    var address2 = this.userprofileForm.get('address').get('address2').value;

    console.log("add: "+address1+" " + address2);

    console.log("mob 1:",this.userprofileForm.get(['mobiles','0']).value);

  }

  get mobiles(){
    return this.userprofileForm.get('mobiles') as FormArray; 
  }

  addNewMobile(){
    this.mobiles.push(this.fb.control(''));
  }

  remove(i){
    console.log("i:  ",i);
    // this.mobiles.pop(this.fb.control(i));

    
  }

  }


