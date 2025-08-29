import todoStore, { Filters } from "../store/todo.store";
import html from "./app.html?raw";
import { renderTodos, renderPending } from "./use-cases";

const ElementIDs = {
  TodoList: '.todo-list',
  NewTodoInput: '#new-todo-input',
  ClearCompletedBtn: '.clear-completed',
  TodoFilters: '.filtro',
  PendingCountLabel: '#pending-count',
  EditInput: '.edit',
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

    todoStore.addTodo( event.target.value.trim() );
    displayTodo();
    event.target.value = '';
  });

  todoListUl.addEventListener('click', (event) => {
      const isCheckElement = event.target.className === 'toggle';
      const element = event.target.closest('[data-id]');

      if ( !element || !isCheckElement ) return;

      todoStore.toggleTodo( element.getAttribute('data-id') );
      displayTodo();
  });

  todoListUl.addEventListener('click', (event) => {
      const isDestroyElement = event.target.className === 'destroy';
      const element = event.target.closest('[data-id]');
      if ( !element || !isDestroyElement ) return;

      todoStore.deleteTodo( element.getAttribute('data-id') );
      displayTodo();
  });

  todoListUl.addEventListener('dblclick', (event) => {
    
    const element = event.target.closest('[data-id]');
    element.classList.add('editing');

    const input = element.querySelector('.edit');
    input.value = element.querySelector('label').innerText;
    input.focus();
        
    input.addEventListener('keyup', (event) => {
      if ( event.keyCode !== 13 ) return;
      if ( event.target.value.trim().length === 0 ) return;
      
      todoStore.updateTodo( element.getAttribute('data-id'), event.target.value.trim() );
      displayTodo();
    })

    input.addEventListener('blur', (event) => {
      element.classList.remove('editing')
    })

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

