import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  constructor() { }

  @Input() public item!: {imageUrl: string; title: string; price: number; description: string; uuid: string};
  @Input() public selectedItems!: any[];
  @Input() public forms!: FormGroup;
  @Output() itemEvent: EventEmitter<string> = new EventEmitter<string>();
  @Output() minusEvent: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void { }

  emitEvent (){
    this.itemEvent.emit(this.item.uuid);
  }

  handleMinusClick (event: any): void {
    event.preventDefault();
    event.stopPropagation();
    this.minusEvent.emit(this.item.uuid);
  }

}
