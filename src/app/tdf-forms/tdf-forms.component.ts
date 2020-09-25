import { DataStorage } from '../data-storage';
import { EnrollementService } from '../enrollement.service';
import { User, Address } from '../user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'tdf-forms',
  templateUrl: './tdf-forms.component.html',
  styleUrls: ['./tdf-forms.component.css']
})
export class TdfFormsComponent implements OnInit {

  constructor(private enrollService : EnrollementService, private router:Router
  , private _data:DataStorage) { }

  ngOnInit() {
  }
  submitted= false;
  topics= ['Angular', 'React', 'Vue'];
  addressModel = new Address('Vinayaka', 'Bangalore', 'Karntaka', 560032);
  userModel = new User('Kumar', 'kumar@test.com', 1234567890, '', 'morning', true, this.addressModel);
  responseInfo = false;
  responseData:User;
  errorMsg
  onFormSubmit() {
    console.log("Entered");
    this.submitted = true;
    this.enrollService.enroll(this.userModel)
      .subscribe(
      data=> {console.log("Success !", data);
      this.responseInfo=true;
      this.responseData =data; 
      this._data.data= data; 
      this.router.navigate(['/userDetail']);  
      },
      error=>{
        console.log("Error !", error);
        this.errorMsg=error.statusText;
      }  
      );
    
  }
}
