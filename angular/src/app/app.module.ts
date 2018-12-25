import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';

import { ThemeService } from './services/theme.service';
import { AsideService } from './services/aside.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ThemeListComponent } from './components/theme-list/theme-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ThemeListComponent,
    FooterComponent,
    NavbarComponent,
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [
    ThemeService,
    AsideService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
