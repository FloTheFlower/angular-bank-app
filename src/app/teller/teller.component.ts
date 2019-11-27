import { Component, OnInit } from '@angular/core';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-teller',
  templateUrl: './teller.component.html',
  styleUrls: ['./teller.component.css']
})
export class TellerComponent {

value;
  constructor(public _bankservice: BankService) { }

  withdraw() {
    this._bankservice.account.balance -= this.value;
    this._bankservice.account.transactions.push({amount:this.value}), {balance:this.value};
  }

  deposit(){
    this._bankservice.account.balance += this.value;
    this._bankservice.account.transactions.push({balance:this.value}, {amount: this.value})
  }

  history() {
    
  }

}
