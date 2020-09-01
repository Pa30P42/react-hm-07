import React from "react";
import styles from "./ContactItem.module.css";
import { connect } from "react-redux";
// import actions from "../redux/actions";
import contactsOperations from "../redux/contactsOperations";

const ContactItem = ({ contact, deleteContact, id }) => {
  return (
    <li className={styles.contactItem}>
      <p>
        {contact.name}: {contact.number}
      </p>
      <button type="button" onClick={() => deleteContact(id)}>
        Delete
      </button>
    </li>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  deleteContact: () => dispatch(contactsOperations.removeContact(ownProps.id)),
});
const mapStateToProps = (state, ownProps) => {
  const item = state.contacts.items.find((item) => item.id === ownProps.id);
  return {
    ...item,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactItem);
