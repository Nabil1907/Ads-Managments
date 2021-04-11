import { Injectable } from '@angular/core';
import { Ads, Advertisor, Tag, Category } from './ads';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CrudService {

  // Node/Express API
  REST_API: string = 'http://localhost:8000/api';
  //Node/user
  REST_User_API: string = 'http://localhost:8000/user';

  // Http Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }

  // Add
  Addads(data: Ads): Observable<any> {
    console.log("result :")
    console.log(data)
    let API_URL = `${this.REST_API}/add-ads`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }

  // Get all objects
  Getads() {
    return this.httpClient.get(`${this.REST_API}`);
  }

  // Get single object
  GetOneAds(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/read-ads/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders })
      .pipe(map((res: any) => {
        return res || {}
      }),
        catchError(this.handleError)
      )
  }

  // Update
  updateBook(id: any, data: any): Observable<any> {
    let API_URL = `${this.REST_API}/update-ads/${id}`;
    return this.httpClient.put(API_URL, data, { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      )
  }

  // Delete
  deleteAds(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/delete-ads/${id}`;
    console.log(API_URL)
    return this.httpClient.delete(API_URL, { headers: this.httpHeaders }).pipe(
      catchError(this.handleError)
    )
  }

  // user funcitons

  // Add
  register(data: Advertisor): Observable<any> {
    // console.log("result :")
    // console.log(data)
    let API_URL = `${this.REST_User_API}/signUp`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }

  // Get all objects
  getUsers() {
    return this.httpClient.get(`${this.REST_User_API}/allUsers`);
  }

  // Get single object
  logIn(data: Advertisor): Observable<any> {
    let API_URL = `${this.REST_User_API}/login`;
    return this.httpClient.post(API_URL, data)
      .pipe(map((res: any) => {
        return res || {}
      }),
        catchError(this.handleError)
      )
  }

  // Update
  updateAdvertisor(id: any, data: any): Observable<any> {
    let API_URL = `${this.REST_User_API}/update/${id}`;
    return this.httpClient.put(API_URL, data, { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      )
  }

  // Delete
  deleteAdvertisor(id: any): Observable<any> {

    let API_URL = `${this.REST_User_API}/delete/${id}`;
    console.log(API_URL)
    return this.httpClient.delete(API_URL, { headers: this.httpHeaders }).pipe(
      catchError(this.handleError)
    )
  }
  //adding tag name
  addTag(data: Ads): Observable<any> {
    console.log("result :")
    console.log(data)
    let API_URL = `${this.REST_API}/add-tag`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }
  //adding category name
  addCategory(data: Tag): Observable<any> {
    console.log("result :")
    console.log(data)
    let API_URL = `${this.REST_API}/get-adsWithTags`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }
  //filter By Tags
  getAdsByTags(data) {
    console.log(data)
    let API_URL = `${this.REST_API}/get-adsWithTags`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }
   //filter By Category
   getAdsByCategory(data) {
    console.log("data")
    console.log(data)
    let API_URL = `${this.REST_API}/get-adsWithCompnents`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }

  // get all tags 
  gettags() {
    return this.httpClient.get(`${this.REST_API}/all-tags`);
  }
  // get all category 
  getcategories() {
    return this.httpClient.get(`${this.REST_API}/all-category`);
  }
  // delete Category
  deleteCategory(id: any): Observable<any> {

    let API_URL = `${this.REST_API}/delete-category/${id}`;
    console.log(API_URL)
    return this.httpClient.delete(API_URL, { headers: this.httpHeaders }).pipe(
      catchError(this.handleError)
    )
  }
  // Delete tag
  deleteTag(id: any): Observable<any> {

    let API_URL = `${this.REST_API}/delete-tag/${id}`;
    // console.log(API_URL)
    return this.httpClient.delete(API_URL, { headers: this.httpHeaders }).pipe(
      catchError(this.handleError)
    )
  }



  // Error 
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}