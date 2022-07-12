import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { RestoComponent } from "./resto/resto.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductResolver } from "./product.resolver";
import { LoginGuard } from "./login.guard";
import { ForbiddenComponent } from "./forbidden/forbidden.component";

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'resto',
    component: RestoComponent,
    canActivate: [LoginGuard],
    resolve: {
      database: ProductResolver
    },
  },
  {
    path: 'detail/:id',
    component: ProductDetailComponent
  },
  {
    path: 'forbidden',
    component: ForbiddenComponent
  },
  {
    path: '',
    redirectTo: 'login',
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
