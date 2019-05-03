import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducers';
import { CompletarAllTodoAction } from './todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {

  completada = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  marcarCompletados() {

    this.completada = !this.completada;
    const accion = new CompletarAllTodoAction(this.completada);
    this.store.dispatch(accion);
  }

}
