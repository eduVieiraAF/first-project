import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {
  public foodList: Array<{Food: string, price: number}> = [
    {Food: 'Pizza', price: 8},
    {Food: 'Burger', price: 5},
    {Food: 'Salad', price: 3},
    {Food: 'Pasta', price: 7},
    {Food: 'Steak', price: 10},
    {Food: 'Fish', price: 12},
    {Food: 'Shrimp', price: 15},
    {Food: 'Sushi', price: 20},
    {Food: 'Noodles', price: 5},
    {Food: 'Rice', price: 3},
    {Food: 'Spaghetti', price: 7},
  ]

  submitForm(form: NgForm) {
    console.log(form.value);
  }
}
