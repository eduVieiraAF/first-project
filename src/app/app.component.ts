import { Component, OnInit,  DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-title title="Eduardo" *ngIf="destroy"></app-title>
    <!-- {{value}}
    <button (click)="add()">Add</button> -->
    <!-- <br>
    <button (click)="destroyComponent()">Destroy component</button> -->
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {
  // public value: number = 1;

  // public add(): number {
  //   return this.value += 1;
  // }

  public destroy: boolean = true

  destroyComponent() {
    this.destroy = false
  }

  constructor() {

  }

  // ngDoCheck(): void {
  //   console.log('ngDoCheck')
  // }
  // ngAfterContentInit(): void {
  //   console.log('ngAfterContentInit')
  // }
  // ngAfterContentChecked(): void {
  //   console.log('ngAfterContentChecked')
  // }
  // ngAfterViewInit(): void {
  //   console.log('ngAfterViewInit')
  // }
  // ngAfterViewChecked(): void {
  //   console.log('ngAfterViewChecked')
  // }
  // ngOnDestroy(): void {

  // }

  ngOnInit(): void {
    // setTimeout(() => {
    //   console.log("yes")
    // }, 5000)
    
  }
}
