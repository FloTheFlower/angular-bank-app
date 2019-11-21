import { Component, Inject, Injectable } from '@angular/core';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-atm',
  templateUrl: './atm.component.html',
  styleUrls: ['./atm.component.css']
})


export class AtmComponent {
  value;


  
  constructor(public _bank: BankService) {  }

  withdraw () { 
    this._bank.account.balance -= this.value
  }

  deposit () {
    this._bank.account.balance += this.value

  }

}
