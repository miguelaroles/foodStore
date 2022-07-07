import {Component, Input, OnInit} from '@angular/core';
import data from "src/assets/files/resto-data.json";
import {FormArray, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";

// console.log(data);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @Input() public price: number = 0;

  public title: string = data.title;

  public items: any[] = [];

  public categories: any[] = data.data;

  public tab: number = 0;

  public forms!: FormGroup;

  private itemsAlreadyExist(
    items: {
      name: string;
      quantity: number;}[],
    name: string): (boolean | {name: string; quantity:number;})
  {
    return items.find((item: { name: string;quantity: number}) => item.name === name) || false;
  }

  ngOnInit(): void {
    this.initForm();
  }

  listenChildEvent($event: string) {
    const item: any = this.categories[this.tab].recipes.find((recipe: any) => recipe.uuid === $event);
    const itemName: string = item.title;
    const itemPrice: number = item.price;
    const itemQuantity = 1;
    const formControlPrice = this.forms.get('price') as FormControl;
    const formControlItems = this.forms.get('items') as FormArray;
    const currentPrice = formControlPrice.value;
    // console.log("// test //", formControlItems);

    formControlItems.push(new FormGroup({
      name: new FormControl(itemName),
      quantity: new FormControl(itemQuantity),
    }));
    formControlPrice.setValue(currentPrice + (itemQuantity * itemPrice));
    this.price = formControlPrice.value;
  }

  listenChildTabEvent($event: number) {
    this.tab = $event;
  }

  initForm(): void {
    this.forms = new FormGroup<any>({
      price: new FormControl(0, Validators.compose([Validators.required])),
      items: new FormArray([])
    });
  }

  onSubmitForm (): void {
    // console.log('// Form //', this.forms.value);
    alert(JSON.stringify(this.forms.value));
    this.forms.reset();
  }
}
