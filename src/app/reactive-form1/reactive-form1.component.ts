import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form1',
  templateUrl: './reactive-form1.component.html',
  styleUrls: ['./reactive-form1.component.css']
})
export class ReactiveForm1Component implements OnInit {
  public userForm;
  
  
  constructor(private fb:FormBuilder) { 
  
  this.userForm = this.fb.group({
    userName : ['', Validators.required],
    emailId : ['', [Validators.required, Validators.email]],
    password : ['', this.alphaNumericPattern],
    confirmPassword : ['', this.alphaNumericPattern],
    address : this.fb.group({
    city:  ['', Validators.required] , 
      state:['', Validators.required],
      postalCode:['', Validators.compose([
      Validators.required,
      Validators.pattern("^[0-9]*$")
    ])]
    })
  });
  }

  ngOnInit() {
  }

  get f(){
    return this.userForm.controls;  
  }
  
 get addr(){
   return this.userForm.controls.address.controls; 
 }
  
  isEmpty(obj) {
    if(obj== null) {
      return true;
    }
    return (obj && (Object.keys(obj).length === 0));
  }
   alphaNumericPattern= Validators.compose([
      Validators.required,
      Validators.pattern("^[a-zA-Z0-9_]*$"),
      Validators.minLength(6),
      Validators.maxLength(10)
    ]);
  
  
  
}
