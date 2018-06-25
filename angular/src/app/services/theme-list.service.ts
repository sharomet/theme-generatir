import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import 'rxjs/add/operator/map';

import { Themes } from '../models/themes';

@Injectable()
export class ThemeListService {

	private apiUrl = '/api/home';
	private buildUrl = '/api/build';
	private headers = new HttpHeaders({'Content-Type': 'application/json'});

	constructor(private http: HttpClient) {}

	public getAllThemes(): Observable<Themes[]> {
		return this.http.get<Themes[]>(this.apiUrl)
						.pipe(catchError(this.handleError));
	}

	public buildTheme(id: any) {
		return this.http.post<Themes>(this.buildUrl, id, {headers: this.headers}).pipe(
			catchError(this.handleError)
		);
	}

	private handleError (error: any) {
		console.error('An error occurred', error);
		return Promise.reject(error.message || error);
	}

}
