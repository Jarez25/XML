const express = require('express');
const app = express();

app.get('/contacts', (req, res) => {
  const contacts = [
    { firstName: 'John', lastName: 'Doe', phoneNumber: '5551234567' },
    { firstName: 'Jane', lastName: 'Smith', phoneNumber: '5559876543' },
  ];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<AddressBook>\n`;
  contacts.forEach((contact) => {
    xml += `
    <Contact>
        <FirstName>${contact.firstName}</FirstName>
        <LastName>${contact.lastName}</LastName>
        <PhoneNumber>${contact.phoneNumber}</PhoneNumber>
    </Contact>`;
  });
  xml += `\n</AddressBook>`;

  res.set('Content-Type', 'text/xml');
  res.send(xml);
});

module.exports = app;
