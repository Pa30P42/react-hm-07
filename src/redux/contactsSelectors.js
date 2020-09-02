import { createSelector } from "@reduxjs/toolkit";

const getContacts = (state) => state.contacts.items;
const getState = (state) => state.contacts;
const getAlert = (state) => state.alert;
const getLoading = (state) => state.loading;
const getEdit = (state) => state.edit;
const getFilter = (state) => state.contacts.filter;

const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (items, filter) => {
    return items.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export default {
  getEdit,
  getState,
  getContacts,
  getAlert,
  getLoading,
  getFilter,
  getFilteredContacts,
};
