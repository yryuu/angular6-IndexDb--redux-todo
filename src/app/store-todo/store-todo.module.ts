import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromTodo from './reducers';
import { TodoEffects } from './todo.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('todo', fromTodo.reducers, { metaReducers: fromTodo.metaReducers })
  ],
  declarations: []
})
export class StoreTodoModule { }
