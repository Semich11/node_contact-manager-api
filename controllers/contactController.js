const contactModel = require("../model/contactModel");

const getContacts = async (req, res) => {
  try {
    console.log("Get all contact method")
    const contacts = await contactModel.find();

    if(!contacts) {
      return res.status(404).send({success: false, message: "Contact not found" });
    }

    res.json({success: true, data: contacts});
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching contacts", error: error.message });
  }
};

const getContactByID = async (req, res) => {
  try {
    const { id } = req.params;
    const contact = await contactModel.findById(id);

    if(!contact) {
      return res.status(404).send({success: false, message: "Contact not found" });
    }

    res.json(contact);
  } catch (err) {
    res
      .status(500)
      .send({ success: false, message: "Internal Server Error: " });
  }
};

const createContact = async (req, res) => {
  try {
    const newContact = await contactModel.create(req.body);

    if(!newContact) {
      return res.status(400).send({success: false, message: "Bad request" });
    }
    
    res.json(newContact);
  } catch (err) {
    res
      .status(500)
      .send({ success: false, message: "Internal Server Error: " });
  }
};

const editContact = async (req, res) => {
  try {
    const { id } = req.params;
    const newContact = req.body;

    const editedContact = await contactModel.findByIdAndUpdate(id, newContact, {
      new: true,
      runValidators: true,
    });


    if(!editedContact) {
      return res.status(400).send({success: false, message: "Bad request" });
    }


    res.send(editedContact);
  } catch (err) {
    res
      .status(500)
      .send({ success: false, message: "Internal Server Error: " });
  }
};

const deleteContact = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("Delete method");

    const deletedContact = await contactModel.findOneAndDelete(id);
    console.log("object");

    if (!deletedContact) {
      return res.status(404).send({success: false, message: "Contact not found" });
    }

    res.send(deletedContact);
  } catch (err) {
    res
      .status(500)
      .send({ success: false, message: "Internal Server Error: " });
  }
};

module.exports = {
  getContacts,
  getContactByID,
  createContact,
  editContact,
  deleteContact,
};
