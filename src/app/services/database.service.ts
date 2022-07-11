import { Injectable } from '@angular/core';
import data from "src/assets/files/resto-data.json";

@Injectable({
  providedIn: 'root'
})
export default class DatabaseService {

  constructor() { }

  public getDatabase() {
    return data;
  }
}
