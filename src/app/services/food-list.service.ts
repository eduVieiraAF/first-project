import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {
  private foodList: Array<string> = [
    'Apple',
    'Banana',
    'Pear',
    'Orange',
    'Strawberry',
    'Grape',
    'Mango',
  ];

  constructor() { }

  public getFoodList(): Array<string> {
    return this.foodList;
  }

  public foodListAdd(value: string) {
    return this.foodList.push(value);

  }
}
