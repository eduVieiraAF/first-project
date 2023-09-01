import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent {

  @Output() public sendData: EventEmitter<{ name: string, age: number }> = new EventEmitter()
  public list: Array<{ name: string, age: number }> = [
    { name: 'Edu', age: 41 },
    { name: 'Daniel', age: 21 },
    { name: 'Sofia', age: 9 }
  ]

  public getData(i: number) {
    this.sendData.emit(this.list[i])
    console.log(this.list[i])
  }
}
