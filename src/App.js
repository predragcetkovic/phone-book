import React, { useState, useEffect } from "react";
import ContactForm from "../src/ContactForm";
import ContactList from "../src/ContactList";
import Container from "@mui/material/Container";

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem("contacts"));
    if (storedContacts) {
      setContacts(storedContacts);
    }
  }, []);

  const addContact = (name, phoneNumber) => {
    const newContact = { name, phoneNumber };
    const updatedContacts = [...contacts, newContact];
    setContacts(updatedContacts);
    localStorage.setItem("contacts", JSON.stringify(updatedContacts));
  };

  const deleteContact = (index) => {
    const updatedContacts = contacts.filter((_, i) => i !== index);
    setContacts(updatedContacts);
    localStorage.setItem("contacts", JSON.stringify(updatedContacts));
  };

  return (
    <Container maxWidth="sm">
      <h1>Contact Directory App</h1>
      <ContactForm addContact={addContact} />
      <ContactList contacts={contacts} deleteContact={deleteContact} />
    </Container>
  );
}

export default App;
