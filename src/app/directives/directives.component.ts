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
  public condition: boolean = true
  public conditionClick: boolean = true

  clicked() {
    if (this.conditionClick) this.conditionClick = false
    else this.conditionClick = true
  }
}
