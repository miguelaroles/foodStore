import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  @Input() public categories!: any[];
  @Input() public tab!: number;
  @Output() tabEvent: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void { }

  listenChildEvent($event: number) {
    this.tabEvent.emit($event);
  }

}
