import { Component, OnInit } from '@angular/core';
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {
  constructor(private foodListService: FoodListService) { }

  ngOnInit(): void {
    this.foodList = this.foodListService.getFoodList()

    this.foodListService.emitEvent.subscribe({
      next: (res: any) => alert(`You've add a new item → ${res}`),
      error: (err: any) => console.log(err)
    })
  }

  public foodList: Array<string> = []
}
