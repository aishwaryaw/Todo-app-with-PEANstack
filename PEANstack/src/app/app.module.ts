import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponentComponent } from './todos-component/todos-component.component';
import { EditTodosComponentComponent } from './edit-todos-component/edit-todos-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponentComponent,
    EditTodosComponentComponent
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
