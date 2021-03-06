import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from"@angular/router";
import {Http,RequestOptions,Headers} from "@angular/Http";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  params
  units 
  constructor(private roo:Router, private ht:Http, private aktiv:ActivatedRoute) { }

  ngOnInit() {
    this.aktiv.params
    .subscribe(
      result=>{
        this.params = result["id"]
      }
    )
    this.ht.get("http://localhost:3000/product/list/idget"+this.params)
    .subscribe(
      result=>{
        this.units=result.json()
      },
      error=>{
        console.log(error)
      }
    )
  }

}
