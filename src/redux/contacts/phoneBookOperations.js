import axios from "axios";

import {
  addNewContactSuccess,
  deleteContactSuccess,
  getContactsSuccess,
  getContactsError,
  addNewContactError,
  deleteContactError,
  getContactsRequest,
  addNewContactRequest,
  deleteContactRequest,
} from "./phoneBookActions";

axios.defaults.baseURL = "http://localhost:4000";

export const getContactsOperation = () => (dispatch) => {
  dispatch(getContactsRequest());
  axios
    .get("/contacts")
    .then(({ data }) => dispatch(getContactsSuccess(data)))
    .catch(() => dispatch(getContactsError()));
};

export const addNewContactOperation = (contact) => (dispatch) => {
  dispatch(addNewContactRequest());
  axios
    .post("/contacts/", contact)
    .then(({ data }) => dispatch(addNewContactSuccess(data)))
    .catch((error) => {
      dispatch(addNewContactError(error));
    });
};

export const deleteContactOperation = (id) => (dispatch) => {
  dispatch(deleteContactRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch((error) => {
      dispatch(deleteContactError(error));
    });
};
