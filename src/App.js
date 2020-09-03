import React, { Component } from "react";
import Form from "./contactsForm/Form";
import Contacts from "./contacts/Contacts";
import Filter from "./filter/Filter";
import styles from "./App.module.css";
import stylesAlert from "./alert/Alert.module.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Alert from "./alert/Alert";
import { connect } from "react-redux";
import contactActions from "./redux/actions";
import contactsOperations from "./redux/contactsOperations";
import contactsSelectors from "./redux/contactsSelectors";

class App extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  alertSwitch = () => {
    this.props.switchAlert();
  };

  render() {
    const { alert, isLoading } = this.props.contacts;

    return (
      <>
        <TransitionGroup className={styles.titleWrapper}>
          <CSSTransition
            classNames={styles}
            in={true}
            appear={true}
            timeout={500}
            unmountOnExit
          >
            <h2 className={styles.phonebookTitle}> Phonebook</h2>
          </CSSTransition>
          {alert && (
            <CSSTransition
              classNames={stylesAlert}
              in={true}
              appear={true}
              timeout={500}
              unmountOnExit
            >
              <Alert alertSwitch={this.alertSwitch} />
            </CSSTransition>
          )}
        </TransitionGroup>
        <Form addContact={this.props.addContact} />
        <h2 className={styles.phonebookTitle}>Contacts</h2>
        <Filter />
        {isLoading && <h2>Loading contacts ...</h2>}
        <Contacts />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contacts: contactsSelectors.getState(state),
    alert: contactsSelectors.getAlert(state),
    isLoading: contactsSelectors.getLoading(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addContact: (contact) => dispatch(contactActions.onAddContact(contact)),
    switchAlert: () => dispatch(contactActions.switchAlert()),
    fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
