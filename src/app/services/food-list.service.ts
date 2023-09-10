import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodList } from '../module/food-list';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {
  public emitEvent = new EventEmitter();


  private foodList: Array<string> = [];

  private url: string = 'http://localhost:3000/'

  constructor(private http: HttpClient) { }

  public getFoodList(): Observable<FoodList> {
    // return this.foodList;
    return this.http.get<FoodList>(`${this.url}food-list`)
      .pipe(
        res => res,
        err => err
        );
  }

  public foodListAdd(value: string) {
    this.foodListAlert(value);

    return this.foodList.push(value);
  }

  public foodListAlert(value: string) {
    return this.emitEvent.emit(value);
  }
}
