import { createAction } from "@reduxjs/toolkit";
import {
  GETCONTACTSSUCCESS,
  ADDNEWCONTACTSUCCESS,
  DELETECONTACTSUCCESS,
  FILTERNAME,
  GETCONTACTSERROR,
  ADDNEWCONTACTERROR,
  DELETECONTACTERROR,
  REMOVEERROR,
  GETCONTACTSREQUEST,
  ADDNEWCONTACTREQUEST,
  DELETECONTACTREQUEST,
} from "./phoneBookTypes";

const getContactsSuccess = createAction(GETCONTACTSSUCCESS);
const addNewContactSuccess = createAction(ADDNEWCONTACTSUCCESS);
const deleteContactSuccess = createAction(DELETECONTACTSUCCESS);
const filterName = createAction(FILTERNAME);

const getContactsError = createAction(GETCONTACTSERROR)
const addNewContactError = createAction(ADDNEWCONTACTERROR)
const deleteContactError = createAction(DELETECONTACTERROR);
const removeError = createAction(REMOVEERROR)

const getContactsRequest = createAction(GETCONTACTSREQUEST)
const addNewContactRequest = createAction(ADDNEWCONTACTREQUEST)
const deleteContactRequest = createAction(DELETECONTACTREQUEST)

export {
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
};
