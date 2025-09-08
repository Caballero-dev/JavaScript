import { User } from "../models/user";
import { loadUsersByPage } from "../use-cases/load-users-by-page";

const state = {
  currentPage: 0,
  next: true,
  prev: false,
  users: [],
}

const loadNextPage = async () => {
  if ( !state.next) return;

  const users = await loadUsersByPage( state.currentPage + 1 );
  state.next = users.next ? true : false;
  state.prev = users.prev ? true : false;
  state.currentPage += 1;
  state.users = users.data;
}

const loadPreviousPage = async () => {
  if ( !state.prev ) return;

  const users = await loadUsersByPage( state.currentPage - 1 );
  state.next = users.next ? true :  false;
  state.prev = users.prev ? true :  false;
  state.currentPage -= 1;
  state.users = users.data;
}

/**
 * 
 * @param {User} user 
 */
const onUserChanged = ( user ) => {

  let wasFound = false;

  state.users = state.users.map( usr => {
    if ( usr.id === user.id ) {
      wasFound = true;
      return user;
    }
    return usr;
  });

  if ( state.users.length < 10 && !wasFound ) {
    state.users.push( user );
  }

}

const reloadPage = async () => {
  const users = await loadUsersByPage( state.currentPage );
  if ( !users.next && users.last < state.currentPage ) {
    await loadPreviousPage();
    return;
  };
  state.next = users.next ? true : false;
  state.prev = users.prev ? true : false;
  state.users = users.data;
}

export default {
  loadNextPage,
  loadPreviousPage,
  onUserChanged,
  reloadPage,
  /**
   * 
   * @returns {User[]}
   */
  getUsers: () => [...state.users],
  /**
   * 
   * @returns {Number}
   */
  getCurrentPage: () => state.currentPage,
}