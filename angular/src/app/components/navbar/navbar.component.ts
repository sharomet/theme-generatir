import { Component, OnInit } from '@angular/core';

import { AsideService } from '../../services/aside.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public open: boolean = false;

  constructor(private asideService: AsideService) { }

  ngOnInit() {
  }

  toggleAside(event) {
    event.preventDefault();
    this.asideService.toggleAside();
  }

}
