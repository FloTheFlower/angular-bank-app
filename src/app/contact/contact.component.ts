import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  
  name = "";
  email = '';
  number = '';
  feedback = '';


  clickAlert() {
    if  (!this.name || !this.email || !this.number) {
       alert ("Please fill in all the fields!")
    }
    
    else {
      alert(
        "Your name: " + this.name + '\n' + "Your phone number: " + this.number + '\n' + "Your Email: " + this.email + '\n' + "Your Feedback: " + this.feedback
      );
      this.router.navigate(['/atm']);
    }

  }


  constructor( private router : Router ) { 

   
        }

      

  ngOnInit() {
  }

}
