import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { RestoComponent } from "./resto/resto.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'resto', component: RestoComponent
  },
  {
    path: 'detail/:id',
    component: ProductDetailComponent
  },
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: '**', component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
