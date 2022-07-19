import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './features/terminal/navbar/navbar.component';
import { MainComponent } from './features/terminal/main/main.component';
import { OrderComponent } from './features/terminal/order/order.component';
import { ColorPipe } from './features/terminal/pipes/color/color.pipe';
import { ItemComponent } from './features/terminal/item/item.component';
import { TabComponent } from './features/terminal/tab/tab.component';
import { ImageUrlPipe } from './features/terminal/pipes/image/image-url.pipe';
import { StripToCurrencyPipe } from './features/terminal/pipes/currency/strip-to-currency.pipe';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ObjectContainsPipe } from './features/terminal/pipes/array/object-contains.pipe';
import { QuantityPipe } from './features/terminal/pipes/forms/quantity.pipe';
import { CountCategoryPipe } from './features/terminal/pipes/tab/count-category.pipe';
import { HttpClientModule } from "@angular/common/http";
import { RestoComponent } from './features/terminal/resto/resto.component';
import { LoginComponent } from './auth/containers/login/login.component';
import { NotFoundComponent } from './features/not-found/not-found.component';
import { ProductDetailComponent } from './features/terminal/product-detail/product-detail.component';
import { ForbiddenComponent } from './features/forbidden/forbidden.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    OrderComponent,
    ColorPipe,
    ItemComponent,
    TabComponent,
    ImageUrlPipe,
    StripToCurrencyPipe,
    ObjectContainsPipe,
    QuantityPipe,
    CountCategoryPipe,
    RestoComponent,
    LoginComponent,
    NotFoundComponent,
    ProductDetailComponent,
    ForbiddenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    IonicModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
