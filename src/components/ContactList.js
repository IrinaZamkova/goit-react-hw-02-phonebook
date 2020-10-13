import React from "react";
import { List, ContactItem, ContactBtn, ItemParag } from "./conponents.styled";
import PropTypes from "prop-types";

export default function ContactList({ contacts, onRemove }) {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ContactItem key={id}>
          <ItemParag>
            {name}: {number}
          </ItemParag>
          <ContactBtn onClick={() => onRemove(id)}>Delate</ContactBtn>
        </ContactItem>
      ))}
    </List>
  );
}
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onRemove: PropTypes.func,
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};
