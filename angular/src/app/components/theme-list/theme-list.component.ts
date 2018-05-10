import { Component, OnInit } from '@angular/core';

import { ThemeListService } from '../../services/theme-list.service';

import { Themes } from '../../models/themes';

@Component({
  selector: 'app-theme-list',
  templateUrl: './theme-list.component.html',
  styleUrls: ['./theme-list.component.css']
})
export class ThemeListComponent implements OnInit {

	public themes: Themes[];

	constructor(private themeListService: ThemeListService) {}

	ngOnInit() {
		this.themeListService.getAllThemes().then(themes => this.themes = themes);
	}

}
