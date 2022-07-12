import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Router} from "@angular/router";


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor( private router : Router ) { }

  @Input() public title!: string;
  @Input() public items!: any[];
  @Input() public forms!: FormGroup;
  @Output() itemEvent: EventEmitter<string> = new EventEmitter<string>();
  @Output() minusEvent: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void { }

  listenChildEvent($event: string) {
    this.itemEvent.emit($event);
  }

  listenMinusEvent($event: string) {
    this.minusEvent.emit($event);
  }

  handleQuit() {
    this.router.navigate(['']).then(() => {});
  }
}
