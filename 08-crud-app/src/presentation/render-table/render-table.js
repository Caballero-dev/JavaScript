import usersStore from '../../store/users-store';
import { deleteUserById } from '../../use-cases/delete-user-by-id';
import { showModal } from '../render-modal/render-modal';
import './render-table.css';

let table;

const createTable = () => {
  const table = document.createElement('table');
  const tableHeader = document.createElement('thead');
  tableHeader.innerHTML = `
    <tr>
      <th>#ID</th>
      <th>Balance</th>
      <th>FirstName</th>
      <th>LastName</th>
      <th>Active</th>
      <th>Actions</th>
    </tr>
  `;

  const tableBody = document.createElement('tbody');
  table.append( tableHeader, tableBody );

  return table;
}

/**
 * 
 * @param {MouseEvent} event 
 */
const tableSelectListener = (event) => {
  const element = event.target.closest('#btnSelect');
  if ( !element ) return;

  const id = element.getAttribute('data-id');
  showModal( id );
}

/**
 * 
 * @param {MouseEvent} event 
 */
const tableDeleteListener = async (event) => {
  const element = event.target.closest('#btnDelete');
  if ( !element ) return;

  const id = element.getAttribute('data-id');
  try {

    await deleteUserById(id);
    await usersStore.reloadPage(); 
    document.querySelector('#current-page').innerText = usersStore.getCurrentPage();
    renderTable();

  } catch (error) {
    console.log( error );
    alert('No se pudo eliminar');
  }
}


/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderTable = ( element ) => {

  const users = usersStore.getUsers();

  if ( !table ) {
    table = createTable();
    element.append( table );

    table.addEventListener('click', tableSelectListener);
    table.addEventListener('click', tableDeleteListener);
  }

  let tableHTML = '';
  users.forEach( usr => {
    tableHTML += `
      <tr>
        <td>${ usr.id }</td>
        <td>${ usr.balance }</td>
        <td>${ usr.firstName }</td>
        <td>${ usr.lastName }</td>
        <td>${ usr.isActive }</td>
        <td id="btn">
          <button id="btnSelect" data-id="${ usr.id }">Select</button>
          <button id="btnDelete" data-id="${ usr.id }">Delete</button>
        </td>
      </tr>
    `;
  });

  table.querySelector('tbody').innerHTML = tableHTML;

}