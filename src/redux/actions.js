import { createAction } from "@reduxjs/toolkit";
/* TYPES */
export const ADDCONTACT = "contact/ADD";
export const DELETECONTACT = "contact/DEL";
export const FILTERVALUE = "contact/FV";
export const GETFILTERVALUE = "contact/GETFV";
export const ALERTHANDLER = "contact/ALERT";

/* ACTIONS */

const addContactRequest = createAction("contact/ADDTASKREQUEST");
const addContactSuccess = createAction("contact/ADDTASKSUCCESS");
const addContactError = createAction("contact/ADDTASKERROR");

const fetchContactRequest = createAction("contact/fetchTASKREQUEST");
const fetchContactSuccess = createAction("contact/fetchTASKSUCCESS");
const fetchContactError = createAction("contact/fetchTASKERROR");

const removeContactRequest = createAction("contact/removeASKREQUEST");
const removeContactSuccess = createAction("contact/removeTASKSUCCESS");
const removeContactError = createAction("contact/removeTASKERROR");

const editContactRequest = createAction("contact/editASKREQUEST");
const editContactSuccess = createAction("contact/editTASKSUCCESS");
const editContactError = createAction("contact/editTASKERROR");

// const onAddContact = createAction("contact/ADD");
const onDeleteContact = createAction("contact/DEL");
const filterValue = createAction("contact/FV", (e) => ({
  payload: {
    filter: e.target.value,
  },
}));
const switchAlert = createAction("contact/ALERT");
const switchEdit = createAction("contact/EDIT");

export default {
  editContactRequest,
  editContactSuccess,
  editContactError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
  // onAddContact,
  onDeleteContact,
  filterValue,
  switchAlert,
  switchEdit,
};
