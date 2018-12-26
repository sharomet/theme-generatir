import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Themes } from '../models/themes';

@Injectable()
export class ThemeService {

	private getThemeUrl = '/api/theme/';
	private apiUrl = '/api/home';
	private buildUrl = '/api/build';
	private createUrl = '/api/create';
	private deleteUrl = '/api/delete/';
	private headers = new HttpHeaders({'Content-Type': 'application/json'});

	constructor(private http: HttpClient) {}

	/**
	 * Get All Theme
	 */
	public getAllThemes(): Observable<Themes[]> {
		return this.http.get<Themes[]>(this.apiUrl)
						.pipe(catchError(this.handleError));
	}

	/**
	 * Get theme By Id
	 */
	public getThemeById(id: string) {
		return this.http.get(this.getThemeUrl + id)
						.pipe(catchError(this.handleError));
	}

	/**
	 * Build Theme
	 */
	public buildTheme(id: any) {
		return this.http.post<Themes>(this.buildUrl, id, { headers: this.headers })
						.pipe(catchError(this.handleError));
	}

	/**
	 * Create Theme
	 */
	public createTheme(name: any, id: String = null) {
		return this.http.post<Themes>(this.createUrl, name, { headers: this.headers })
						.pipe(catchError(this.handleError));
	}

	/**
	 * Delete Theme
	 */
	public deleteTheme(id: any) {
		return this.http.post(this.deleteUrl + id, {headers: this.headers})
						.pipe(catchError(this.handleError));
	}

	private handleError (error: any) {
		console.error('An error occurred', error);
		return Promise.reject(error.message || error);
	}

}
