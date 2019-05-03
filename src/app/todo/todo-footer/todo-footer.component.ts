import { Component, OnInit } from '@angular/core';
import * as fromFiltro from '../../filter/filter.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { Todo } from '../model/todo.model';
import { BorrarAllTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  filtrosValidos: fromFiltro.filtrosValidos[] = ['todas', 'completadas', 'pendientes'];
  filtroActual: fromFiltro.filtrosValidos;

  pendientes: number;

  constructor(private store: Store<AppState>) {

  }

  ngOnInit() {

    this.filtroActual = 'todas';

    this.store.subscribe(state => {
      this.filtroActual = state.filtro;
      this.contarPendientes(state.todos);
    });
  }

  cambiarFiltro(filtro: fromFiltro.filtrosValidos) {

      const accion = new fromFiltro.SetFiltroAction(filtro);
      this.store.dispatch(accion);

  }

  contarPendientes(todos: Todo[]) {
    this.pendientes = todos.filter(todo => !todo.completada).length;
  }

  borrarCompletadas() {
      const accion = new BorrarAllTodoAction();
      this.store.dispatch(accion);
  }

}
