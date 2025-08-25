const contactsModel = require("../model/contactModel");

const getContacts = async (req, res) => {
  try {
    const contact = await contactsModel.find();
    res.json(contact);
  } catch (error) {
    res.status(500).json({ message: "Error fetching contacts", error: error.message });
  }
};


// const getContactByID = (req, res) => {
//   const { id } = req.params;
//   const findContactWithHisID = findContact(id, res);

//   res.send(findContactWithHisID);
// };

// const createContact = (req, res) => {
//   const newContact = contacts.push(req.body);
//   res.send(contacts);
// };

// const editContact = (req, res) => {
//   const { id } = req.params;
//   const newContact = req.body;

//   const findContactWithHisID = findContact(id, res);
//   const editedContacts = contacts.map((contact) => {
//     if (contact.id === Number(findContactWithHisID.id)) {
//       return { ...contact, ...newContact };
//     }
//     return contact;
//   });

//   res.send(editedContacts);
// };

// const deleteContact = (req, res) => {
//   const { id } = req.params;

//   const findContactWithHisID = findContact(id, res);

//   const newContactAfterOneIsdeleted = contacts.filter(
//     (contact) => contact.id !== findContactWithHisID.id
//   );

//   res.send(newContactAfterOneIsdeleted);
// };

module.exports = {
  getContacts
//   getContactByID,
//   createContact,
//   editContact,
//   deleteContact,
};



// function findContact(id, res) {
//   const findContactWithHisID = contacts.find(
//     (contact) => contact.id === Number(id)
//   );

//   if (!findContactWithHisID) {
//     return res
//       .status(404)
//       .json({ success: false, message: "Contact not found!" });
//   }
//   return findContactWithHisID;
// }
