import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  @Input() public title!: string;
  @Input() public items!: any[];
  @Input() public forms!: FormGroup;
  @Output() itemEvent: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void { }

  listenChildEvent($event: string) {
    this.itemEvent.emit($event);
  }
}
