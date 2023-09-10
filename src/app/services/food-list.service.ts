import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodList } from '../module/food-list';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {
  public emitEvent = new EventEmitter();
  private foodList: Array<FoodList> = [];
  private url: string = 'http://localhost:3000/'

  constructor(private http: HttpClient) { }

  public getFoodList(): Observable<Array<FoodList>> {
    // return this.foodList;
    return this.http.get<Array<FoodList>>(`${this.url}food-list`)
      .pipe(
        res => res,
        err => err
      );
  }

  public foodListAdd(value: string): Observable<Array<FoodList>> {
    return this.http.post<Array<FoodList>>(`${this.url}food-list`, { name: value })


    }
  public foodListDelete(id: number): Observable<Array<FoodList>> {
    return this.http.delete<Array<FoodList>>(`${this.url}food-list/${id}`)

  }

  public foodListEdit(id: number, value: string): Observable<Array<FoodList>> {
    return this.http.put<Array<FoodList>>(`${this.url}food-list/${id}`, { name: value })
  }



  public foodListAlert(value: string) {
    return this.emitEvent.emit(value);
  }
}
