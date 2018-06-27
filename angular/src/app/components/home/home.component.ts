import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import * as $ from 'jquery';
import { bootstrap } from 'bootstrap';

import { ThemeService } from '../../services/theme.service'
import { Themes } from '../../models/themes';

declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  closeResult: string;

  public themes: Themes[] = [];
  private messageClass;
  private message;
  private themeName;

  constructor(private themeService: ThemeService, private modalService: NgbModal) {
    this.themeService.getAllThemes().subscribe(themes => {
			this.themes = themes;
		});
  }

  ngOnInit() {
  }
  
  setMessage(message: String) {
    this.message = message;
  }
  setMessageClass(messageClass: String) {
    this.messageClass = messageClass;
  }

  /**
	 * Create New Theme
	 */
	createTheme() {
    /*this.themeService.createTheme({name: this.themeName})
                     .subscribe((data: any) => {
                        if(data.message == 'error') {
                          this.messageClass = 'alert-error';
                          this.message = 'Error';
                        } else {
                          this.themeName = '';
                          this.messageClass = 'alert-success';
                          this.message = 'Theme Created';
                        }
                        this.themes.push(data);
                     });*/
  }
  
  /**
	 * Build Theme
	 */
	buildTheme(id: any) {
		this.themeService.buildTheme({id: id}).subscribe((data: any) => {
				if(data.message == 'success') {
					this.message = 'Success! User Added.';
					this.messageClass = 'alert-success';
				} else {
					this.message = 'Error!';
					this.messageClass = 'alert-danger';
				}
			});
  }
  
  open(content) {
    this.modalService.open(content, { size: 'sm' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
