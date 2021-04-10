import { Component, OnInit } from '@angular/core';
import { CrudService } from './../../service/crud.service'; 

@Component({
  selector: 'app-ads-list',
  templateUrl: './list-ads.component.html',
  styleUrls: ['./list-ads.component.css']
})

export class ListAdsComponent implements OnInit {
  
  Ads:any = [];


  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.crudService.Getads().subscribe(res => {
      console.log(res)
      this.Ads =res;
    });  
   
  }

  delete(id:any, i:any) {
    console.log(id);
    if(window.confirm('Do you want to go ahead?')) {
      this.crudService.deleteAds(id).subscribe((res) => {
        this.Ads.splice(i, 1);
      })
    }
  }

}