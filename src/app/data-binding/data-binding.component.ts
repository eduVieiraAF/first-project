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

  public position: { x: number, y: number } = { x: 0, y: 0 }
public title: string = ""

  activate() {
    this.isDisabled = true
  }

  enable() {
    this.isDisabled = false
  }

  alertInfo(info: MouseEvent) {
    // alert(info)
    console.log(info)
  }

  mouseMoveTest(event: MouseEvent) {
    // console.log(event)

    this.position.x = event.offsetX
    this.position.y = event.offsetY
  }
}
