import { Injectable } from '@angular/core';

@Injectable()
export class AsideService {

  public open: boolean = true;

  constructor() { }

  toggleAside() {
    this.open = !this.open;
  }

}
