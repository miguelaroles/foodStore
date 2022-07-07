import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { OrderComponent } from './order/order.component';
import { ColorPipe } from './pipes/color/color.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    OrderComponent,
    ColorPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
