import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { NavModule } from './nav/nav.module';
import { TechModule } from './tech/tech.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    NavModule,
    TechModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
