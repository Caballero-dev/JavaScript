import usersStore from '../../store/users-store';
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
 * @param {HTMLDivElement} element 
 */
export const renderTable = ( element ) => {

  const users = usersStore.getUsers();

  if ( !table ) {
    table = createTable();
    element.append( table );

    // TODO: listerners
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
          <button id="btnSelect">Select</button>
          <button id="btnDelete">Delete</button>
        </td>
      </tr>
    `;
  });

  table.querySelector('tbody').innerHTML = tableHTML;

}