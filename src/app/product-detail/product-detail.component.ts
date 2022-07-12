import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  public _parameter: any;

  constructor(private _route:ActivatedRoute) { }

  ngOnInit(): void {
    this._parameter = this._route.snapshot.params;
  }

}
