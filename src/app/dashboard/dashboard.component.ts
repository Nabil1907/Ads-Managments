import { Component, OnInit } from '@angular/core';
import { CrudService } from './../service/crud.service'; 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  Ads:any = [];
  tags:any = [];
  category:any = [];
  selectedTagsList = [];
  selectedCategoryList = [];
  checkedIDs = [];
  checkedCategory = [];
  // finalTags=[];
  // finalCategory=[];
  finalTags = new Set()
  finalCategory = new Set()
  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjtV2aDZknePmyFtXmR22KwIjLMiyYSPxzBw&usqp=CAU";
  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.fetchSelectedItems()
    this.fetchCheckedIDs()

    this.fetchSelectedCategory()
    this.fetchCheckedCategory()

    this.crudService.Getads().subscribe(res => {
      // console.log(res)
      this.Ads =res;
    });    
    this.crudService.gettags().subscribe(res=>{
      console.log(res);
      this.tags= res 
    });
    this.crudService.getcategories().subscribe(res=>{
      console.log(res);
      this.category= res 
    });
  }

  changeSelection() {
    this.fetchSelectedItems()
    this.fetchSelectedCategory()
    
    this.selectedTagsList.forEach((value, index)=>{
      this.finalTags.add(value.tagName)
    });
    this.selectedCategoryList.forEach((value, index)=>{
      this.finalCategory.add(value.categoryName)
    });
   
    this.crudService.getAdsByTags(this.selectedTagsList).subscribe(res => {
      console.log(res)
      this.Ads =res;
    }); 
    if(this.selectedCategoryList.length!=0){
    this.crudService.getAdsByCategory(this.selectedCategoryList).subscribe(res => {
      console.log(res)
      this.Ads =res;
    }); 
  }

    if(this.selectedCategoryList.length==0&&this.selectedTagsList.length==0){
      this.crudService.Getads().subscribe(res => {
        // console.log(res)
        this.Ads =res;
      });  
    }
    // this.crudService.getAdsByCa(this.selectedTagsList).subscribe(res => {
    //   console.log(res)
    //   this.Ads =res;
    // }); 
  }

  fetchSelectedItems() {
    this.selectedTagsList = this.tags.filter((value, index) => {
      return value.isChecked
    });
  }
  fetchSelectedCategory() {
    this.selectedCategoryList = this.category.filter((value, index) => {
      return value.isChecked
    });
  }


  fetchCheckedIDs() {
    this.checkedIDs = []
    this.tags.forEach((value, index) => {
      if (value.isChecked) {
        this.checkedIDs.push(value.id);
      }
    });
  }

  fetchCheckedCategory() {
    this.checkedCategory = []
    this.category.forEach((value, index) => {
      if (value.isChecked) {
        this.checkedCategory.push(value.id);
        // console.log(value.id)
      }
    });
  }
  


}
