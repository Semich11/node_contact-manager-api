// const {
//     getContacts,
//     getContactByID,
//     createContact,
//     editContact,
//     deleteContact
// } = require('./controllers/contactController');
const express = require('express');
const router = require('./routes/contact');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api", router);


// app.get('/', getContacts)

// app.get('/:id', getContactByID)

// app.post("/create-contact", createContact)

// app.put('/edit-contact/:id', editContact)

// app.delete('/delete-contact/:id', deleteContact)

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
    console.log(`App server is listening to port: ${PORT}`)
})
