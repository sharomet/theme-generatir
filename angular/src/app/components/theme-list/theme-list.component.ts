import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ThemeListService } from '../../services/theme-list.service';

import { Themes } from '../../models/themes';

@Component({
  selector: 'app-theme-list',
  templateUrl: './theme-list.component.html',
  styleUrls: ['./theme-list.component.css']
})
export class ThemeListComponent implements OnInit {

	public themes: Themes[];

	@Output() setMessage = new EventEmitter();
	@Output() setMessageClass = new EventEmitter();

	constructor(private themeListService: ThemeListService) {}

	ngOnInit() {
		this.themeListService.getAllThemes().subscribe(themes => this.themes = themes);
	}

	buildTheme(id: any) {
		const themeId = {id: id};

		this.themeListService.buildTheme(themeId).subscribe((data: any) => {
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
