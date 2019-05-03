import { ActionReducerMap } from '@ngrx/store';
import * as fromFiltro from './filter/filter.reducer';
import { Todo } from './todo/model/todo.model';
import * as fromTodo from './todo/todo.reducer';

import * as fromFiltrosActions from './filter/filter.actions';

export interface AppState {
  todos: Todo[];
  filtro: fromFiltrosActions.filtrosValidos;
}

export const AppReducers: ActionReducerMap<AppState> = {
  todos: fromTodo.todoReducer,
  filtro: fromFiltro.filtroReducer
};
