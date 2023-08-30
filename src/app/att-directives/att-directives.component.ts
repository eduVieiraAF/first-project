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
    }, 1000)
  }
  valor: boolean = true
}
