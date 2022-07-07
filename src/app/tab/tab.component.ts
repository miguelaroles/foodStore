import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  constructor() { }

  @Input() public category!: any;
  @Input() public index!: number;
  @Input() public active!: boolean;
  @Output() tabEvent: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void { }

  emitEvent (){
    this.tabEvent.emit(this.index);
  }

}
