import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
  addNewContactSuccess,
  deleteContactSuccess,
  getContactsSuccess,
  filterName,
  getContactsError,
  addNewContactError,
  deleteContactError,
  removeError,
  getContactsRequest,
  addNewContactRequest,
  deleteContactRequest,
} from "./phoneBookActions";

const initialState = {
  contactsList: [],
  filterName: "",
};

const contactsReducer = createReducer(initialState, {
  [getContactsSuccess]: (state, action) => ({
    ...state,
    contactsList: action.payload,
  }),
  [addNewContactSuccess]: (state, action) => ({
    ...state,
    contactsList: [...state.contactsList, action.payload],
  }),
  [deleteContactSuccess]: (state, action) => ({
    ...state,
    contactsList: state.contactsList.filter(
      (contact) => contact.id !== action.payload
    ),
  }),
  [filterName]: (state, action) => ({ ...state, filterName: action.payload }),
});

const errorReducer = createReducer(false, {
  [getContactsError]: () => true,
  [addNewContactError]: () => true,
  [deleteContactError]: () => true,
  [removeError]: () => false,
});

const loaderReducer = createReducer(false, {
  [getContactsRequest]: () => true,
  [addNewContactRequest]: () => true,
  [deleteContactRequest]: () => true,

  [getContactsSuccess]: () => false,
  [addNewContactSuccess]: () => false,
  [deleteContactSuccess]: () => false,
});

const phoneBookReducer = combineReducers({
  contacts: contactsReducer,
  error: errorReducer,
  loader: loaderReducer,
});

export default phoneBookReducer;
