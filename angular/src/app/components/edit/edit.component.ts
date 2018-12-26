import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AsideService } from '../../services/aside.service'
import { ThemeService } from '../../services/theme.service'

import { Themes } from '../../models/themes'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  private id: string;
  private theme;

  constructor(
    private asideService: AsideService,
    private route: ActivatedRoute,
    private themeService: ThemeService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.id = params.id);
    this.themeService.getThemeById(this.id)
                     .subscribe(res => this.theme = res);

    //console.log(this.theme.name);
  }

}
