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

    this.foodListService.emitEvent.subscribe((res) =>
      alert(`You've added one item to the list: ${res}`)
    )
  }

  public foodList: Array<string> = []
}
