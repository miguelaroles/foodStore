import { Component, OnInit } from '@angular/core';
import DatabaseService from "../services/database.service";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { FormItemsItems } from "../../../interfaces/form-items";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-resto',
  templateUrl: './resto.component.html',
  styleUrls: ['./resto.component.scss']
})
export class RestoComponent implements OnInit {

  constructor(
    private readonly _service: DatabaseService,
    private _route: ActivatedRoute
  ) { }

  public price: number = this._service.getPrice();

  public database!: any;

  public title: string = '';

  public items: any[] = [];

  public categories: any[] = [];

  public tab: number = 0;

  public showForm: boolean = false;

  public forms!: FormGroup;

  public cart: any[] = [];

  private itemAlreadyExist(
    items: FormItemsItems[],
    name: string): number
  {
    return items.findIndex((item: FormItemsItems) => item.name === name);
  }

  async ngOnInit() {
    this.initForm();
    const data = this._route.snapshot.data['database'];
    this.database = data;
    this.title = data.title;
    this.categories = data?.data;
    // console.log('// test //',data, {});
  }

  handleFormReset(): void {
    this.initForm();
    // this.price = 0;
    this._service.setPrice(0);
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
      formControlPrice.setValue(this._service.getPrice() - itemPrice);
      this._service.setPrice(formControlPrice.value);
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
      formControlPrice.setValue(this._service.getPrice() + itemPrice);
    } else {
      const previewItem = formControlItems.at(itemExistIndex);
      const previewQuantity = previewItem.value.quantity;
      previewItem.patchValue({
        quantity: previewQuantity + 1
      });

      formControlPrice.setValue(this._service.getPrice() + itemPrice);
    }

    this._service.setPrice(formControlPrice.value);
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
    this._service.setPrice(0);
    this.price = 0;
  }

  onSubmitForm(): void {
    this.showForm = true;
  }

  handleDialogClose(): void {
    this.handleFormReset();
    this.showForm = false;
  }
  handleDialogCancel(): void {
    this.showForm = false;
  }

}
