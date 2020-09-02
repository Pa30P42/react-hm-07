import axios from "axios";
const { default: actions } = require("./actions");

const addContact = (contact) => (dispatch) => {
  dispatch(actions.addContactRequest());

  axios
    .post("http://localhost:4040/contacts", { ...contact })
    .then((response) => {
      dispatch(actions.addContactSuccess(response.data));
    })
    .catch((error) => dispatch(actions.addContactError(error)));
};

const fetchContacts = () => (dispatch) => {
  dispatch(actions.fetchContactRequest());

  axios
    .get("http://localhost:4040/contacts")
    .then(({ data }) => {
      dispatch(actions.fetchContactSuccess(data));
    })
    .catch((error) => {
      dispatch(actions.fetchContactError(error));
    });
};

const removeContact = (id) => (dispatch) => {
  dispatch(actions.fetchContactRequest());
  axios
    .delete(`http://localhost:4040/contacts/${id}`)
    .then(() => dispatch(actions.removeContactSuccess(id)))
    .catch((error) => dispatch(actions.removeContactSuccess(error)));
};
const editContact = ({ name, number, id }) => (dispatch) => {
  dispatch(actions.editContactRequest());
  axios
    .patch(`http://localhost:4040/contacts/${id}`, { name, number })
    .then(({ data }) => dispatch(actions.editContactSuccess(data)))
    .catch((error) => dispatch(actions.editContactError(error)));
};
export default { addContact, fetchContacts, removeContact, editContact };

// import axios from "axios";
// const { default: actions } = require("./actions");

// const addContact = (contact) => (dispatch) => {
//   dispatch(actions.addContactRequest());

//   axios
//     .post("https://redux22-fb5c0.firebaseio.com/contacts.json", { ...contact })
//     .then((response) => {
//       dispatch(actions.addContactSuccess(response.data));
//     })
//     .catch((error) => dispatch(actions.addContactError(error)));
// };

// const fetchContacts = () => (dispatch) => {
//   dispatch(actions.fetchContactRequest());

//   axios
//     .get("https://redux22-fb5c0.firebaseio.com/contacts.json")
//     .then(({ data }) => {
//       dispatch(actions.fetchContactSuccess(data));
//     })
//     .catch((error) => {
//       dispatch(actions.fetchContactError(error));
//     });
// };

// const removeContact = (id) => (dispatch) => {
//   dispatch(actions.fetchContactRequest());
//   axios
//     .delete(`https://redux22-fb5c0.firebaseio.com/contacts.json/${id}`)
//     .then(() => dispatch(actions.removeContactSuccess(id)))
//     .catch((error) => dispatch(actions.removeContactSuccess(error)));
// };
// export default { addContact, fetchContacts, removeContact };
