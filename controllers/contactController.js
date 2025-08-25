const contactModel = require("../model/contactModel");

const getContacts = async (req, res) => {
  try {
    const contact = await contactModel.find();
    console.log(contacts.map(c => c._id.toString()));
    res.json(contact);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching contacts", error: error.message });
  }
};

const getContactByID = async (req, res) => {
  const { id } = req.params;
  const contact = await contactModel.findById(id);

  res.json(contact);
};

const createContact = async (req, res) => {
  const newContact = await contactModel.create(req.body);
  res.json(newContact);
};

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
  getContacts,
  getContactByID,
    createContact,
  //   editContact,
  //   deleteContact,
};

function findContact(id, res) {
  const findContactWithHisID = contactModel.find(
    (contact) => contact.id === Number(id)
  );

  if (!findContactWithHisID) {
    return res
      .status(404)
      .json({ success: false, message: "Contact not found!" });
  }
  return findContactWithHisID;
}
