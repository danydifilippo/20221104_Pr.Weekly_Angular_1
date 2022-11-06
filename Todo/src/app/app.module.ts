import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompletatiPage } from './completati/completati.page';
import { TodoPage } from './todo/todo.page';

@NgModule({
  declarations: [
    AppComponent,
    TodoPage,
    CompletatiPage
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
