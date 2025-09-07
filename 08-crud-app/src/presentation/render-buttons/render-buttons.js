import usersStore from "../../store/users-store";
import { renderTable } from "../render-table/render-table";
import './render-buttons.css';


/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderButtons = ( element ) => {
  
  const divBtn = document.createElement('div');
  divBtn.id = 'btnDiv';

  const nextBtn = document.createElement('button');
  nextBtn.innerText = 'Next >';

  const prevBtn = document.createElement('button');
  prevBtn.innerText = '< Prev ';

  const currentPageLabel = document.createElement('span');
  currentPageLabel.id =  'current-page';
  currentPageLabel.innerText =  usersStore.getCurrentPage();
  
  divBtn.append( prevBtn, currentPageLabel, nextBtn )

  element.append( divBtn );

  nextBtn.addEventListener('click', async () =>{
    await usersStore.loadNextPage();
    currentPageLabel.innerText = usersStore.getCurrentPage();
    renderTable( element );
  });

  prevBtn.addEventListener('click', async () =>{
    await usersStore.loadPreviousPage();
    currentPageLabel.innerText = usersStore.getCurrentPage();
    renderTable( element );
  });

}