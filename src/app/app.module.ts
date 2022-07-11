import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { OrderComponent } from './order/order.component';
import { ColorPipe } from './pipes/color/color.pipe';
import { ItemComponent } from './item/item.component';
import { TabComponent } from './tab/tab.component';
import { ImageUrlPipe } from './pipes/image/image-url.pipe';
import { StripToCurrencyPipe } from './pipes/currency/strip-to-currency.pipe';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ObjectContainsPipe } from './pipes/array/object-contains.pipe';
import { QuantityPipe } from './pipes/forms/quantity.pipe';
import { CountCategoryPipe } from './pipes/tab/count-category.pipe';
import { HttpClientModule } from "@angular/common/http";

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
