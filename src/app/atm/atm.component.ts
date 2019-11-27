import { Component, Inject, Injectable } from '@angular/core';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-atm',
  templateUrl: './atm.component.html',
  styleUrls: ['./atm.component.css']
})

export class AtmComponent {
  value;
  showSucess = false;
  showHistory = false;

  constructor(public _bank: BankService) {  }

  withdraw () { 
    this._bank.account.balance -= this.value 
    this.showSucess = true;
    this._bank.account.transactions.push (this.value);
  }

  deposit () {
    this._bank.account.balance += this.value ;
    this.showSucess = true;
    this._bank.account.transactions.push({amount:this.value}, {balance:this.value});
  }

history() {
  this.showHistory=true;
}

  }

