import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';
import {Menu} from '../model/menu';


@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})

export class AsideComponent implements OnInit {
  data: Menu;

  constructor(public datasvc: DataService) {
    this.datasvc.loadMenu().subscribe(res => {
      this.data = res.json();
      console.table(this.data);
    });
  }


  ngOnInit() {

  }

}
