import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from "./features/not-found/not-found.component";
import { ProductDetailComponent } from "./features/terminal/product-detail/product-detail.component";
import { ProductResolver } from "./features/terminal/resolvers/product.resolver";
import { LoginGuard } from "./features/terminal/guards/login.guard";
import { ForbiddenComponent } from "./features/forbidden/forbidden.component";

const routes: Routes = [
  {
    path: 'login', loadChildren: () =>
      import('./auth/auth.module')
        .then(module => module.AuthModule)
  },
  {
    path: 'terminal',
    loadChildren: () =>
      import('./features/terminal/terminal.module')
        .then((module => module.TerminalModule)),
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
