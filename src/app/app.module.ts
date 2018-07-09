import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { OnsenModule } from 'ngx-onsenui';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    EditComponent
  ],
  entryComponents: [ListComponent, EditComponent],
  imports: [
    BrowserModule, OnsenModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
