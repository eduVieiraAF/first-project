
import { Component, OnInit,  DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-title title="Angular" *ngIf="destroy"></app-title>
    <app-new-component></app-new-component>
    <!-- {{value}}
    <button (click)="add()">Add</button> -->
    <!-- <br>
    <button (click)="destroyComponent()">Destroy component</button> -->
    <!-- <app-directives></app-directives> -->
    <!-- <app-data-binding></app-data-binding> -->
    <!-- <app-input [counter]="addValue"></app-input><br> -->
    <!-- <button (click)="add()">Add</button> -->
    <!-- <ng-template [ngIf]="getData">
      <h1>{{ getData.name }}</h1>
      <h2>{{ getData.age }}</h2>
    </ng-template>
    <app-output (sendData)="setData($event)"></app-output> -->
    <!-- <app-att-directives></app-att-directives> -->
    <app-food-list></app-food-list>
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {
  // public value: number = 1;

  // public add(): number {
  //   return this.value += 1;
  // }
  public addValue: number = 10
  public destroy: boolean = true
  public getData: { name: string, age: number } | undefined

  destroyComponent() {
    this.destroy = false
  }

  add() {
    this.addValue += 1
  }

  public setData(event: { name: string, age: number }) {
    this.getData = event
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
