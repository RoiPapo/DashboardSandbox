import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RequestService } from './requests.service';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ClearWebComponent } from './clear-web/clear-web.component';
import { DarkWebComponent } from './dark-web/dark-web.component';
import { HttpModule } from '@angular/http';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClearWebComponent,
    DarkWebComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [RequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
