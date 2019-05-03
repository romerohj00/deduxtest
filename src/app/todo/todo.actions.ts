import { Action } from '@ngrx/store';

export const AGREGAR_TODO = '[TODO] Agretar tarea';
export const COMPLETAR_TODO = '[TODO] Cambiar status de tarea';
export const COMPLETAR_ALL_TODO = '[TODO] Cambiar status de todas las tarea';
export const EDITAR_TODO = '[TODO] Editar tarea';
export const BORRAR_TODO = '[TODO] Borrar tarea';
export const BORRAR_ALL_TODO = '[TODO] Borrar todas las tarea';

export class AgregarTodoAction implements Action {
  readonly type = AGREGAR_TODO;

  constructor (public texto: string) {

  }
}

export class CompletarTodoAction implements Action {
  readonly type = COMPLETAR_TODO;

  constructor (public id: number) {

  }
}

export class CompletarAllTodoAction implements Action {
  readonly type = COMPLETAR_ALL_TODO;

  constructor (public completada: boolean) {

  }
}

export class EditarTodoAction implements Action {
  readonly type = EDITAR_TODO;

  constructor (public id: number,
               public texto: string) {

  }
}

export class BorrarTodoAction implements Action {
  readonly type = BORRAR_TODO;

  constructor (public id: number) {

  }
}

export class BorrarAllTodoAction implements Action {
  readonly type = BORRAR_ALL_TODO;
}

export type Acciones = AgregarTodoAction |
                       CompletarTodoAction |
                       CompletarAllTodoAction |
                       EditarTodoAction |
                       BorrarTodoAction |
                       BorrarAllTodoAction;
