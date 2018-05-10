import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Themes } from '../models/themes';

@Injectable()
export class ThemeListService {

	private apiUrl = '/api/home';

	themes:Themes[] = [];

	constructor(private http: Http) {}

	getAllThemes(): Promise<Themes[]> {
    return this.http.get(this.apiUrl)
                    .toPromise()
                    .then(res => res.json())
                    .then(themes => this.themes = themes)
                    .catch(this.handleError);

  	}

	private handleError (error: any) {
		console.error('An error occurred', error);
		return Promise.reject(error.message || error);
	}

}
