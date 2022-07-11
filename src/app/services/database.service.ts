import { Injectable } from '@angular/core';
// import data from "src/assets/files/resto-data.json";
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

  public async getDatabase() {
    const url = "../../assets/files/resto-data.json";
    const request = await this._http.get(url);
    return await firstValueFrom(request);
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
}
