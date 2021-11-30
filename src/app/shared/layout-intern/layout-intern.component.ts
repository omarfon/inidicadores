import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-layout-intern',
  templateUrl: './layout-intern.component.html',
  styleUrls: ['./layout-intern.component.scss']
})
export class LayoutInternComponent implements OnInit {

  constructor(public router: Router,
              public location: Location) { }

  ngOnInit(): void {
  }

  goToBack(){
    this.location.back();
  }

}
