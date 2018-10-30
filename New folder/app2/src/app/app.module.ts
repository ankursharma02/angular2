import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {demo1} from './Demo1/demo1.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    demo1
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
