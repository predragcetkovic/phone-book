import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";

function ContactList({ contacts, deleteContact }) {
  return (
    <div>
      <h2>Contact List</h2>
      <List>
        {contacts.map((contact, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={`${contact.name} - ${contact.phoneNumber}`}
            />
            <Button
              onClick={() => deleteContact(index)}
              variant="outlined"
              color="secondary"
            >
              Delete
            </Button>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default ContactList;
