import { Component, OnInit } from '@angular/core';
import { CrudService } from './../../service/crud.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  Users:any = [];

  constructor(private crudService: CrudService) { }

  ngOnInit() : void{
    this.crudService.getUsers().subscribe(res => {
      console.log(res)
      this.Users =res;
    });    
  }
  delete(id:any, i:any) {
    if(window.confirm('Do you want to go ahead?')) {
      this.crudService.deleteAdvertisor(id).subscribe((res) => {
        this.Users.splice(i, 1);
      })
    }
  }

}