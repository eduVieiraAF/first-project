import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-att-directives',
  templateUrl: './att-directives.component.html',
  styleUrls: ['./att-directives.component.scss']
})
export class AttDirectivesComponent implements OnInit {
  ngOnInit(): void {
    setInterval(() => {
      this.valor = !this.valor

      if (this.height == '20px') this.height = '50px'
      else this.height = '20px'
    }, 1000)
  }

  addToList() {
    this.list.push({ name: this.name })
    this.name = ''
  }

  valor: boolean = true
  height: string = '20px'
  colour: string = 'yellow'
  name: string = ''
  list: Array<{ name: string }> = []
}
