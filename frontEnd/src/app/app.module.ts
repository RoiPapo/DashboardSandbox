import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RequestService } from './requests.service';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ClearWebComponent, RoundPipe } from './clear-web/clear-web.component';
import { DarkWebComponent } from './dark-web/dark-web.component';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';  
import { ChartsModule } from 'ng2-charts';
import { Pipe } from '@angular/core';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClearWebComponent,
    DarkWebComponent,
    RoundPipe 
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpModule,
    ChartsModule
  ],
  providers: [RequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
