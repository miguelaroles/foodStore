export interface FormItemsItems {
  name: string;
  quantity: number;
  category: number;
}

export interface FormItems {
  price: number;
  items: FormItemsItems[];
}
