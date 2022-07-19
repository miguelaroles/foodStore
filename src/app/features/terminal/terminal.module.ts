import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from "@angular/router";
import { RestoComponent } from "./resto/resto.component";
import { IonicModule } from "@ionic/angular";

const routes: Routes = [
  {
    path: '',
    component: RestoComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    IonicModule
  ]
})
export class TerminalModule { }
