import { Component, OnInit, NgZone} from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { Router } from '@angular/router';
import { CrudService } from './../../service/crud.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userForm: FormGroup;
  errors:any="";
  constructor(  
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService
  )
  { 
    this.userForm = this.formBuilder.group({
      username: [''],
      password: [''],
      confirmPassword:['']
     
    })
  }


  ngOnInit() {
  }
  
  onSubmit(): any {
    if(this.userForm.value.confirmPassword != this.userForm.value.password){
      this.errors="Two Password Not Indinticat !"
    }else{
    this.crudService.register(this.userForm.value)
    .subscribe(() => {
        console.log('Data added successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/login'))
      }, (err) => {
        console.log(err);
    });}
  }


} 
