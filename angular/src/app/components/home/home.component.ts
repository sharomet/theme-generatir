import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private messageClass;
  private message;

  constructor() {
    
  }
  
  setMessage(message: String) {
    this.message = message;
  }
  setMessageClass(messageClass: String) {
    this.messageClass = messageClass;
  }

  ngOnInit() {

  }

}
