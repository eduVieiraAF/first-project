import { Component, OnInit } from '@angular/core';
import { FoodList } from 'src/app/module/food-list';
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {
  public foodList: Array<FoodList> = [];

  constructor(private foodListService: FoodListService) { }

  ngOnInit(): void {
    this.foodListService.getFoodList().subscribe({
      next: (res: any) => this.foodList = res,
      error: (err: any) => console.log(err)
    })

    this.foodListService.emitEvent.subscribe({
      next: (res: any) => {
        alert(`You've add a new item → ${res}`)
        return this.foodList.push(res)
    },
      error: (err: any) => console.log(err)
    })
  }

  public foodListDelete(id: number) {
    return this.foodListService.foodListDelete(id).subscribe({
      next: (res: any) => this.foodList = this.foodList.filter(
        item => {
          return id !== item.id
        }
      ),
      error: (err: any) => console.log(err)
    });
  }
}
