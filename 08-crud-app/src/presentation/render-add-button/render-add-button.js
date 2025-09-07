import './render-add-button.css';

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderAddButton = ( element ) => {

  const fabBtn = document.createElement('button');
  fabBtn.innerText = '+';
  fabBtn.classList.add('fab-btn');

  element.append( fabBtn );

  fabBtn.addEventListener('click', () => {
    throw new Error('No implementado');
  })

}