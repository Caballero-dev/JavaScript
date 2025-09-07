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

const onUserChanged = () => {
  throw new Error('No implementado');
}

const reloadPage = async () => {
  throw new Error('No implementado');
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