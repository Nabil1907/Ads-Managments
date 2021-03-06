import { Component, OnInit } from '@angular/core';
import { CrudService } from './../../service/crud.service'; 

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {
  categories:any=[]
  constructor(private crudService: CrudService) { }
  
  ngOnInit(): void {
    this.crudService.getcategories().subscribe(res => {
      console.log(res)
      this.categories =res;
    });    
  }
  delete(id:any, i:any) {
    if(window.confirm('Do you want to go ahead?')) {
      this.crudService.deleteCategory(id).subscribe((res) => {
        this.categories.splice(i, 1);
      })
    }
  }

 
}
