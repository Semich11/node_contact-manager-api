const express = require('express');
const { getContacts, getContactByID, createContact, editContact, deleteContact} = require('../controllers/contactController');

const router = express.Router();

router.route("/").get(getContacts);
router.route("/:id").get(getContactByID);
router.route("/create-contact").post(createContact);
router.route("/edit-contact/:id").put(editContact);
router.route("/delete-contact/:id").delete(deleteContact);

module.exports = router;