import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { bootstrapApplication } from '@angular/platform-browser';

@NgModule({
  declarations: [
    
  ],
  imports: [BrowserModule, CommonModule, AppComponent],
  providers: [],
  // bootstrap: [AppComponent]
})
export class AppModule {}
