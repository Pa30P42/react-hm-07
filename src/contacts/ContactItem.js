import React, { useState } from "react";
import styles from "./ContactItem.module.css";
import { connect, useDispatch } from "react-redux";
// import actions from "../redux/actions";
import contactsOperations from "../redux/contactsOperations";
import contactsSelectors from "../redux/contactsSelectors";
// import contactsReducer from "../redux/contactsReducer";
import actions from "../redux/actions";

const ContactItem = ({ contact, deleteContact, id, editContact }) => {
  const dispatch = useDispatch();

  console.log("editContact", editContact);
  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const changeName = (e) => {
    setName(e.target.value);
  };
  const changeNumber = (e) => {
    setNumber(e.target.value);
  };

  const showIsEdit = () => {
    setIsEdit(true);
  };
  const hideIsEdit = () => {
    setIsEdit(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(contactsOperations.editContact({ name, number, id }));
    hideIsEdit();
  };
  return (
    <li className={styles.contactItem}>
      {!isEdit ? (
        <div>
          <p>
            {contact.name}: {contact.number}
          </p>
          <button onClick={showIsEdit}>Edit</button>
          <button type="button" onClick={() => deleteContact(id)}>
            Delete
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          // className={styles.formWrapper}
        >
          <h3
          // className={styles.inputTitle}
          >
            Name
          </h3>
          <label>
            <input
              // className={styles.formInput}
              type="text"
              name="name"
              value={name}
              onChange={changeName}
            />
          </label>
          <h3
          // className={styles.inputTitle}
          >
            Phone
          </h3>
          <label>
            <input
              // className={styles.formInput}
              type="text"
              name="number"
              value={number}
              onChange={changeNumber}
            />
          </label>
          <button
            // className={styles.btn}

            type="submit"
          >
            Save Contact
          </button>
        </form>
      )}
    </li>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  deleteContact: () => dispatch(contactsOperations.removeContact(ownProps.id)),
  editContact: () => dispatch(actions.editContact()),
  // switchAlert: () => dispatch(contactActions.switchAlert()),
});
const mapStateToProps = (state, ownProps) => ({
  isEdit: contactsSelectors.getEdit(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactItem);
