import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../model/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { CompletarTodoAction, EditarTodoAction, BorrarTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild('txtInputFisico') txtInputFisico: ElementRef;

  chkField: FormControl;
  txtInput: FormControl;

  editando: boolean;
  updated: boolean;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {

    this.updated = false;
    this.chkField = new FormControl(this.todo.completada);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);

    this.chkField.valueChanges.subscribe(valor => {
      const accion = new CompletarTodoAction(this.todo.id);
      this.store.dispatch(accion);
    });

  }

  editar() {
    this.editando = true;
    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    }, 1);
  }

/*   onKey(event: any) {
    if (event === 'Enter') {
      this.terminarEdicion();
    }
  } */

  terminarEdicion() {
    this.editando = false;

    if (this.txtInput.invalid || this.txtInput.value === this.todo.texto) {
      return;
    }

    this.updated = true;
    const accion = new EditarTodoAction(this.todo.id, this.txtInput.value);
    this.store.dispatch(accion);

    setTimeout(() => { this.updated = false; }, 1500);

  }

  borrarTarea() {
    const accion = new BorrarTodoAction(this.todo.id);
    this.store.dispatch(accion);
  }

}
