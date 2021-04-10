import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from './../../service/crud.service';
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-details-ads',
  templateUrl: './details-ads.component.html',
  styleUrls: ['./details-ads.component.css']
})

export class DetailsAdsComponent implements OnInit {

  getId: any;
  updateForm: FormGroup;
  
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private crudService: CrudService
  ) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');

    this.crudService.GetOneAds(this.getId).subscribe(res => {
      console.log(res)
      this.updateForm.setValue({
        title: res['title'],
        type: res['type'],
        category: res['category'],
        tag: res['tag'],
        advertisor: res['advertisor'],
        description: res['description'],
        startDate: "aaaaaaaaaa",
        endDate: "aaaaaa"
      });
    });

    this.updateForm = this.formBuilder.group({
      title: [''],
      tag: [''],
      type: [''],
      category: [''],
      advertisor: [''],
      startDate: [''],
      endDate: [''],
      description: ['']
    })
  }

  ngOnInit() { }

  onUpdate(): any {
    this.crudService.updateBook(this.getId, this.updateForm.value)
    .subscribe(() => {
        console.log('Data updated successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/ads-list'))
      }, (err) => {
        console.log(err);
    });
  }

}