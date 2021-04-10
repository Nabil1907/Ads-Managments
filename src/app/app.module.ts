import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAdsComponent } from './components/add-ads/add-ads.component';
import { DetailsAdsComponent } from './components/details-ads/details-ads.component';
import { ListAdsComponent } from './components/list-ads/list-ads.component';
import { LoginComponent } from './adverComponent/login/login.component';
import { RegisterComponent } from './adverComponent/register/register.component';
import { DetailsComponent } from './adverComponent/details/details.component';
import { ListUsersComponent } from './adverComponent/list-users/list-users.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListTagsComponent } from './tagComponents/list-tags/list-tags.component';
import { ListCategoryComponent } from './categoryComponents/list-category/list-category.component';


@NgModule({
  declarations: [
    AppComponent,
    AddAdsComponent,
    DetailsAdsComponent,
    ListAdsComponent,
    LoginComponent,
    RegisterComponent,
    DetailsComponent,
    ListUsersComponent,
    DashboardComponent,
    ListTagsComponent,
    ListCategoryComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
