import { Menu } from './../model/menu';
import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data: any;

  constructor(public loginsvc: DataService) {
    /*    this.loginsvc.loginApi().subscribe(res => {
          this.data = res.json();
          console.table(this.data);
        })*/

    this.loginsvc.getTodo().subscribe(res => {
      this.data = res.json();
      console.table(this.data);
    })



    let _Post = { uid: 'admin', pwd: '1234' };

    this.loginsvc.postServices(_Post).subscribe(res => {
      this.data = res;
      console.table(this.data);
    })
  }

  ngOnInit() {

  }

  addtodo() {


  }
}
