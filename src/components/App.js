import React, { Component } from "react";
import Layout from "./Layuot";
import ContactForm from "./ContactForm";
import { v4 as uuidv4 } from "uuid";
import ContactList from "./ContactList";
import Filter from "./Filter";
import PropTypes from "prop-types";

export default class App extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object),
    filter: PropTypes.string,
  };
  state = {
    contacts: [],
    filter: "",
  };
   componentDidMount(){
   const persistedContacts = localStorage.getItem('contacts')
   if(persistedContacts){
     this.setState({
       contacts:JSON.parse(persistedContacts)
     })
   }
   }
   componentDidUpdate(prevState){
     if(prevState.contacts!== this.state.contacts){
  localStorage.setItem('contacts',JSON.stringify(this.state.contacts))
     }
   }
  addContact = ({ name, number }) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    };
    this.setState((prevState) => {
      return !this.uniqContact(contact)
        ? {
            contacts: [...prevState.contacts, contact],
          }
        : window.alert(`${contact.name} is already in contacts.`);
    });
  };
  uniqContact = (contactList) => {
    const { contacts } = this.state;
    return contacts.find(({ name }) => name === contactList.name);
  };
  removeContact = (contactId) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };

  changeFilter = (filter) => {
    this.setState({ filter });
  };
  getFilteredContacts = () => {
    const { filter, contacts } = this.state;

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  render() {
    const { filter, contacts } = this.state;
    const filteredContacts = this.getFilteredContacts();
    return (
      <Layout>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.addContact} />

        {contacts.length > 0 && (
          <>
            <Filter value={filter} onChangeFilter={this.changeFilter} />
            <ContactList
              contacts={filteredContacts}
              onRemove={this.removeContact}
            />
          </>
        )}
      </Layout>
    );
  }
}
