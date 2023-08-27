import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnChanges {

  @Input() public title: string = 'Welcome';


  ngOnInit(): void {
    // throw new Error('Function not implemented.');
  }

  ngOnChanges(): void {
    console.log(`${this.title} after changes`);
  }
}
