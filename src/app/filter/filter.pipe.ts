import { Pipe, PipeTransform, ɵConsole } from '@angular/core';
import { Todo } from '../todo/model/todo.model';
import * as fromFiltro from './filter.actions';

@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filtro: fromFiltro.filtrosValidos ): Todo[] {


    switch (filtro) {

      case 'completadas':
      return todos.filter(todo => todo.completada);

      case 'pendientes':
      return todos.filter(todo => !todo.completada);

      default:
        return todos;

    }

  }

}
