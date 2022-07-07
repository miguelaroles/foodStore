import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  public categories: any[] = [
    {
      id: 1,
      name: 'Categorie 1',
    },
    {
      id: 2,
      name: 'Categorie 2',
    },
    {
      id: 3,
      name: 'Categorie 3',
    },
    {
      id: 4,
      name: 'Categorie 4',
    },
    {
      id: 5,
      name: 'Categorie 5',
    },
    {
      id: 6,
      name: 'Categorie 6',
    },
  ];
  ngOnInit(): void {
  }

}
