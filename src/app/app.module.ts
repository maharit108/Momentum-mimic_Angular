import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ToDosComponent } from '../app/components/todo/to-dos/to-dos.component';
import { ToDoItemComponent } from '../app/components/todo/to-do-item/to-do-item.component';
import { AddTodoComponent } from '../app/components/todo/add-todo/add-todo.component';

import { WeatherComponent } from './components/landing/weather/weather.component';
import { QuotesComponent } from './components/landing/quotes/quotes.component';
import { MainLandComponent } from './components/landing/main-land/main-land.component';
import { TimeComponent } from './components/landing/time/time.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDosComponent,
    ToDoItemComponent,
    AddTodoComponent,
    WeatherComponent,
    QuotesComponent,
    MainLandComponent,
    TimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
