import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  
  registerationForm = new FormGroup({
    userName : new FormControl('Kumar'),
    password : new FormControl(''),
    confirmPassword : new FormControl(''),
    address : new FormGroup({
      city : new FormControl(''),
      state : new FormControl(''),
      postalCode : new FormControl('')
    })
  });
  
  loadAPIData(){
    console.log("MA here");
    this.registerationForm.setValue({
    userName : 'Moniaka',
    password : "test",
    confirmPassword : "test",
    address : {
      city:  "Bangalore" , 
      state:"KRNTKA",
      postalCode:"560032"
    }
    });
  }
  
  loadAPIPatchData(){
    this.registerationForm.patchValue({
    userName : 'Moniaka',
    password : "test",
    confirmPassword : "test"
    });
  }
  public newRegisterationForm;
  constructor(private fb:FormBuilder) { 
  //new way of creating formgroup
  this.newRegisterationForm = this.fb.group({
    userName : ['Kumar'],
    password : [''],
    confirmPassword : [''],
    address : this.fb.group({
    city:  [''] , 
      state:[''],
      postalCode:['']
    })
  });
  }

  ngOnInit() {
  }

}
