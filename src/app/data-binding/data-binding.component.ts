import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent {
  public element: string = "Hello World!";
  public num: number =  3.1415

  public isDisabled: boolean = false

  activate() {
    this.isDisabled = true
  }

  enable() {
    this.isDisabled = false
  }
}
