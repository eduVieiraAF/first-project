import { Component, Input, OnChanges, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnChanges, OnDestroy {


  @Input() public title: string = 'Welcome';


  ngOnInit(): void {
    console.log('It\'s begun')
  }

  ngOnChanges(): void {
    console.log(`${this.title} after changes`);
  }

  ngOnDestroy(): void {
    console.log('It\'s over')
  }
}
