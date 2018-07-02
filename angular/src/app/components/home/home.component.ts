import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { ThemeService } from '../../services/theme.service'
import { Themes } from '../../models/themes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public themes: Themes[] = [];
  private messageClass;
  private message;
  private themeName;
  private modalRef: NgbModalRef;

  constructor(
    private themeService: ThemeService, 
    private modalService: NgbModal,
  ) {
    this.themeService.getAllThemes().subscribe(themes => {
			this.themes = themes;
		});
  }

  ngOnInit() {
  }
  
  /**
	 * Create New Theme
	 */
	createTheme() {
    this.themeService.createTheme({name: this.themeName})
                     .subscribe((data: any) => {
                        if(data.message == 'error') {
                          this.messageClass = 'alert-error';
                          this.message = 'Error';
                        } else {
                          this.modalRef.close();
                          this.themeName = '';
                          this.messageClass = 'alert-success';
                          this.message = 'Theme Created';
                          this.themes.push(data);
                        }
                     });
  }
  
  /**
	 * Build Theme
	 */
	buildTheme(id: any) {
    this.themeService.buildTheme({id: id})
                     .subscribe((data: any) => {
                      if(data.message == 'success') {
                        this.message = 'Success! User Added.';
                        this.messageClass = 'alert-success';
                      } else {
                        this.message = 'Error!';
                        this.messageClass = 'alert-danger';
                      }
			              });
  }

  /**
   * Delete Theme
   */
  deleteTheme(id: any) {
    this.themeService.deleteTheme(id)
                     .subscribe((data: any) => {
                       console.log(data);
                      if(data.message == 'error'){
                        this.message = 'Error!';
                        this.messageClass = 'alert-danger';
                      } else {
                        this.message = 'Theme Deleted!'
                        this.messageClass = 'alert-success';
                        this.themes = data;
                      }
                     });
  }
  
  /**
   * Open Modal
   */
  open(content) {
    this.modalRef = this.modalService.open(content, {size: 'sm'});
  }
}
