import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './../../services/api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public insides: any = [];
  public addKeys: any = [];
  public valueSearchForMonth;
  constructor(public apiSrv: ApiService, public router: Router) { }

  ngOnInit(): void {
    this.getAllInsides(); 
  }

  getAllInsides(){
    this.apiSrv.getAllInsides().subscribe(data => {
      for (let key of Object.keys(data)) {
        let item = data[key];
        this.addKeys.push(item);
      }
      this.insides = this.addKeys.filter(x =>x.nombre)
      console.log(this.insides);
    }, err => {
      console.log('error de indicadores:',err);
    })
  }

  getDataInsideOfMonth(inside){
    const id = inside.codigo 
    this.apiSrv.getAllInsideFordate(id).subscribe(data => {
      this.valueSearchForMonth = data;
      this.apiSrv.dataMonth = this.valueSearchForMonth;
      this.router.navigate(['detail-month']);
      console.log(data);

    })
  }

}
