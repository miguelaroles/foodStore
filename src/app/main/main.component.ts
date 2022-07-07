import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  public items: any[] = [
    {
      id: 1,
      name: 'Item 1',
      image: '/assets/images/placeholder.png',
      price: 20,
    },
    {
      id: 2,
      name: 'Item 2',
      image: '/assets/images/placeholder.png',
      price: 12,
    },
    {
      id: 3,
      name: 'Item 3',
      image: '/assets/images/placeholder.png',
      price: -14,
    },
    {
      id: 4,
      name: 'Item 4',
      image: '/assets/images/placeholder.png',
      price: 17,
    },
    {
      id: 5,
      name: 'Item 5',
      image: '/assets/images/placeholder.png',
      price: 42,
    },
    {
      id: 6,
      name: 'Item 6',
      image: '/assets/images/placeholder.png',
      price: -5,
    },
    {
      id: 1,
      name: 'Item 7',
      image: '/assets/images/placeholder.png',
      price: 20.5,
    },
    {
      id: 2,
      name: 'Item 8',
      image: '/assets/images/placeholder.png',
      price: -10.45,
    },
    {
      id: 3,
      name: 'Item 9',
      image: '/assets/images/placeholder.png',
      price: 3.75,
    },
    {
      id: 4,
      name: 'Item 10',
      image: '/assets/images/placeholder.png',
      price: 20,
    },
    {
      id: 5,
      name: 'Item 11',
      image: '/assets/images/placeholder.png',
      price: 28.35,
    },
    {
      id: 6,
      name: 'Item 12',
      image: '/assets/images/placeholder.png',
      price: -14.55,
    }
  ];

  ngOnInit(): void {
  }

}
