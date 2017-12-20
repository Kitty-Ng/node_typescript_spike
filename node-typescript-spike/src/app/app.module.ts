import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';


import { ToyDetailComponent } from './toy-detail/toy-detail.component';
import { ToysComponent } from './toys/toys.component';
import { ToyService } from './toy.service';

import { MessagesComponent } from './messages/messages.component'; 
import { MessageService } from './message.service';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ToysComponent,
    ToyDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ToyService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
