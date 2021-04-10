import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListAdsComponent } from './components/list-ads/list-ads.component';
import { AddAdsComponent } from './components/add-ads/add-ads.component';
import { DetailsAdsComponent } from './components/details-ads/details-ads.component';
import { RegisterComponent } from './adverComponent/register/register.component';
import { LoginComponent } from './adverComponent/login/login.component';
import { DetailsComponent } from './adverComponent/details/details.component';
import { ListUsersComponent } from './adverComponent/list-users/list-users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListCategoryComponent } from './categoryComponents/list-category/list-category.component';
import { ListTagsComponent } from './tagComponents/list-tags/list-tags.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'ads-list', component: ListAdsComponent },
  { path: 'add-ads', component: AddAdsComponent },
  { path: 'edit-ads/:id', component: DetailsAdsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'allusers', component: ListUsersComponent },
  { path: 'tags-list', component: ListTagsComponent },
  { path: 'category-list', component: ListCategoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
