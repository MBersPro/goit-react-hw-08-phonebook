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
} from "./contacts/phoneBookActions";

axios.defaults.baseURL = "https://connections-api.herokuapp.com/";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const getContactsOperation = (userToken) => (dispatch) => {
  token.set(userToken);
  dispatch(getContactsRequest());
  axios
    .get("/contacts")
    .then(({ data }) => dispatch(getContactsSuccess(data)))
    .catch(() => dispatch(getContactsError()));
};

export const addNewContactOperation = (contact, userToken) => (dispatch) => {
  token.set(userToken);

  dispatch(addNewContactRequest());
  axios
    .post("/contacts/", contact)
      .then(({ data }) => {
          console.log(data)
          dispatch(addNewContactSuccess(data));
    })
    .catch((error) => {
      dispatch(addNewContactError(error));
    });
};

export const deleteContactOperation = (contactId, userToken) => (dispatch) => {
  token.set(userToken);

  dispatch(deleteContactRequest());
  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(deleteContactSuccess(contactId)))
    .catch((error) => {
      dispatch(deleteContactError(error));
    });
};

export const signUpAuthOperation = async (state) => {
  const signUpResponse = await axios.post("/users/signup", state);
  return signUpResponse;
};

export const signInAuthOperation = async (state) => {
  const signInResponse = await axios.post("/users/login", state);
  return signInResponse;
};
