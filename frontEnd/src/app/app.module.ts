import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ClearWebComponent } from './clear-web/clear-web.component';
import { DarkWebComponent } from './dark-web/dark-web.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClearWebComponent,
    DarkWebComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
