import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { firstValueFrom } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export default class DatabaseService {

  constructor(
    private readonly _http: HttpClient
  ) { }

  private _isLogged:boolean = false;
  private _user:any = null;
  private _database: any;
  private _price: number = 0;

  public async getDatabase() {
    if(this._database){
      return this._database;
    } else {
      const url = "../../assets/files/resto-data.json";
      const request = await this._http.get(url);
      const result = await firstValueFrom(request);
      this._database = result;
      return result;
    }
  }

  public getCategories(): any[] {
    return this._database.data || [];
  }

  public getIsLogged(): boolean {
    return this._isLogged;
  }

  public setIsLogged(isLogged: boolean): void {
    this._isLogged = true;
  }

  public getUser(): any {
    return this._user;
  }

  public setUser(isLogged: any): void {
    this._isLogged = true;
  }

  public setPrice(price: number): void {
    this._price = price;
  }

  public getPrice(): number {
    return  this._price;
  }
}
