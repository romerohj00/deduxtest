
import * as fromTodo from './todo.actions';
import { Todo } from './model/todo.model';

const todo1 = new Todo('Terminar el curso');
const todo2 = new Todo('Aprender Angular redux');

const estadoInicial: Todo[] = [todo1, todo2];

export function todoReducer(state = estadoInicial, action: fromTodo.Acciones): Todo[] {

  switch (action.type) {

    case fromTodo.AGREGAR_TODO:
      const todo = new Todo(action.texto);
      return [...state, todo];

    case fromTodo.COMPLETAR_TODO:

      return state.map(todoEdit => {
        if (todoEdit.id === action.id) {
          return {
            ...todoEdit,
            completada: !todoEdit.completada
          };
        } else {
          return todoEdit;
        }
      });

    case fromTodo.COMPLETAR_ALL_TODO:

      return state.map(todoEdit => {
        return {
          ...todoEdit,
          completada: action.completada
        };
      });

    case fromTodo.EDITAR_TODO:

      return state.map(todoEdit => {
        if (todoEdit.id === action.id) {
          return {
            ...todoEdit,
            texto: action.texto
          };
        } else {
          return todoEdit;
        }
      });

    case fromTodo.BORRAR_TODO:

      return state.filter(todoEdit => todoEdit.id !== action.id);

    case fromTodo.BORRAR_ALL_TODO:

    return state.filter(todoEdit => !todoEdit.completada);

    default:
      return state;

  }

}
