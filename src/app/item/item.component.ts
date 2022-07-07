import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  constructor() { }

  @Input() public item!: {imageUrl: string; title: string; price: number; description: string; uuid: string};
  @Input() public selectedItems!: any[];
  @Output() itemEvent: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void { }

  emitEvent (){
    this.itemEvent.emit(this.item.uuid);
  }

}
