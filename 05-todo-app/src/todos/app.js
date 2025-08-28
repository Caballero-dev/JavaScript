import todoStore, { Filters } from "../store/todo.store";
import html from "./app.html?raw";
import { renderTodos, renderPending } from "./use-cases";

const ElementIDs = {
  TodoList: '.todo-list',
  NewTodoInput: '#new-todo-input',
  ClearCompletedBtn: '.clear-completed',
  TodoFilters: '.filtro',
  PendingCountLabel: '#pending-count',
}

/**
 * 
 * @param {String} elementId 
 */
export const App = ( elementId ) => {

  const displayTodo = () => {
    const todos = todoStore.getTodos( todoStore.getCurrentFilter() );
    renderTodos( ElementIDs.TodoList, todos );
    updatePendingCount();
  }

  const updatePendingCount = () => {
    renderPending( ElementIDs.PendingCountLabel );
  }

  (()=>{
    const app = document.createElement('div');
    app.innerHTML = html;
    document.querySelector(elementId).append(app);
    displayTodo();
  })()

  // Referencias html
  const newDescriptionInput = document.querySelector( ElementIDs.NewTodoInput );
  const todoListUl = document.querySelector( ElementIDs.TodoList );
  const clearCompletedBtn = document.querySelector( ElementIDs.ClearCompletedBtn );
  const filtersLi = document.querySelectorAll( ElementIDs.TodoFilters );

  // Listeners 
  newDescriptionInput.addEventListener('keyup', ( event ) => {
    
    if ( event.keyCode !== 13 ) return;
    if ( event.target.value.trim().length === 0 ) return;

    todoStore.addTodo( event.target.value );
    displayTodo();
    event.target.value = '';
  });

  todoListUl.addEventListener('click', (event) => {

    const element = event.target.closest('[data-id]');
    const classList = event.target.classList; 

    if( element && classList.contains( 'destroy' ) ) {
      todoStore.deleteTodo( element.getAttribute('data-id') );
    } else if ( element && classList.contains( 'toggle' ) ) {
      todoStore.toggleTodo( element.getAttribute('data-id') );
    } else {
      console.log( 'dev' );
    }

    displayTodo();
  });

  clearCompletedBtn.addEventListener('click', () => {
    
    todoStore.deleteCompleted();
    displayTodo();
    
  });

  filtersLi.forEach( element => {
    element.addEventListener('click', (event) => {
      filtersLi.forEach( el => el.classList.remove('selected') );
      event.target.classList.add('selected');

      switch( event.target.text ) {
        case 'Todos':
          todoStore.setFilter(Filters.All);
          break;
        case 'Pendientes':
        todoStore.setFilter(Filters.Pending);
          break;
        case 'Completados':
        todoStore.setFilter(Filters.Completed);
          break;
      }

      displayTodo();

    })
  });


}

