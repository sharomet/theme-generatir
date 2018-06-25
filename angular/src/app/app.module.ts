import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { ThemeListService } from './services/theme-list.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ThemeListComponent } from './components/theme-list/theme-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ThemeListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    ThemeListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
