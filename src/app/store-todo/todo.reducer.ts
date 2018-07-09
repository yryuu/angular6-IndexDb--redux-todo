import { Action } from '@ngrx/store';
import { Todo } from '../util/model/todo';

export interface State {
  // 保存しているTodoリスト
  todoList: Todo[];
  // 選択中のTodoList
  selectTodo: Todo;
}

export const initialState: State = {
  todoList: [],
  selectTodo: null,
};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {

    default:
      return state;
  }
}
