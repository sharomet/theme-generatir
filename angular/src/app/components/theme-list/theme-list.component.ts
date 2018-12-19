import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

import { ThemeService } from '../../services/theme.service';

import { Themes } from '../../models/themes';

@Component({
  selector: 'app-theme-list',
  templateUrl: './theme-list.component.html',
  styleUrls: ['./theme-list.component.css']
})
export class ThemeListComponent implements OnInit {

	@Output() setMessage = new EventEmitter();
	@Output() setMessageClass = new EventEmitter();
	@Input()  themes: Themes[];

	constructor(private themeService: ThemeService) {
	}

	ngOnInit() {
	}
}
