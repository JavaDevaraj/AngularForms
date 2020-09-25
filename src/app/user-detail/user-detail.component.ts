import { DataStorage } from '../data-storage';
import { User } from '../user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor( private _data:DataStorage) { }
  public userData:User
  ngOnInit() {
    this.userData = this._data.data;
    console.log(this.userData);
  }

}
