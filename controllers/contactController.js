const contactModel = require("../model/contactModel");

const getContacts = async (req, res) => {
  try {
    const contact = await contactModel.find();
    res.json(contact);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching contacts", error: error.message });
  }
};

const getContactByID = async (req, res) => {
  try{
    const { id } = req.params;
    const contact = await contactModel.findById(id);
  
    res.json(contact);
  } catch(error) {
    res.status(404).json({
      success: false,
      data: `❌ Contact not found: ${error.message}`
    })
  }
};

const createContact = async (req, res) => {
  try{

    const newContact = await contactModel.create(req.body);
    res.json(newContact);
  } catch(error) {
    res.status(500).json({
      success: false,
      data: `❌ 500 Internal Server Error: ${error}`
    })
  }
};

const editContact = async (req, res) => {
  try {
    const { id } = req.params;
    const newContact = req.body;

    const editedContact = await contactModel.findByIdAndUpdate(
      id,
      newContact,
      { new: true, runValidators: true }
    );

    if (!editedContact) {
      return res.status(404).send({ message: "Contact not found" });
    }

    res.send(editedContact);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};


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
  editContact,
  //   deleteContact,
};
