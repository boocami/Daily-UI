import { Component, OnInit } from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-credit-card-checkout',
  templateUrl: './credit-card-checkout.component.html',
  styleUrls: ['./credit-card-checkout.component.css']
})
export class CreditCardCheckoutComponent implements OnInit {

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
