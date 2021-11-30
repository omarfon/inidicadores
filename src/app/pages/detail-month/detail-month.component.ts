import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './../../services/api.service';


@Component({
  selector: 'app-detail-month',
  templateUrl: './detail-month.component.html',
  styleUrls: ['./detail-month.component.scss']
})
export class DetailMonthComponent implements OnInit {
  public dataMonth;
  p: number = 1;
  constructor(public apiSrv: ApiService, public router: Router) { }

  ngOnInit(): void {
    if(this.apiSrv.dataMonth){
      this.dataMonth = this.apiSrv.dataMonth;
      console.log(this.dataMonth);
    }else{
      this.router.navigate(['home']);
    }
  }


}
