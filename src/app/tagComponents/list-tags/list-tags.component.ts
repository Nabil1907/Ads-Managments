import { Component, OnInit } from '@angular/core';
import { CrudService } from './../../service/crud.service'; 

@Component({
  selector: 'app-list-tags',
  templateUrl: './list-tags.component.html',
  styleUrls: ['./list-tags.component.css']
})
export class ListTagsComponent implements OnInit {
  tags:any=[]
  constructor(private crudService: CrudService) { }
  
  ngOnInit(): void {
    this.crudService.gettags().subscribe(res => {
      console.log(res)
      this.tags =res;
    });    
  }
  delete(id:any, i:any) {
    if(window.confirm('Do you want to go ahead?')) {
      this.crudService.deleteTag(id).subscribe((res) => {
        this.tags.splice(i, 1);
      })
    }
  }

}
