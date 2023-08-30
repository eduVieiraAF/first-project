import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {
  ngOnInit(): void {
    setInterval(() => {
      // if (this.condition) this.condition = false
      // else this.condition = true
      this.condition = !this.condition
    }, 2500)
  }

  public name: string = 'edu'
  public condition: boolean = true
  public conditionClick: boolean = true
  items: string[] = ['mango', 'banana', 'pear', 'apple', 'orange', 'strawberry', 'grape']
  list: Array<{ name: string, age: number }> = [
    { name: "Eduardo", age: 41 },
    { name: "Daniel", age: 21 },
    { name: "Sofia", age: 9 },
  ]

  clicked() {
    if (this.conditionClick) this.conditionClick = false
    else this.conditionClick = true
  }

  addToList() {
    this.list.push({ name: "LDI", age: 27 })
    this.list.sort((a, b) => a.age - b.age)
  }

  clickEvent(i: number) {
    console.log(i)
    this.list.splice(i, 1)
  }
}
