import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import './PhoneBook.css';

function PhoneBook() {
  const [contacts, setContacts] = useState([]);

  const handleGetContacts = async () => {
    try {
      const permissions = await navigator.permissions.query({ name: 'contacts' });

      if (permissions.state === 'granted') {
        const contactsData = await navigator.contacts.select(['name', 'email', 'tel']);
        setContacts(contactsData);
      } else {
        console.log('Contacts permission denied');
      }
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

  return (
    <div className="phone-book-box">
      <h2>Phone Book</h2>
      <Button variant="contained" color="primary" onClick={handleGetContacts}>
        Get Contacts
      </Button>
      <div className="contacts-list">
        {contacts.map((contact, index) => (
          <div key={index} className="contact">
            <p>Name: {contact.name}</p>
            {contact.email && <p>Email: {contact.email}</p>}
            {contact.tel && <p>Phone: {contact.tel[0].value}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PhoneBook;
