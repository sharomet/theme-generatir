import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

import { ThemeService } from '../../services/theme.service';

import { Themes } from '../../models/themes';

@Component({
  selector: 'app-theme-list',
  templateUrl: './theme-list.component.html',
  styleUrls: ['./theme-list.component.css']
})
export class ThemeListComponent implements OnInit {

	public themes: Themes[] = [];

	@Output() setMessage = new EventEmitter();
	@Output() setMessageClass = new EventEmitter();
	@Input() themeInput;

	constructor(private themeService: ThemeService) {
		this.themeService.getAllThemes().subscribe(themes => {
			this.themes = themes;
		});
	}

	ngOnInit() {
		this.themes.push(this.themeInput);
		console.log(this.themeInput);
	}

	/**
	 * Build Theme
	 */
	buildTheme(id: any) {
		this.themeService.buildTheme({id: id}).subscribe((data: any) => {
				if(data.message == 'success') {
					this.setMessage.emit('Success! User Added.');
					this.setMessageClass.emit('alert-success');
				} else {
					this.setMessage.emit('Error!');
					this.setMessageClass.emit('alert-danger');
				}
			});
	}
}
