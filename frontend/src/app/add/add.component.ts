import { Component, OnInit } from '@angular/core';
import {Http,RequestOptions,Headers} from "@angular/Http";
import {Router} from "@angular/router";
import{NgForm}from"@angular/forms";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  constructor(private root:Router, private ht:Http) { }
  gambar:File;
  ngOnInit() {
  }
  fileChange($event){
  
    this.gambar=$event.target.files[0];
     console.log(this.gambar);
     
 
   }
  AddProduct(f:NgForm){

    let product = new FormData();
    let head = new RequestOptions({headers:new Headers({})})
    product.append("Nama",f.value.Nama)
    product.append("Harga",f.value.Harga)
    product.append("Kategori",f.value.Kategori)
    product.append("Gambar",this.gambar)
    this.ht.post("http://localhost:3000/product/add",product,head)
    .subscribe(
      result=>{
        console.log(result.json())
        this.root.navigate([""])
      },
      error=>{
        console.log(error)
      }
    )
  }
}