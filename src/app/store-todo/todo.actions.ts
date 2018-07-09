import { Action } from '@ngrx/store';
import { Todo } from '../util/model/todo';

export enum TodoActionTypes {
  /** Todoリストの取得 **/
  LoadTodos = '[Todo] Load Todos',
  /** Todoを保存する */
  SaveTodo = '[Todo] Save Todo',
  /** private Todo保存成功時 */
  SaveTodoSuccess = '[Todo] Save Todo Success',
}

export class LoadTodos implements Action {
  readonly type = TodoActionTypes.LoadTodos;
}

export class SaveTodo implements Action {
  readonly type = TodoActionTypes.SaveTodo;
  constructor(public payload: { todo: Todo }) {
  }
}

export class SaveTodoSuccess implements Action {
  readonly type = TodoActionTypes.SaveTodoSuccess;
}

export type TodoActions = LoadTodos | SaveTodo | SaveTodoSuccess;
