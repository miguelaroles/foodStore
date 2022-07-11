import {Component, Input, OnInit} from '@angular/core';
import { FormArray, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import DatabaseService from "./services/database.service";
// console.log(data);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private readonly _service: DatabaseService
  ) {
  }

  @Input() public price: number = 0;

  public title: string = this._service.getDatabase().title;

  public items: any[] = [];

  public categories: any[] = this._service.getDatabase().data;

  public tab: number = 0;

  public showform: boolean = false;

  public forms!: FormGroup;

  public cart: any[] = [];

  private itemAlreadyExist(
    items: {
      name: string;
      quantity: number;
      category: number
    }[],
    name: string): number
  {
    return items.findIndex((item: { name: string;quantity: number; category: number}) => item.name === name);
  }

  ngOnInit(): void {
    this.initForm();
  }

  handleFormReset(): void {
    this.initForm();
    this.price = 0;
    this.tab = 0;
  }
  listenMinusEvent($event: string) {
    const item: any = this.categories[this.tab].recipes.find((recipe: any) => recipe.uuid === $event);
    const itemName: string = item.title;
    const itemPrice: number = item.price;
    const formControlPrice = this.forms.get('price') as FormControl;
    const formControlItems = this.forms.get('items') as FormArray;
    const itemExistIndex = this.itemAlreadyExist(formControlItems.value,itemName);

    const previewItem = formControlItems.at(itemExistIndex);
    const previewQuantity = previewItem.value.quantity;


    if(previewQuantity > 0){
      previewItem.patchValue({
        quantity: previewQuantity - 1
      });
      formControlPrice.setValue(this.price - itemPrice);
      this.price = formControlPrice.value;

      if(previewItem.value.quantity === 0){
        formControlItems.removeAt(itemExistIndex);
      }
      this.cart = formControlItems.value;
    }
  }

  listenChildEvent($event: string) {
    const item: any = this.categories[this.tab].recipes.find((recipe: any) => recipe.uuid === $event);
    const itemName: string = item.title;
    const itemPrice: number = item.price;
    const itemQuantity = 1;
    const formControlPrice = this.forms.get('price') as FormControl;
    const formControlItems = this.forms.get('items') as FormArray;
    const itemExistIndex = this.itemAlreadyExist(formControlItems.value,itemName);

    if(itemExistIndex < 0){
      formControlItems.push(new FormGroup({
        name: new FormControl(itemName),
        quantity: new FormControl(
          itemQuantity,
          Validators.compose(
            [
              Validators.required,
              Validators.min(1)
            ])
        ),
        category: new FormControl(this.tab),
      }));
      formControlPrice.setValue(this.price + itemPrice);
    } else {
      const previewItem = formControlItems.at(itemExistIndex);
      const previewQuantity = previewItem.value.quantity;
      previewItem.patchValue({
        quantity: previewQuantity + 1
      });

      formControlPrice.setValue(this.price + itemPrice);
    }

    this.price = formControlPrice.value;
    this.cart = formControlItems.value;
  }

  listenChildTabEvent($event: number): void {
    this.tab = $event;
  }

  initForm(): void {
    this.forms = new FormGroup<any>({
      price: new FormControl(0, Validators.compose([Validators.required])),
      items: new FormArray([])
    });
  }

  onSubmitForm(): void {
    // console.log('// Form //', this.forms.value);
    // alert(JSON.stringify(this.forms.value));
    this.showform = true;
  }

  handleDialogClose(): void {
    this.handleFormReset();
    this.showform = false;
  }
}
