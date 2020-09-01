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
export default { addContact, fetchContacts, removeContact };
